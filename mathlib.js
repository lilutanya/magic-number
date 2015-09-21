var request = require('request');

var magic = exports;

function getNumber(x, y, next) {
  request('http://apps.wavana.com/magicnumber?x='+x+'&y=q'+y, function (err, res, body) {
    if (err || res.statusCode !== 200) return next(err);
    next(null, parseFloat(body));
  });
}

function getSqrt(num, next){
  if (Number.isNaN(num))  return next(new Error("Invalid number"));
  var data = Math.sqrt(num);
  next(null, data);
}

function getMagic(x, y, next) {
  magic.getNumber(x, y, function(err, number) {
    if (err) return next(err);

    magic.getSqrt(number, next);
  });
}

magic.getNumber = getNumber;
magic.getSqrt = getSqrt;
magic.getMagic = getMagic;
