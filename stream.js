var through   = require('through');
var transform = require('./index');

module.exports = function(filename) {
  filename = filename || '<stdin>';
  var buffer = '';
  return through(
    function(chunk) { buffer += chunk; },
    function() {
      var compiled;
      try {
        compiled = transform(buffer);
      } catch(err) {
        this.emit('error', err);
      }
      if (compiled) this.queue(transform(compiled));
      this.queue(null);
    });
}
