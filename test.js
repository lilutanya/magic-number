 var test = require('tap').test;
 var magic = require('./mathlib');

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
