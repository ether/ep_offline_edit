
var themes = {

  init: function() {
    var theme = themes.getUrlVars()['theme'];
    if(theme){ // add the theme to the end of a document as a css link href
      cssLink = "../../static/custom/" + theme + ".css";
      cssLink = "<link rel='stylesheet' href='"+cssLink+"'>";
      $('body').append(cssLink);
    }
  },

  // Read a page's GET URL variables and return them as an associative array.
  getUrlVars: function() {
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
      hash = hashes[i].split('=');
      vars.push(hash[0]);
      vars[hash[0]] = hash[1];
    }
    return vars;
  }
}

function postAceInit(){
  alert("wut");
}

themes.init();
