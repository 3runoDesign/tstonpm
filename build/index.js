var Calc = (function () {
  'use strict';

  var sum = function (numF, numS) {
      return numF + numS;
  };
  var sub = function (numF, numS) {
      return numF - numS;
  };
  var index = { sum: sum, sub: sub };

  return index;

}());
xports.default = index;
