var require = {};

// You clever bastard, you can probably get the padID and pass that to offline.html!
var pathname = window.location.pathname;
var padId = pathname.split('/');
padId = padId[padId.length - 1];
// redirect to offline.html with a padId set as a param
window.location.href = "/offline.html?padId="+padId;
