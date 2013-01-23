var $ = require('ep_etherpad-lite/static/js/rjquery').$; // use jQuery

exports.aceEditEvent = function (hook_name, args, cb) {
  offlineEdit.saveEdit();
}


offlineEdit = {

  // get padURL
  getPadHTML: function(){
    var exportURL = $('iframe.[name="ace_outer"]').contents().find('iframe').contents().find("#innerdocbody").html();
    return exportURL;
  },

  // Save pad content to localstorage
  saveEdit: function (){
    // when a document is edited it is stored as HTML in an object called padOffline.html
    var padOffline = {};
    padOffline.html = offlineEdit.getPadHTML();
    localStorage.setItem("html", padOffline.html);
  },

  // Load Pad content from local storage
  loadEdit: function(){
    // Retrieve the object from storage
    var retrievedObject = localStorage.getItem('html');
    console.warn('retrievedObject: ', retrievedObject);
  }
};
