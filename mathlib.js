var request = require('request');

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

module.exports = {
  getNumber: getNumber,
  getSqrt: getSqrt
};
    