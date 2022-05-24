var http = require('http');
const { API_KEY } = require('./apikey');
const { SignatureSessionRestCore : SignatureSessionRestCore } = require('./lib/signature-session-rest-core');
const { RestPKICoreClient: RestPKICoreClient } = require('./lib/restpkicore-client');
const { DocumentSummary: DocumentSummary } = require('./lib/document-summary')
const { SignatureSessionRequestModel: SignatureSessionRequestModel} = require('./lib/signature-session-rest-core-model');
const { DocumentMetadata: DocumentMetadata } = require('./lib/document-metadata');

// Live server, not needed for now 
// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.end('Hello World!');
// }).listen(8080);

var client = new RestPKICoreClient('https://core.pki.rest/', API_KEY, null, null);

async function testLog(){
  this._signSession = new SignatureSessionRestCore(client);
  const response =  await this._signSession.getSignatureSession('3fa85f64-5717-4562-b3fc-2c963f66afa6');
  // console.log(response);
}
var requestSignature = {
  'documentMetadata': 5,
  'enableBackgroundProcessing': true,
  'documents': {
  }
}

var signatureRequestModel = new SignatureSessionRequestModel(requestSignature);
console.log(signatureRequestModel._documentMetadata);

console.log(requestSignature['enableBackgroundProcessing']);
console.log(requestSignature['documentMetadata']);

// testLog();

