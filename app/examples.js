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
};

var babelFish = function (lexicon, blurb) {
  var out = [];
  for (let word of blurb.split(/\W+/)) {
    if (word.toLowerCase() in lexicon) {
      var lower = lexicon[word.toLowerCase()]
      if (word.charAt(0) === word.charAt(0).toUpperCase()) {
        out.push(lower.charAt(0).toUpperCase() + lower.slice(1));
      } else {
        out.push(lower);
      }
    } else {
      out.push(word);
    }
  }
  return out.join(" ");
};

var dumpProperties = function (obj) {
  var out = [];
  for (let attr in obj) {
    out.push(attr);
  }
  return out;
};

var Address = (function () {
  function Address(city, state, zip) {
    this.city = city;
    this.state = state;
    this.zip = zip;
  }
  return Address;
})();

if (typeof module !== 'undefined') {
  module.exports = { 
    max: max,
    reverse: reverse,
    filterLongWords: filterLongWords,
    translate: translate,
    babelFish: babelFish,
    dumpProperties: dumpProperties,
    Address: Address
  }
}
