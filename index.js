'use strict';

var visitors = require('./fbtransform/visitors').transformVisitors;
var transform = require('jstransform').transform;

module.exports = function(code) {
  return transform(visitors.react, code).code;
};
