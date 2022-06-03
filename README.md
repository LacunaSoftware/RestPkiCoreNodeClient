# RestPkiCore-Client for node.js

RestPkiCore-Client - node.js client lib for RestPkiCoreClient

- API version: 1.10.1 RTM
- Package version: 1.0.3
- Build package: io.swagger.codegen.v3.generators.javascript.JavaScriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

Install it via:

```shell
npm install restpkicore-client --save
```

## Getting Started

Please follow the [installation](#installation) instruction, then create and execute the following JS code:

```javascript
import { ApiClient, SignatureSessionsApi, API_KEY_HEADER } from 'restpkicore-client';

var apiClient = ApiClient.instance;
apiClient.basePath = "https://core.pki.rest";
apiClient.defaultHeaders = API_KEY_HEADER;

new SignatureSessionsApi(apiClient).apiSignatureSessionsIdGet('3fa85f64-5717-4562-b3fc-2c963f66afa6', (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

Run with the following code on terminal (remember to replace the filename!):
```javascript
node --experimental-specifier-resolution=node yourcode.js
```

## Documentation for API Endpoints

All URIs are relative to */*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*RestPkiCoreClient.ApplicationKeysController29Api* | [**apiApplicationsAppIdApiKeysPost**](docs/ApplicationKeysController29Api.md#apiApplicationsAppIdApiKeysPost) | **POST** /api/applications/{appId}/api-keys | 
*RestPkiCoreClient.ApplicationsApi* | [**apiApplicationsIdDefaultDocumentMetadataGet**](docs/ApplicationsApi.md#apiApplicationsIdDefaultDocumentMetadataGet) | **GET** /api/applications/{id}/default-document-metadata | Returns the set of metadata values that is currently added for documents created by a given application
*RestPkiCoreClient.ApplicationsApi* | [**apiApplicationsIdDefaultDocumentMetadataPut**](docs/ApplicationsApi.md#apiApplicationsIdDefaultDocumentMetadataPut) | **PUT** /api/applications/{id}/default-document-metadata | Configures a set of metadata values to be added to each document created by the application
*RestPkiCoreClient.ApplicationsController29Api* | [**apiApplicationsGet**](docs/ApplicationsController29Api.md#apiApplicationsGet) | **GET** /api/applications | 
*RestPkiCoreClient.ApplicationsController29Api* | [**apiApplicationsIdDelete**](docs/ApplicationsController29Api.md#apiApplicationsIdDelete) | **DELETE** /api/applications/{id} | 
*RestPkiCoreClient.ApplicationsController29Api* | [**apiApplicationsIdGet**](docs/ApplicationsController29Api.md#apiApplicationsIdGet) | **GET** /api/applications/{id} | 
*RestPkiCoreClient.ApplicationsController29Api* | [**apiApplicationsNameAvailabilityGet**](docs/ApplicationsController29Api.md#apiApplicationsNameAvailabilityGet) | **GET** /api/applications/name-availability | 
*RestPkiCoreClient.ApplicationsController29Api* | [**apiApplicationsPost**](docs/ApplicationsController29Api.md#apiApplicationsPost) | **POST** /api/applications | 
*RestPkiCoreClient.AuthenticationApi* | [**apiV2AuthenticationCompletionPost**](docs/AuthenticationApi.md#apiV2AuthenticationCompletionPost) | **POST** /api/v2/authentication/completion | Completes a certificate authentication
*RestPkiCoreClient.AuthenticationApi* | [**apiV2AuthenticationPost**](docs/AuthenticationApi.md#apiV2AuthenticationPost) | **POST** /api/v2/authentication | Prepares for a certificate authentication
*RestPkiCoreClient.CertificatesApi* | [**apiCertificatesThumbprintSha256Get**](docs/CertificatesApi.md#apiCertificatesThumbprintSha256Get) | **GET** /api/certificates/{thumbprintSha256} | Retrieves information about a X.509 certificate previously used to sign some document
*RestPkiCoreClient.DocumentKeysApi* | [**apiDocumentKeysBatchPost**](docs/DocumentKeysApi.md#apiDocumentKeysBatchPost) | **POST** /api/document-keys/batch | Allocates a batch of document keys to be used later on document signatures
*RestPkiCoreClient.DocumentKeysApi* | [**apiDocumentKeysKeyGet**](docs/DocumentKeysApi.md#apiDocumentKeysKeyGet) | **GET** /api/document-keys/{key} | Queries documents by key
*RestPkiCoreClient.DocumentKeysApi* | [**apiDocumentKeysPost**](docs/DocumentKeysApi.md#apiDocumentKeysPost) | **POST** /api/document-keys | Allocates a document key to be used later on a document signature
*RestPkiCoreClient.DocumentKeysApi* | [**apiDocumentKeysUnusedGet**](docs/DocumentKeysApi.md#apiDocumentKeysUnusedGet) | **GET** /api/document-keys/unused | Queries unused document keys
*RestPkiCoreClient.DocumentsApi* | [**apiDocumentsIdGet**](docs/DocumentsApi.md#apiDocumentsIdGet) | **GET** /api/documents/{id} | Retrieves a document&#x27;s details
*RestPkiCoreClient.DocumentsApi* | [**apiDocumentsIdSignersGet**](docs/DocumentsApi.md#apiDocumentsIdSignersGet) | **GET** /api/documents/{id}/signers | Retrieves the full information about each of a document&#x27;s signers
*RestPkiCoreClient.DocumentsApi* | [**apiDocumentsKeysKeyGet**](docs/DocumentsApi.md#apiDocumentsKeysKeyGet) | **GET** /api/documents/keys/{key} | Finds a document&#x27;s details by its key
*RestPkiCoreClient.SignatureInspectionApi* | [**apiSignatureInspectionPut**](docs/SignatureInspectionApi.md#apiSignatureInspectionPut) | **PUT** /api/signature-inspection | Inspects a signed file, returning information about its signers and metadata about the corresponding document (if signed on this instance)
*RestPkiCoreClient.SignatureSessionsApi* | [**apiSignatureSessionsIdGet**](docs/SignatureSessionsApi.md#apiSignatureSessionsIdGet) | **GET** /api/signature-sessions/{id} | Retrieves a signature session&#x27;s details
*RestPkiCoreClient.SignatureSessionsApi* | [**apiSignatureSessionsIdWhenCompletedGet**](docs/SignatureSessionsApi.md#apiSignatureSessionsIdWhenCompletedGet) | **GET** /api/signature-sessions/{id}/when-completed | Waits for the completion of a signature session
*RestPkiCoreClient.SignatureSessionsApi* | [**apiSignatureSessionsPost**](docs/SignatureSessionsApi.md#apiSignatureSessionsPost) | **POST** /api/signature-sessions | Creates a signature session

## Documentation for Models

 - [RestPkiCoreClient.AllocateDocumentKeyBatchRequest](docs/AllocateDocumentKeyBatchRequest.md)
 - [RestPkiCoreClient.AllocateDocumentKeyRequest](docs/AllocateDocumentKeyRequest.md)
 - [RestPkiCoreClient.ApplicationKeyModel](docs/ApplicationKeyModel.md)
 - [RestPkiCoreClient.ApplicationKeyTypes](docs/ApplicationKeyTypes.md)
 - [RestPkiCoreClient.AuthenticationFailures](docs/AuthenticationFailures.md)
 - [RestPkiCoreClient.AuthorizationData](docs/AuthorizationData.md)
 - [RestPkiCoreClient.AuthorizationDataRootAuthorizationDataRolesRootRolesApplicationData](docs/AuthorizationDataRootAuthorizationDataRolesRootRolesApplicationData.md)
 - [RestPkiCoreClient.CertificateFullModel](docs/CertificateFullModel.md)
 - [RestPkiCoreClient.CertificateModel](docs/CertificateModel.md)
 - [RestPkiCoreClient.CertificateRequirement](docs/CertificateRequirement.md)
 - [RestPkiCoreClient.CertificateRequirementTypes](docs/CertificateRequirementTypes.md)
 - [RestPkiCoreClient.CertificateSummary](docs/CertificateSummary.md)
 - [RestPkiCoreClient.CmsSignatureOptions](docs/CmsSignatureOptions.md)
 - [RestPkiCoreClient.CompleteAuthenticationRequest](docs/CompleteAuthenticationRequest.md)
 - [RestPkiCoreClient.CompleteAuthenticationResponse](docs/CompleteAuthenticationResponse.md)
 - [RestPkiCoreClient.CreateApplicationApiKeyRequest](docs/CreateApplicationApiKeyRequest.md)
 - [RestPkiCoreClient.CreateApplicationApiKeyResponse](docs/CreateApplicationApiKeyResponse.md)
 - [RestPkiCoreClient.CreateSignatureSessionRequest](docs/CreateSignatureSessionRequest.md)
 - [RestPkiCoreClient.CreateSignatureSessionResponse](docs/CreateSignatureSessionResponse.md)
 - [RestPkiCoreClient.DigestAlgorithmAndValueModel](docs/DigestAlgorithmAndValueModel.md)
 - [RestPkiCoreClient.DigestAlgorithms](docs/DigestAlgorithms.md)
 - [RestPkiCoreClient.DocumentFileModel](docs/DocumentFileModel.md)
 - [RestPkiCoreClient.DocumentKeyModel](docs/DocumentKeyModel.md)
 - [RestPkiCoreClient.DocumentKeyQueryResponse](docs/DocumentKeyQueryResponse.md)
 - [RestPkiCoreClient.DocumentKeySummary](docs/DocumentKeySummary.md)
 - [RestPkiCoreClient.DocumentModel](docs/DocumentModel.md)
 - [RestPkiCoreClient.DocumentQueryResponse](docs/DocumentQueryResponse.md)
 - [RestPkiCoreClient.DocumentStatus](docs/DocumentStatus.md)
 - [RestPkiCoreClient.DocumentSummary](docs/DocumentSummary.md)
 - [RestPkiCoreClient.ErrorModelV2](docs/ErrorModelV2.md)
 - [RestPkiCoreClient.FileReferenceModel](docs/FileReferenceModel.md)
 - [RestPkiCoreClient.InspectSignatureFailures](docs/InspectSignatureFailures.md)
 - [RestPkiCoreClient.InspectSignatureRequest](docs/InspectSignatureRequest.md)
 - [RestPkiCoreClient.InspectSignatureResponse](docs/InspectSignatureResponse.md)
 - [RestPkiCoreClient.NameModel](docs/NameModel.md)
 - [RestPkiCoreClient.PaginationOrders](docs/PaginationOrders.md)
 - [RestPkiCoreClient.PkiBrazilCertificateModel](docs/PkiBrazilCertificateModel.md)
 - [RestPkiCoreClient.PkiBrazilCertificateTypes](docs/PkiBrazilCertificateTypes.md)
 - [RestPkiCoreClient.PkiItalyCertificateModel](docs/PkiItalyCertificateModel.md)
 - [RestPkiCoreClient.PkiItalyCertificateTypes](docs/PkiItalyCertificateTypes.md)
 - [RestPkiCoreClient.PrepareAuthenticationRequest](docs/PrepareAuthenticationRequest.md)
 - [RestPkiCoreClient.PrepareAuthenticationResponse](docs/PrepareAuthenticationResponse.md)
 - [RestPkiCoreClient.Roles](docs/Roles.md)
 - [RestPkiCoreClient.RootAuthorizationData](docs/RootAuthorizationData.md)
 - [RestPkiCoreClient.RootRoles](docs/RootRoles.md)
 - [RestPkiCoreClient.SessionCompletionStatus](docs/SessionCompletionStatus.md)
 - [RestPkiCoreClient.SignatureAlgorithmAndValueModel](docs/SignatureAlgorithmAndValueModel.md)
 - [RestPkiCoreClient.SignatureAlgorithmIdentifier](docs/SignatureAlgorithmIdentifier.md)
 - [RestPkiCoreClient.SignatureAlgorithms](docs/SignatureAlgorithms.md)
 - [RestPkiCoreClient.SignatureSessionDocumentData](docs/SignatureSessionDocumentData.md)
 - [RestPkiCoreClient.SignatureSessionDocumentSummary](docs/SignatureSessionDocumentSummary.md)
 - [RestPkiCoreClient.SignatureSessionModel](docs/SignatureSessionModel.md)
 - [RestPkiCoreClient.SignatureSessionStatus](docs/SignatureSessionStatus.md)
 - [RestPkiCoreClient.SignatureTypes](docs/SignatureTypes.md)
 - [RestPkiCoreClient.SignerModel](docs/SignerModel.md)
 - [RestPkiCoreClient.SignerSummary](docs/SignerSummary.md)
 - [RestPkiCoreClient.SubscriptionAccessModel](docs/SubscriptionAccessModel.md)
 - [RestPkiCoreClient.SubscriptionAccessModelRolesRootRolesApplicationModel](docs/SubscriptionAccessModelRolesRootRolesApplicationModel.md)
 - [RestPkiCoreClient.SubscriptionAccessModelRolesRootRolesApplicationModelPaginatedSearchResponse](docs/SubscriptionAccessModelRolesRootRolesApplicationModelPaginatedSearchResponse.md)
 - [RestPkiCoreClient.ValidationItemModel](docs/ValidationItemModel.md)
 - [RestPkiCoreClient.ValidationItemTypes](docs/ValidationItemTypes.md)
 - [RestPkiCoreClient.ValidationResultsModel](docs/ValidationResultsModel.md)
 - [RestPkiCoreClient.WebhookEventModel](docs/WebhookEventModel.md)
 - [RestPkiCoreClient.WebhookEventTypes](docs/WebhookEventTypes.md)

## Documentation for Authorization

 All endpoints do not require authorization.

