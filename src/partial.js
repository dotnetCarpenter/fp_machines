'use strict'

exports.partial = function(f) {
  let n = f.length

  // maybe an optimization if(n === 1) return f

  return function partial(...xs) {
    if(n < xs.length) throw new TypeError((f.name || 'anonymous') + "does not accept " + xs.length + " arguments")
    return n === xs.length ? f.apply(f, xs) : partial.bind(f, ...xs)
  }
}


