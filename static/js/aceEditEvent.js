'use strict';
/* global offlineEdit */
exports.aceEditEvent = (hookName, args, cb) => {
  offlineEdit.save();
  cb();
};
