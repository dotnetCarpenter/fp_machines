'use strict'

const identify = x => x

const gen = (f, start, stop, accu = []) => {
  if(start >= stop) return accu
  accu.push(f(start))
  return gen(f, start + 1, stop, accu)
}

const range = (start, stop) => {
  if(start > stop) return gen(x => -x, 0, 10)
  else return gen(identify, start, stop)

}

const map = (f, data) =>
  gen(x => f(data[x]), 0, data.length)

module.exports = {
  gen, range, map
}
