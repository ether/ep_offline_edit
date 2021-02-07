'use strict';

const eejs = require('ep_etherpad-lite/node/eejs');

exports.eejsBlock_disconnected = (hookName, args, cb) => {
  cb();
};

exports.eejsBlock_styles = (hookName, args, cb) => {
  cb();
};

exports.eejsBlock_scripts = (hookName, args, cb) => {
  args.content +=
    '<script src="/static/plugins/ep_offline_edit/static/js/offline_edit.js"></script>' +
    '<script src="/static/plugins/ep_offline_edit/static/js/lib/localForage.js"></script>';
  cb();
};

exports.eejsBlock_htmlHead = (hookName, args, cb) => {
  cb();
};

exports.expressConfigure = (hookName, args, cb) => {
  cb();
};

exports.expressServer = (hookName, args, cb) => {
  args.app.get('/serviceWorker.js', (req, res) => {
    const serviceWorker = eejs.require('ep_offline_edit/static/js/serviceWorker.js');
    res.setHeader('Content-Type', 'application/javascript');
    res.send(serviceWorker);
  });
  cb();
};
