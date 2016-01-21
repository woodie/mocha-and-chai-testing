"use strict";
var expect   = require('chai').expect;
var examples = require('../app/examples');

var words;

// Define a function called "max" that takes two number arguments
// and returns the largest of the two

describe('Examples', function () {

  describe('max()', function () {
    it('returns the largest of the two', function () {
      expect(examples.max(2,4)).to.equal(4);
    });
    it('does not return smaller of the two', function () {
      expect(examples.max(2,4)).not.to.equal(2);
    });
    it('returns the number, when same', function () {
      expect(examples.max(2,2)).to.equal(2);
    });
  });

// Define a function called "reverse" that takes a string argument
// and returns the reverse of the string

  describe('reverse()', function () {
    it('returns the reverse of the string', function () {
      expect(examples.reverse("foobar")).to.equal("raboof");
    });
    it('does not return the reverse original string', function () {
      expect(examples.reverse("foobar")).not.to.equal("foobar");
    });
  });

// Define a function "filterLongWords" that takes an array of words
// and an integer i and returns the array of words that are longer than i.

  describe('filterLongWords()', function () {
    before(function () {
      words = ['foo', 'bar', 'foobar', 'foobarbaz']
    });
    it('returns words longer than provided integer', function () {
      expect(examples.filterLongWords(words, 4)).to.deep.equal(['foobar', 'foobarbaz']);
    });
    it('returns all words when provided smaller integer', function () {
      expect(examples.filterLongWords(words, 2).length).to.equal(4);
    });
    it('returns some words when provided appropriate integer', function () {
      expect(examples.filterLongWords(words, 4)).not.to.be.empty;
    });
    it('returns no words when provided bigger integer', function () {
      expect(examples.filterLongWords(words, 9)).to.be.empty;
    });
  });

// Define a function "translate" that will translate a text into "rövarspråket".
// That is, double every consonant and place an occurrence of "o" in between.
// For example, translate("this is fun") should return the string "tothohisos isos fofunon".

  describe('translate()', function () {
    it('returns a string', function () {
      expect(typeof examples.translate("this is fun") === 'string').to.equal(true);
    });
    it('translates text into "rövarspråket"', function () {
      expect(examples.translate("this is fun")).to.equal("tothohisos isos fofunon");
    });
  });

// Represent a small bilingual lexicon as a Javascript object in the following fashion
// {"merry":"god", "christmas":"jul", "and":"och", "happy":"gott", "new":"nytt", "year":"år"}
// and use it to translate a Christmas card from English into Swedish.

  describe('babelFish()', function () {
    it('returns a string', function () {
      expect(typeof examples.babelFish({}, "foobar") === 'string').to.equal(true);
    });
    it('returns translation using lexicon objext', function () {
      var lib = {"merry":"god", "christmas":"jul", "and":"och",
                 "happy":"gott", "new":"nytt", "year":"år"};
      var en = "Merry Christmas and Happy New Year";
      var sv = "God Jul och Gott Nytt År";
      expect(examples.babelFish(lib, en)).to.equal(sv);
    });
  });

// Write an Address class with these properties and methods: City, State, Zip

  describe('dumpProperties()', function () {
    it('returns no properties', function () {
      var empty = {};
      expect(examples.dumpProperties(empty)).to.be.empty;
    });
    it('returns all properties', function () {
      var city = 'North Pole';
      var state = 'Alaska';
      var zip = 99705;
      var santa = new examples.Address(city, state, zip);
      expect(examples.dumpProperties(santa)).to.deep.equal(["city", "state", "zip"])
    });
  });

});
