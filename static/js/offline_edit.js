'use strict';

const offlineEdit = {

  // get HTML
  getPadHTML: () => $('iframe[name="ace_outer"]').contents().find('iframe')
      .contents().find('#innerdocbody').html(),

  // Save pad content to localstorage and to list of pads
  save: () => {
    const pathname = window.location.pathname;
    let padId = pathname.split('/');
    padId = padId[padId.length - 1];

    // when a document is edited it is stored as HTML in an object called padOffline.html
    localStorage.setItem(padId, offlineEdit.getPadHTML());

    // Now we extend the pads object with this pad data
    let pads = localStorage.getItem('pads'); // Get it
    if (!pads) { pads = '{}'; } // if pad object doesnt exist then create it
    pads = JSON.parse(pads); // Either way we have a string that needs parsing
    pads[padId] = {
      timestamp: new Date(), // Save a timestamp
    };
    pads = JSON.stringify(pads); // Make it a string
    localStorage.setItem('pads', pads); // Save it to localstorage
  },

  // Load Pad content from local storage
  load: (padId) => {
    // Retrieve the object from storage
    const padContents = localStorage.getItem(padId);
    return padContents;
  },

  // Load all available pads from local storage
  loadPads: () => JSON.parse(localStorage.getItem('pads')),

  listPads: () => {
    const pads = offlineEdit.loadPads();
    for (const key of pads) {
      let pad = `<div><span id='padId'><b><a class='padIdLink'>${key}</a></b></span>`;
      const obj = pads[key];
      for (const prop in obj) {
        if (prop === 'timestamp') {
          pad += `<span id='timestamp'>
            Last edited <time class='timeago' datetime='${obj[prop]}'></time>
            </span>`;
        } else {
          pad += obj[prop];
        }
      }
      pad += '</div>';
      $('#pads').append(pad);
    }
    $('time.timeago').timeago();
  },
};
