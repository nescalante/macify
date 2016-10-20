'use strict';

var isMac = global.navigator && /\bMac OS\b/.test(global.navigator.userAgent);

module.exports = macify;

function macify(text) {
  if (isMac) {
    return text
      .replace(/\bctrl\b/i, '\u2318')
      .replace(/\balt\b/i, '\u2325')
      .replace(/\bshift\b/i, '\u21e7');
  }

  return text;
}
