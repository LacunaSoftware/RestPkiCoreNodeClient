var http = require('http');
const { API_KEY } = require('./apikey');
const { SignatureSessionRestCore : SignatureSessionRestCore } = require('./lib/signature-session-rest-core');
const { RestPKICoreClient: RestPKICoreClient } = require('./lib/restpkicore-client');
const { CreateSignatureSessionRequestModel: CreateSignatureSessionRequestModel} = require('./lib/create-signature-session-request-model');
const { CreateSignatureSessionResponseModel: CreateSignatureSessionResponseModel } = require('./lib/create-signature-session-response-model');

// Live server, not needed for now 
// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.end('Hello World!');
// }).listen(8080);

var client = new RestPKICoreClient('https://core.pki.rest/', API_KEY, null, null);
var _signSession = new SignatureSessionRestCore(client);

async function testLog(signSession){
  const response =  await signSession.getSignatureSession('3fa85f64-5717-4562-b3fc-2c963f66afa6');
  // console.log(response);
}

async function testCreateSignatureSession(signSession){
  var requestSignature = {
    'documentMetadata': {},
    'enableBackgroundProcessing': true,
    'disableDownloads': true,
    'documents': { 
      'file': {
        'url': 'https://cdn.lacunasoftware.com/restpki/Manual_de_Contexto_de_Seguranca_Global.pdf'
      }
    },
    'certificateRequirements' : []
  }
  
  var createSignatureRequestModel = new CreateSignatureSessionRequestModel(requestSignature);
  console.log(createSignatureRequestModel.disableDownloads);

  const response = new CreateSignatureSessionResponseModel(await signSession.postSignatureSession(createSignatureRequestModel));

  console.log(response);

}

// testLog();
testCreateSignatureSession(_signSession);

