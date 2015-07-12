/*! alphaexcel.js v1.0.0 | (c) 2015 @felixmaier | https://github.com/felixmaier/AlphaExcel */
(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(factory);
  } else if (typeof exports === 'object') {
    module.exports = factory;
  } else {
    root.alphaExcel = factory();
  }
})(this, function () { "use strict";

  function numberToAlpha(number) {

    var a = 65;

    var length = 26;

    var letter = 0;

    var newNumber = 0;

    letter = (a + (number - 1) % length);

    letter = letter <= a ? "A" : String.fromCharCode(letter);

    newNumber = parseInt((number - 1) / length);

    if (newNumber > 0) return (numberToAlpha(newNumber) + letter);

    return (letter);

  };

  function alphaToNumber(letter) {

    if (!isNaN(letter)) return void 0;

    var length = letter.length;

    for (var ii = 0, number = 0; ii < length; ++ii) {
      number *= 26;
      number += letter.charCodeAt(ii) - ("A".charCodeAt(0) - 1);
    }

    return (number || 1);

  };

  return function () {
    switch (typeof arguments[0]) {
      case "string":
        return (alphaToNumber(arguments[0]));
      case "number":
        return (numberToAlpha(arguments[0]));
    }
    return void 0;
  };

});