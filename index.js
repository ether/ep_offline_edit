var eejs = require('ep_etherpad-lite/node/eejs');

exports.eejsBlock_disconnected = function (hook_name, args, cb) {
  args.content = args.content + eejs.require("ep_offline_edit/templates/editOfflineButton.ejs", {}, module);;
  return cb();
}

exports.eejsBlock_styles = function (hook_name, args, cb) {
  args.content = args.content + "<link href='/static/plugins/ep_offline_edit/static/css/edit_offline.css' rel='stylesheet'>";
  return cb();
}

exports.eejsBlock_scripts = function (hook_name, args, cb) {
  args.content += "<script src='/static/plugins/ep_offline_edit/static/js/offline_edit.js'></script>";
  // args.content += "<script src='/static/plugins/ep_offline_edit/static/js/jquery.zclip.min.js'></script>";
  return cb();
}

exports.eejsBlock_htmlHead = function (hook_name, args, cb) {
  args.content = "<html manifest='/static/plugins/ep_offline_edit/static/offline.manifest'>";
  return cb();
}

