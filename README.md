# rest_pki_core_api

RestPkiCoreApi - JavaScript client for rest_pki_core_api
<b><i>Para Português, <a href=\"https://docs.lacunasoftware.com/pt-br/articles/rest-pki/core/integration/get-started\">clique aqui</a></i></b>  <p>   <a href=\"https://docs.lacunasoftware.com/en-us/articles/rest-pki/core/\">Rest PKI Core</a> is an upcoming version of   <a href=\"https://docs.lacunasoftware.com/en-us/articles/rest-pki/\">Rest PKI</a> that will have extended compatibility with environments and databases.  </p>  <p>   In addition to Windows Server (which is already supported by Rest PKI), Rest PKI Core will also run on <b>Linux</b> (Debian- and RedHat-based distributions)   and on <b>Docker</b>. As for database servers, in addition to SQL Server, <b>PostgreSQL</b> will also be supported.  </p>  <p>   <b>Before getting started, see the integration overview on the <a href=\"https://docs.lacunasoftware.com/en-us/articles/rest-pki/core/integration/\">Integration Guide</a></b>  </p>  <p>   For questions regarding the usage of this API, please reach us at <a href=\"https://lacuna.help/\">lacuna.help</a>  </p>    <h2>Parameters</h2>  <p>   You will need the following parameters:  </p>  <ul>   <li><b>Endpoint</b>: address of the Rest PKI Core instance that will be used</li>   <li><b>API Key</b>: authorization key for using the API</li>  </ul>  <p>   The <span class=\"model\">endpoint</span> must be prefixed to all relative URLs mentioned here. As for the <span class=\"model\">API Key</span>, see how to use it below.  </p>    <h2>Authentication</h2>  <p>   The API key must be sent on the <span class=\"model\">X-Api-Key</span> header on each request:  </p>    <!-- unfortunately, class \"example microlight\" doesn't seem to work here -->  <pre style=\"font-size: 12px; padding: 10px; border-radius: 4px; background: #41444e; font-weight: 600; color: #fff;\">  X-Api-Key: yourapp|xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx  </pre>    <h2>HTTP Codes</h2>    <p>   The APIs will return the following HTTP codes:  </p>    <table>   <thead>    <tr>     <th>Code</th>     <th>Description</th>    </tr>   </thead>   <tbody>    <tr>     <td><strong class=\"model-title\">200 (OK)</strong></td>     <td>Request processed successfully. The response is different for each API, please refer to the operation's documentation</td>    </tr>    <tr>     <td><strong class=\"model-title\">400 (Bad Request)</strong></td>     <td>Syntax error. For instance, when a required field was not provided</td>    </tr>    <tr>     <td><strong class=\"model-title\">401 (Unauthorized)</strong></td>     <td>API key not provided or invalid</td>    </tr>    <tr>     <td><strong class=\"model-title\">403 (Forbidden)</strong></td>     <td>API key is valid, but the application has insufficient permissions to complete the requested operation</td>    </tr>    <tr>     <td><strong class=\"model-title\">422 (Unprocessable Entity)</strong></td>     <td>API error. The response body is an <a href=\"#model-ErrorModelV2\" class=\"model\">ErrorModelV2</a>    </tr>    <tr>     <td><strong class=\"model-title\">500 (Internal Server Error)</strong></td>     <td>An unexpected error occurred. The <span class=\"model\">exceptionCode</span> contained on the response body may be of help for our support team during diagnostic.</td>    </tr>   </tbody>  </table>    <h3>Error Codes</h3>    <p>   Some of the error codes returned in the <span class=\"model\">code</span> field of an <a href=\"#model-ErrorModelV2\" class=\"model\">ErrorModelV2</a>   (body of responses with HTTP status code 422) are provided below*:  </p>    <table>   <thead>    <tr>     <th>Code</th>     <th>Description</th>    </tr>   </thead>   <tbody>    <tr>     <td class=\"model\">DocumentNotFound</td>     <td>A referenced document was not found (check the document ID)</td>    </tr>    <tr>     <td class=\"model\">SecurityContextNotFound</td>     <td>A referenced security context was not found (check the security context ID)</td>    </tr>    <tr>     <td class=\"model\">SignatureSessionNotFound</td>     <td>A referenced signature session was not found (check the signature session ID)</td>    </tr>    <tr>     <td class=\"model\">BadSignatureSessionOperation</td>     <td>The operation is invalid for the current signature session or document status. For instance, trying to await the session's completion if it is still <span class=\"model\">Pending</span> results in this error</td>    </tr>    <tr>     <td class=\"model\">BackgroundProcessing</td>     <td>The operation cannot be completed at this time because the resource is being processed in background</td>    </tr>    <tr>     <td class=\"model\">SignatureSessionTokenRequired</td>     <td>The signature session token was not passed on the <span class=\"model\">X-Signature-Session-Token</span> request header</td>    </tr>    <tr>     <td class=\"model\">BadSignatureSessionToken</td>     <td>An invalid signature session token was passed on the <span class=\"model\">X-Signature-Session-Token</span> request header. Check your application for possible corruption of the session token, which may contain characters <span class=\"code\">-</span> (hyphen) and <span class=\"code\">_</span> (underscore)</td>    </tr>    <tr>     <td class=\"model\">ExpiredSignatureSessionToken</td>     <td>An expired signature session token was passed on the <span class=\"model\">X-Signature-Session-Token</span> request header. Signature session tokens are normally valid for 4 hours.</td>    </tr>   </tbody>  </table>    <p style=\"font-size: 0.9em\">   *The codes shown above are the most common error codes. Nonetheless, this list is not comprehensive. New codes may be added anytime without previous warning.  </p>    <h2>Culture / Internationalization (i18n)</h2>  <p>The <span class=\"model\">Accept-Language</span> request header is observed by this API. The following cultures are supported:</p>  <ul>   <li><span class=\"code\">en-US</span> (or simply <span class=\"code\">en</span>)</li>   <li><span class=\"code\">pt-BR</span> (or simply <span class=\"code\">pt</span>)</li>  </ul>  <p><i>Notice: error messages are not affected by this header and therefore should not be displayed to users, being better suited for logging.</i></p>  
This SDK is automatically generated by the [Swagger Codegen](https://github.com/swagger-api/swagger-codegen) project:

- API version: 1.10.1 RTM
- Package version: 1.10.1 RTM
- Build package: io.swagger.codegen.v3.generators.javascript.JavaScriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/),
please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install rest_pki_core_api --save
```

#### git
#
If the library is hosted at a git repository, e.g.
https://github.com/GIT_USER_ID/GIT_REPO_ID
then install it via:

```shell
    npm install GIT_USER_ID/GIT_REPO_ID --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var RestPkiCoreApi = require('rest_pki_core_api');

var api = new RestPkiCoreApi.ApplicationKeysController29Api()
var appId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // {String} 
var opts = { 
  'body': new RestPkiCoreApi.CreateApplicationApiKeyRequest() // {CreateApplicationApiKeyRequest} 
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.apiApplicationsAppIdApiKeysPost(appId, opts, callback);
```

## Documentation for API Endpoints

All URIs are relative to */*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*RestPkiCoreApi.ApplicationKeysController29Api* | [**apiApplicationsAppIdApiKeysPost**](docs/ApplicationKeysController29Api.md#apiApplicationsAppIdApiKeysPost) | **POST** /api/applications/{appId}/api-keys | 
*RestPkiCoreApi.ApplicationsApi* | [**apiApplicationsIdDefaultDocumentMetadataGet**](docs/ApplicationsApi.md#apiApplicationsIdDefaultDocumentMetadataGet) | **GET** /api/applications/{id}/default-document-metadata | Returns the set of metadata values that is currently added for documents created by a given application
*RestPkiCoreApi.ApplicationsApi* | [**apiApplicationsIdDefaultDocumentMetadataPut**](docs/ApplicationsApi.md#apiApplicationsIdDefaultDocumentMetadataPut) | **PUT** /api/applications/{id}/default-document-metadata | Configures a set of metadata values to be added to each document created by the application
*RestPkiCoreApi.ApplicationsController29Api* | [**apiApplicationsGet**](docs/ApplicationsController29Api.md#apiApplicationsGet) | **GET** /api/applications | 
*RestPkiCoreApi.ApplicationsController29Api* | [**apiApplicationsIdDelete**](docs/ApplicationsController29Api.md#apiApplicationsIdDelete) | **DELETE** /api/applications/{id} | 
*RestPkiCoreApi.ApplicationsController29Api* | [**apiApplicationsIdGet**](docs/ApplicationsController29Api.md#apiApplicationsIdGet) | **GET** /api/applications/{id} | 
*RestPkiCoreApi.ApplicationsController29Api* | [**apiApplicationsNameAvailabilityGet**](docs/ApplicationsController29Api.md#apiApplicationsNameAvailabilityGet) | **GET** /api/applications/name-availability | 
*RestPkiCoreApi.ApplicationsController29Api* | [**apiApplicationsPost**](docs/ApplicationsController29Api.md#apiApplicationsPost) | **POST** /api/applications | 
*RestPkiCoreApi.AuthenticationApi* | [**apiV2AuthenticationCompletionPost**](docs/AuthenticationApi.md#apiV2AuthenticationCompletionPost) | **POST** /api/v2/authentication/completion | Completes a certificate authentication
*RestPkiCoreApi.AuthenticationApi* | [**apiV2AuthenticationPost**](docs/AuthenticationApi.md#apiV2AuthenticationPost) | **POST** /api/v2/authentication | Prepares for a certificate authentication
*RestPkiCoreApi.CertificatesApi* | [**apiCertificatesThumbprintSha256Get**](docs/CertificatesApi.md#apiCertificatesThumbprintSha256Get) | **GET** /api/certificates/{thumbprintSha256} | Retrieves information about a X.509 certificate previously used to sign some document
*RestPkiCoreApi.DocumentKeysApi* | [**apiDocumentKeysBatchPost**](docs/DocumentKeysApi.md#apiDocumentKeysBatchPost) | **POST** /api/document-keys/batch | Allocates a batch of document keys to be used later on document signatures
*RestPkiCoreApi.DocumentKeysApi* | [**apiDocumentKeysKeyGet**](docs/DocumentKeysApi.md#apiDocumentKeysKeyGet) | **GET** /api/document-keys/{key} | Queries documents by key
*RestPkiCoreApi.DocumentKeysApi* | [**apiDocumentKeysPost**](docs/DocumentKeysApi.md#apiDocumentKeysPost) | **POST** /api/document-keys | Allocates a document key to be used later on a document signature
*RestPkiCoreApi.DocumentKeysApi* | [**apiDocumentKeysUnusedGet**](docs/DocumentKeysApi.md#apiDocumentKeysUnusedGet) | **GET** /api/document-keys/unused | Queries unused document keys
*RestPkiCoreApi.DocumentsApi* | [**apiDocumentsIdGet**](docs/DocumentsApi.md#apiDocumentsIdGet) | **GET** /api/documents/{id} | Retrieves a document&#x27;s details
*RestPkiCoreApi.DocumentsApi* | [**apiDocumentsIdSignersGet**](docs/DocumentsApi.md#apiDocumentsIdSignersGet) | **GET** /api/documents/{id}/signers | Retrieves the full information about each of a document&#x27;s signers
*RestPkiCoreApi.DocumentsApi* | [**apiDocumentsKeysKeyGet**](docs/DocumentsApi.md#apiDocumentsKeysKeyGet) | **GET** /api/documents/keys/{key} | Finds a document&#x27;s details by its key
*RestPkiCoreApi.SignatureInspectionApi* | [**apiSignatureInspectionPut**](docs/SignatureInspectionApi.md#apiSignatureInspectionPut) | **PUT** /api/signature-inspection | Inspects a signed file, returning information about its signers and metadata about the corresponding document (if signed on this instance)
*RestPkiCoreApi.SignatureSessionsApi* | [**apiSignatureSessionsIdGet**](docs/SignatureSessionsApi.md#apiSignatureSessionsIdGet) | **GET** /api/signature-sessions/{id} | Retrieves a signature session&#x27;s details
*RestPkiCoreApi.SignatureSessionsApi* | [**apiSignatureSessionsIdWhenCompletedGet**](docs/SignatureSessionsApi.md#apiSignatureSessionsIdWhenCompletedGet) | **GET** /api/signature-sessions/{id}/when-completed | Waits for the completion of a signature session
*RestPkiCoreApi.SignatureSessionsApi* | [**apiSignatureSessionsPost**](docs/SignatureSessionsApi.md#apiSignatureSessionsPost) | **POST** /api/signature-sessions | Creates a signature session

## Documentation for Models

 - [RestPkiCoreApi.AllocateDocumentKeyBatchRequest](docs/AllocateDocumentKeyBatchRequest.md)
 - [RestPkiCoreApi.AllocateDocumentKeyRequest](docs/AllocateDocumentKeyRequest.md)
 - [RestPkiCoreApi.ApplicationKeyModel](docs/ApplicationKeyModel.md)
 - [RestPkiCoreApi.ApplicationKeyTypes](docs/ApplicationKeyTypes.md)
 - [RestPkiCoreApi.AuthenticationFailures](docs/AuthenticationFailures.md)
 - [RestPkiCoreApi.AuthorizationData](docs/AuthorizationData.md)
 - [RestPkiCoreApi.AuthorizationDataRootAuthorizationDataRolesRootRolesApplicationData](docs/AuthorizationDataRootAuthorizationDataRolesRootRolesApplicationData.md)
 - [RestPkiCoreApi.CertificateFullModel](docs/CertificateFullModel.md)
 - [RestPkiCoreApi.CertificateModel](docs/CertificateModel.md)
 - [RestPkiCoreApi.CertificateRequirement](docs/CertificateRequirement.md)
 - [RestPkiCoreApi.CertificateRequirementTypes](docs/CertificateRequirementTypes.md)
 - [RestPkiCoreApi.CertificateSummary](docs/CertificateSummary.md)
 - [RestPkiCoreApi.CmsSignatureOptions](docs/CmsSignatureOptions.md)
 - [RestPkiCoreApi.CompleteAuthenticationRequest](docs/CompleteAuthenticationRequest.md)
 - [RestPkiCoreApi.CompleteAuthenticationResponse](docs/CompleteAuthenticationResponse.md)
 - [RestPkiCoreApi.CreateApplicationApiKeyRequest](docs/CreateApplicationApiKeyRequest.md)
 - [RestPkiCoreApi.CreateApplicationApiKeyResponse](docs/CreateApplicationApiKeyResponse.md)
 - [RestPkiCoreApi.CreateSignatureSessionRequest](docs/CreateSignatureSessionRequest.md)
 - [RestPkiCoreApi.CreateSignatureSessionResponse](docs/CreateSignatureSessionResponse.md)
 - [RestPkiCoreApi.DigestAlgorithmAndValueModel](docs/DigestAlgorithmAndValueModel.md)
 - [RestPkiCoreApi.DigestAlgorithms](docs/DigestAlgorithms.md)
 - [RestPkiCoreApi.DocumentFileModel](docs/DocumentFileModel.md)
 - [RestPkiCoreApi.DocumentKeyModel](docs/DocumentKeyModel.md)
 - [RestPkiCoreApi.DocumentKeyQueryResponse](docs/DocumentKeyQueryResponse.md)
 - [RestPkiCoreApi.DocumentKeySummary](docs/DocumentKeySummary.md)
 - [RestPkiCoreApi.DocumentModel](docs/DocumentModel.md)
 - [RestPkiCoreApi.DocumentQueryResponse](docs/DocumentQueryResponse.md)
 - [RestPkiCoreApi.DocumentStatus](docs/DocumentStatus.md)
 - [RestPkiCoreApi.DocumentSummary](docs/DocumentSummary.md)
 - [RestPkiCoreApi.ErrorModelV2](docs/ErrorModelV2.md)
 - [RestPkiCoreApi.FileReferenceModel](docs/FileReferenceModel.md)
 - [RestPkiCoreApi.InspectSignatureFailures](docs/InspectSignatureFailures.md)
 - [RestPkiCoreApi.InspectSignatureRequest](docs/InspectSignatureRequest.md)
 - [RestPkiCoreApi.InspectSignatureResponse](docs/InspectSignatureResponse.md)
 - [RestPkiCoreApi.NameModel](docs/NameModel.md)
 - [RestPkiCoreApi.PaginationOrders](docs/PaginationOrders.md)
 - [RestPkiCoreApi.PkiBrazilCertificateModel](docs/PkiBrazilCertificateModel.md)
 - [RestPkiCoreApi.PkiBrazilCertificateTypes](docs/PkiBrazilCertificateTypes.md)
 - [RestPkiCoreApi.PkiItalyCertificateModel](docs/PkiItalyCertificateModel.md)
 - [RestPkiCoreApi.PkiItalyCertificateTypes](docs/PkiItalyCertificateTypes.md)
 - [RestPkiCoreApi.PrepareAuthenticationRequest](docs/PrepareAuthenticationRequest.md)
 - [RestPkiCoreApi.PrepareAuthenticationResponse](docs/PrepareAuthenticationResponse.md)
 - [RestPkiCoreApi.Roles](docs/Roles.md)
 - [RestPkiCoreApi.RootAuthorizationData](docs/RootAuthorizationData.md)
 - [RestPkiCoreApi.RootRoles](docs/RootRoles.md)
 - [RestPkiCoreApi.SessionCompletionStatus](docs/SessionCompletionStatus.md)
 - [RestPkiCoreApi.SignatureAlgorithmAndValueModel](docs/SignatureAlgorithmAndValueModel.md)
 - [RestPkiCoreApi.SignatureAlgorithmIdentifier](docs/SignatureAlgorithmIdentifier.md)
 - [RestPkiCoreApi.SignatureAlgorithms](docs/SignatureAlgorithms.md)
 - [RestPkiCoreApi.SignatureSessionDocumentData](docs/SignatureSessionDocumentData.md)
 - [RestPkiCoreApi.SignatureSessionDocumentSummary](docs/SignatureSessionDocumentSummary.md)
 - [RestPkiCoreApi.SignatureSessionModel](docs/SignatureSessionModel.md)
 - [RestPkiCoreApi.SignatureSessionStatus](docs/SignatureSessionStatus.md)
 - [RestPkiCoreApi.SignatureTypes](docs/SignatureTypes.md)
 - [RestPkiCoreApi.SignerModel](docs/SignerModel.md)
 - [RestPkiCoreApi.SignerSummary](docs/SignerSummary.md)
 - [RestPkiCoreApi.SubscriptionAccessModel](docs/SubscriptionAccessModel.md)
 - [RestPkiCoreApi.SubscriptionAccessModelRolesRootRolesApplicationModel](docs/SubscriptionAccessModelRolesRootRolesApplicationModel.md)
 - [RestPkiCoreApi.SubscriptionAccessModelRolesRootRolesApplicationModelPaginatedSearchResponse](docs/SubscriptionAccessModelRolesRootRolesApplicationModelPaginatedSearchResponse.md)
 - [RestPkiCoreApi.ValidationItemModel](docs/ValidationItemModel.md)
 - [RestPkiCoreApi.ValidationItemTypes](docs/ValidationItemTypes.md)
 - [RestPkiCoreApi.ValidationResultsModel](docs/ValidationResultsModel.md)
 - [RestPkiCoreApi.WebhookEventModel](docs/WebhookEventModel.md)
 - [RestPkiCoreApi.WebhookEventTypes](docs/WebhookEventTypes.md)

## Documentation for Authorization

 All endpoints do not require authorization.

