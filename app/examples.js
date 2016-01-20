"use strict";

var max = function (one, two) {
  return (one >= two) ? one : two
};

var reverse = function(str) {
  var out = '';
  for (let i = str.length - 1; i >= 0; i--) {
    out += str[i] 
  }
  return out;
};

var filterLongWords = function (words, length) {
  var out = [];
  for (let word of words) {
    if (word.length > length) {
      out.push(word);
    }
  }
  return out;
};

var translate = function (str) {
  var out = '';
  for (let chr of str) {
    if ((/^[a-z]/i).test(chr) && !(/^[aeiou]$/i).test(chr)) {
      out += chr + 'o' + chr;
    } else {
      out += chr;
    }
  }
  return out;
}

if (typeof module !== 'undefined') {
  module.exports = { 
    max: max,
    reverse: reverse,
    filterLongWords: filterLongWords,
    translate: translate
  }
}
