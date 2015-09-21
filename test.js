var test = require('tap').test;
var magic = require('./mathlib');
var simple = require('simple-mock');

test("Loading", function (t) {
  math = require("./mathlib");
  t.ok(math, "object loaded");
  t.end();
});

test("Validate getNumber result", function (t) {
  t.plan(3);
  magic.getNumber(5, 7, function (err, data) {
    t.notOk(err, 'No errors');
    t.equal(Number.isNaN(data), false, 'Valid number');
    t.ok(data, 'Data ok');
  });
});

test("Validate getSqrt result", function (t) {
  t.plan(3);
  magic.getSqrt(9, function (err, data) {
    t.notOk(err, 'No errors');
    t.ok(data, 'Data ok');
    t.equal(data, 3, "Valid result");
  });
});

test("Validate getMagic when getNumber returns an error", function (t) {
  t.plan(5);
  t.tearDown(simple.restore);

  simple.mock(magic, 'getNumber').callbackWith(new Error());
  simple.mock(magic, 'getSqrt');

  magic.getMagic(5, 6, function (err, data) {

    t.equals(magic.getNumber.callCount, 1);
    t.equals(magic.getNumber.lastCall.args[0], 5);
    t.equals(magic.getNumber.lastCall.args[1], 6);
    t.equals(magic.getSqrt.callCount, 0);

    t.ok(err, 'Error expected');
  });
})

test("Validate getMagic when getNumber returns a number", function (t) {
  t.plan(7);
  t.tearDown(simple.restore);

  simple.mock(magic, 'getNumber').callbackWith(null, 50);
  simple.mock(magic, 'getSqrt').callbackWith(null, 111);

  magic.getMagic(5, 6, function (err, data) {

    t.notOk(err, 'Error not expected');
    t.equals(magic.getNumber.callCount, 1);
    t.equals(magic.getNumber.lastCall.args[0], 5);
    t.equals(magic.getNumber.lastCall.args[1], 6);
    t.equals(magic.getSqrt.callCount, 1);
    t.equals(magic.getSqrt.lastCall.args[0], 50);
    t.equals(data, 111);
  });
})
