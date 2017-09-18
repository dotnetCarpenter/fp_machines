'use strict'

// const identify = x => x

const gen = (f, start, stop, accu = []) => {
  if(start >= stop) return accu
  accu.push(f(start))
  return gen(f, start + 1, stop, accu)
}

const range = (start, step, stop) => {
  if(stop == null) {
    stop = step
    step = stop - start
  }
  return gen(x => x /*+ step*/, start, stop || step)
}

const map = (f, data) =>
  gen(x => f(data[x]), 0, data.length)

const repeat = (value, times) => gen(() => value, 0, times).join('')

module.exports = {
  gen, range, map, repeat
}
