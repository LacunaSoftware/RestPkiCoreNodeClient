var http = require('http');
const { RestPKICoreClient: RestPKICoreClient } = require('./restpkicore-client');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello World!');
}).listen(8080);

let client = new RestPKICoreClient;
