var http = require('http');
var count = 0;

var onConnection = function (req, res) {
  // function is the call back and onConnection is the event that fires it
  // https://nodejs.org/api/http.html#http_http_createserver_requestlistener

  res.writeHead(200, {'Content-Type': 'text/plain'});

  res.end('Hello World\n' + count);
};

var server = http.createServer(onConnection);

server.listen(1337, "127.0.0.1");
