
var msb = require('msb');
var Responder = msb.Responder;
var magic = require('./mathlib').magic;

Responder.createServer({
  namespace: "magic:sqrt:v1"
})
.use(function(request, response, next) {
  console.log("request");
  console.log(request);

  if (!request.query || !request.query.x  || !request.query.y) {
    response.writeHead(400);
    response.end();
    return;
  }
  
  var n = magic(request.query.x, request.query.y);
  
  response.writeHead(200); 
  response.end({number: n}); 

})
.listen();