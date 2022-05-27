var http = require('http');
const { API_KEY } = require('./apikey');
const { SignatureSessionRestCore : SignatureSessionRestCore } = require('./lib/signature-session-rest-core');
const { RestPKICoreClient: RestPKICoreClient } = require('./lib/restpkicore-client');
const { CreateSignatureSessionRequestModel: CreateSignatureSessionRequestModel} = require('./lib/create-signature-session-request-model');
const { CreateSignatureSessionResponseModel: CreateSignatureSessionResponseModel } = require('./lib/create-signature-session-response-model');
const { AuthenticationRestPkiCore: AuthenticationRestPkiCore } = require('./lib/authentication-restpki-core');
const { PrepareAuthenticationRequestModel : PrepareAuthenticationRequestModel} = require('./lib/prepare-authentication-request');
const { PrepareAuthenticationResponseModel : PrepareAuthenticationResponseModel } = require('./lib/prepare-authentication-response');
const { CompleteAuthenticationRequestModel : CompleteAuthenticationRequestModel } = require('./lib/complete-authentication-request-model');
const { CompleteAuthenticationResponseModel: CompleteAuthenticationResponseModel } = require('./lib/complete-authentication-response-model');
const { default: robin, default: batman, Batwoman, Gotham } = require('./lib');


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

  createSignatureRequestModel.setDisableDownloads(requestSignature['disableDownloads']);
  
  var createSignatureRequestModel = new CreateSignatureSessionRequestModel();
  console.log(createSignatureRequestModel.disableDownloads);

  const response = new CreateSignatureSessionResponseModel(await signSession.postSignatureSession(createSignatureRequestModel));

  console.log(response);

}

// testLog();
// testCreateSignatureSession(_signSession);

async function testPrepareAuthenticationRequest(client) {
  let auth = new AuthenticationRestPkiCore(client);
  
  let prepareAuthParams = {
    'securityContextId': '3fa85f64-5717-4562-b3fc-2c963f66afa6',
    'ignoreRevocationStatusUnknown': 'true'
  }

  let prepareAuthRequest = new PrepareAuthenticationRequestModel(prepareAuthParams);
  // DEBUG
  // console.log(prepareAuthRequest);
  
  let prepareAuthResponse = new PrepareAuthenticationResponseModel(await auth.prepareCertificateAuthentication(prepareAuthParams));
  // DEBUG
  console.log('response', prepareAuthResponse);
  // console.log('algorithm = ', prepareAuthResponse._toSignHash._algorithm);
  return prepareAuthResponse;
}

async function testCompleteAuthenticationRequest(client, state){
  let auth = new AuthenticationRestPkiCore(client);

  let completeAuthParams = {
    'state': state,
    'certificate': null,
    'signature': null
  }

  let completeCertAuthReq = new CompleteAuthenticationRequestModel(completeAuthParams);
  // DEBUG
  console.log('completeCertAuthReq: ', completeCertAuthReq);

  let completeCertAuthResponse = 
    auth.completeCertificateAuthentication(new CompleteAuthenticationResponseModel(await auth.completeCertificateAuthentication(completeCertAuthReq)));
  console.log('completeCertAuthResponse', completeCertAuthResponse);

  return completeCertAuthResponse;

}

// testPrepareAuthenticationRequest(client).then((res) => {
//   // console.log(res);
//   testCompleteAuthenticationRequest(client, res._state).then((result) => {
//     console.log(result);
//   });
// });

// new Gotham({redirectUrl: , sessionId:})