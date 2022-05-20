var http = require('http');
const { API_KEY } = require('./apikey');
const { SignatureSessionRestCore } = require('./lib/signature-session-rest-core');
const { RestPKICoreClient: RestPKICoreClient } = require('./restpkicore-client');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello World!');
}).listen(8080);

this._client = new RestPKICoreClient('https://core.pki.rest/', API_KEY, null, null);

this._signSession = new SignatureSessionRestCore(this._client);
this._signSession.getSignatureSession('3fa85f64-5717-4562-b3fc-2c963f66afa6');
