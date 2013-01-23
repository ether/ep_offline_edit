var $ = require('ep_etherpad-lite/static/js/rjquery').$; // use jQuery

exports.aceEditEvent = function (hook_name, args, cb) {
  offlineEdit.save();
}

offlineEdit = {

  // get padURL
  getPadHTML: function(){
    return $('iframe.[name="ace_outer"]').contents().find('iframe').contents().find("#innerdocbody").html();
  },

  // Save pad content to localstorage
  save: function (){
    // when a document is edited it is stored as HTML in an object called padOffline.html
    localStorage.setItem("html", offlineEdit.getPadHTML());
  },

  // Load Pad content from local storage
  load: function(){
    // Retrieve the object from storage
    var retrievedObject = localStorage.getItem("html");
    console.warn('retrievedObject: ', retrievedObject);
  }
};


