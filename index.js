'use strict';

const eejs = require('ep_etherpad-lite/node/eejs');

exports.eejsBlock_disconnected = (hookName, args, cb) => {
  args.content += eejs.require('ep_offline_edit/templates/editOfflineButton.ejs', {}, module);
  cb();
};

exports.eejsBlock_styles = (hookName, args, cb) => {
  const url = '/static/plugins/ep_offline_edit/static/css/edit_offline.css';
  args.content += `<link href='${url}' rel='stylesheet'>`;
  cb();
};

exports.eejsBlock_scripts = (hookName, args, cb) => {
  args.content +=
      "<script src='/static/plugins/ep_offline_edit/static/js/offline_edit.js'></script>";
  cb();
};

exports.eejsBlock_htmlHead = (hookName, args, cb) => {
  args.content = "<html manifest='/offlinemanifest.appcache'>";
  cb();
};

exports.expressConfigure = (hookName, args, cb) => {
  cb();
};

exports.expressServer = (hookName, args, cb) => {
  args.app.get('/offline.html', (req, res) => {
    res.send(eejs.require('ep_offline_edit/templates/offline.ejs'));
  });

  args.app.get('/offlinemanifest.appcache', (req, res) => {
    res.setHeader('Content-Type', 'text/cache-manifest');
    res.send(eejs.require('ep_offline_edit/static/offlinemanifest.appcache'));
  });
  cb();
};
