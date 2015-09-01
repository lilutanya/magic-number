/**
 * This is the module
 */

var restify = require('restify');
var server = restify.createServer();
var magic = require('mathlib').magic;
var isInteger = require('mathlib').isInteger;

server.use(restify.queryParser());

server.get('/magicnumber', function (req, res, next) {

  var x = req.params.x || 0 ;
  var y = req.params.y || 0 ;

  if( !isInteger(x) || !isInteger(y)){
    var err = new restify.errors.InternalServerError('Wrong format!');
    return next(err);  
  }

  var s = magic(x, y);
  res.send(200, s);
  return next();
});

server.listen(8080, function () {
  console.log('%s listening at %s', server.name, server.url);
});




