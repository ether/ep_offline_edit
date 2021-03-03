'use strict';
/* globals localforage */
exports.aceEditEvent = (hookName, args) => {
  // only get edits
  if (!args.callstack.docTextChanged) return;
  // dont get initial text because it wont be the full contents
  if (args.callstack.editEvent.editType === 'setBaseText') return;
  if (args.callstack.type === 'setup') return;

  const padOuter = $('iframe[name="ace_outer"]').contents().find('body');
  const padInner = padOuter.contents('iframe').contents().find('body');
  try {
    // Pad HTML is now set in localforage! :)
    localforage.setItem(clientVars.padId, padInner.html());
  } catch (err) {
    console.log(err);
  }
};
