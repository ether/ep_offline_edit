var eejs = require('ep_etherpad-lite/node/eejs'),
 express = require('ep_etherpad-lite/node_modules/express');

exports.eejsBlock_disconnected = function (hook_name, args, cb) {
  args.content = args.content + eejs.require("ep_offline_edit/templates/editOfflineButton.ejs", {}, module);
  return cb();
}

exports.eejsBlock_styles = function (hook_name, args, cb) {
  args.content = args.content + "<link href='/static/plugins/ep_offline_edit/static/css/edit_offline.css' rel='stylesheet'>";
  return cb();
}

exports.eejsBlock_scripts = function (hook_name, args, cb) {
  args.content += "<script src='/static/plugins/ep_offline_edit/static/js/offline_edit.js'></script>";
  return cb();
}

exports.eejsBlock_htmlHead = function (hook_name, args, cb) {
  args.content = "<html manifest='/offlinemanifest.appcache'>";
  return cb();
}

exports.expressConfigure = function(hook_name, args, cb) {
}

exports.expressServer = function (hook_name, args, cb) {
  args.app.get('/offline.html', function(req, res) { 
    res.send(eejs.require("ep_offline_edit/templates/offline.ejs"));
  });

  args.app.get('/offlinemanifest.appcache', function(req, res) {
    res.setHeader('Content-Type', 'text/cache-manifest');
    res.send(eejs.require("ep_offline_edit/static/offlinemanifest.appcache"));
  });

}

