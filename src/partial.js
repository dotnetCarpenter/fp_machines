'use strict'

exports.partial = function(f, ...xs) {
  return f.bind(null, ...xs)
}
