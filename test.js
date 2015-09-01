/**
 * This is the test
 */

 var test = require('tap').test;
 var magic = require('./mathlib').magic;
 var isInteger = require('./mathlib').isInteger;

test("loading", function (t) {
  math = require("./mathlib")
  t.ok(math, "object loaded")
  t.end()
})

test("validate result", function (t) {
  t.equal(magic(1, 2), 250.34975534240093, "Valid result")
  t.end()
})