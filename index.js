'use strict';

var through = require('through2');

module.exports = function factory () {
  return function transform (file) {
    return through(function filetr (buf, enc, next) {
      this.push(buf.toString('utf8').replace(/["']use strict["']\s*;*/ig, ''));
      next();
    });
  };
};
