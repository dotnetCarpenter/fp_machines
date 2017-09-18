'use strict'

const tap = require('tap')

const gen = require('../src/gen_int').gen
const range = require('../src/gen_int').range
const map = require('../src/gen_int').map
const repeat = require('../src/gen_int').repeat

tap.test('ranges', t => {
  t.plan(3)

  let expected = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
  let actual   = range(0, 10)
  t.match(actual, expected, "should produce an array with integer values from 0 to 9")

  // great ideas: https://stackoverflow.com/questions/7290438/haskell-ranges-and-floats#7290493
  expected = [ 0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9 ]
  actual   = gen(x => x/10, 0.0, 10.0)
  t.match(actual, expected, "should produce an array with float values from 0 to 9")

  expected = [ -0, -1, -2, -3, -4, -5, -6, -7, -8, -9 ]
  actual   = gen(x => -x, 0, 10)
  t.match(actual, expected, "should produce an array with integer values from 0 to -9")

})

tap.test('map', t => {
  t.plan(2)

  let expected = [ 0, 2, 4, 6, 8, 10, 12, 14, 16, 18 ]
  let actual   = map(x=>x*2, range(0, 10))
  t.match(actual, expected, "should produce a new array with integer multiples of 0-9 as values from 0 to 18")

  expected = [ 'jon', 'iskra' ]
  actual   = map(x=>x.name, [{name:'jon'}, {name:'iskra'}])
  t.match(actual, expected)
})

tap.test('repeat', t => {
  t.plan(1)

  let expected = 'ani! ani!'
  let actual   = repeat('ani! ', 2)
  t.match(actual, expected, "should repeat the string 'ani! ' two times")
})

/*
tap.test('reduce', t => {
  t.plan(1)

  let expected = 22
  let actual   = reduce(x=>x*2, range(0, 10))
  t.match(actual, expected, "should produce a value of 22")

})*/

