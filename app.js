var http = require('http');
const { API_KEY } = require('./apikey');
const { SignatureSessionRestCore } = require('./lib/signature-session-rest-core');
const { RestPKICoreClient: RestPKICoreClient } = require('./restpkicore-client');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello World!');
}).listen(8080);

this._client = new RestPKICoreClient;

this._client._accessToken = API_KEY;
this._client._instance

this._signSession = SignatureSessionRestCore(this._client);
this._signSession.startSignatureSession();
