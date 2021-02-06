'use strict';

// You clever bastard, you can probably get the padID and pass that to offline.html!
const pathname = window.location.pathname;
let padId = pathname.split('/');
padId = padId[padId.length - 1];
// redirect to offline.html with a padId set as a param
window.location.href = `/offline.html?padId=${padId}`;
