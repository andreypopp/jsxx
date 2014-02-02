var transform = require('./index');
var reactify  = require('reactify');

module.exports = function(file) {
  return reactify.process(
    file,
    reactify.isJSXExtensionRe.exec(file),
    transform);
};
