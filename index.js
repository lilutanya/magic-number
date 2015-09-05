/**
 * This is the module
 */

var restify = require('restify');
var server = restify.createServer();
var magic = require('./mathlib').magic;
var isInteger = require('./mathlib').isInteger;
var msb = require('msb');

server.use(restify.queryParser());

server.get('/magicnumber', function (req, res, next) {

  var x = req.params.x || 0 ;
  var y = req.params.y || 0 ;

  if( !isInteger(x) || !isInteger(y)){
    var err = new restify.errors.InternalServerError('Wrong format!');
    return next(err);  
  }

  var payload = {
    query: {
        x: x,
        y: y
    }
  };

  msb.request('magic:sqrt:v1', payload, function(err, payload,  _fullMesssage) {

    if (err) return console.error(err);
    if (!payload) return console.error('response timed out');

    res.send(200, payload.body.number);

  });

  return next();
});

server.listen(8080, function () {
  console.log('%s listening at %s', server.name, server.url);
});




