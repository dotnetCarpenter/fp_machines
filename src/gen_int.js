'use strict'

const identify = x => x

const gen = (f, start, stop, accu = []) => {
  if(start >= stop) return accu
  accu.push(f(start))
  return gen(f, start + 1, stop, accu)
}

const range =(start, stop) =>
  gen(identify, start, stop)

module.exports = {
  gen, range
}
