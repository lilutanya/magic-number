 var test = require('tap').test;
 var magic = require('./mathlib');
 var isInteger = require('./mathlib').isInteger;

test("Loading", function (t) {
  math = require("./mathlib");
  t.ok(math, "object loaded");
  t.end();
});

test("Validate result", function (t) {
    t.plan(2);		
	magic(5, 7, function (err, data) {
        t.notOk(err, 'No errors');
	    t.ok(data, 'Data ok');
	});
});	

