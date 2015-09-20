/**
 * This is the module
 */

var http = require('http');
var restify = require('restify');
var server = restify.createServer();
var magic = require('./mathlib');

server.use(restify.queryParser());

server.get('/', function (req, res, next) {

  var x = req.params.x || 0 ;
  var y = req.params.y || 0 ;

  magic(x, y, function (err, data) {
    if(err) return next(err);  
    res.send(200, data);  
  });

});

server.listen(8080, function () {
  console.log('%s listening at %s', server.name, server.url);
});




