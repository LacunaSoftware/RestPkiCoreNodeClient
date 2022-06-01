# RestPkiCoreApi.ApplicationsApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiApplicationsIdDefaultDocumentMetadataGet**](ApplicationsApi.md#apiApplicationsIdDefaultDocumentMetadataGet) | **GET** /api/applications/{id}/default-document-metadata | Returns the set of metadata values that is currently added for documents created by a given application
[**apiApplicationsIdDefaultDocumentMetadataPut**](ApplicationsApi.md#apiApplicationsIdDefaultDocumentMetadataPut) | **PUT** /api/applications/{id}/default-document-metadata | Configures a set of metadata values to be added to each document created by the application

<a name="apiApplicationsIdDefaultDocumentMetadataGet"></a>
# **apiApplicationsIdDefaultDocumentMetadataGet**
> {&#x27;String&#x27;: [&#x27;String&#x27;]} apiApplicationsIdDefaultDocumentMetadataGet(id)

Returns the set of metadata values that is currently added for documents created by a given application

### Example
```javascript
import {RestPkiCoreApi} from 'rest_pki_core_api';

let apiInstance = new RestPkiCoreApi.ApplicationsApi();
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.apiApplicationsIdDefaultDocumentMetadataGet(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**String**](.md)|  | 

### Return type

**{&#x27;String&#x27;: [&#x27;String&#x27;]}**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="apiApplicationsIdDefaultDocumentMetadataPut"></a>
# **apiApplicationsIdDefaultDocumentMetadataPut**
> {&#x27;String&#x27;: [&#x27;String&#x27;]} apiApplicationsIdDefaultDocumentMetadataPut(id, opts)

Configures a set of metadata values to be added to each document created by the application

### Example
```javascript
import {RestPkiCoreApi} from 'rest_pki_core_api';

let apiInstance = new RestPkiCoreApi.ApplicationsApi();
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 
let opts = { 
  'body': null // {String: [String]} | 
};
apiInstance.apiApplicationsIdDefaultDocumentMetadataPut(id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**String**](.md)|  | 
 **body** | [**{String: [String]}**](Object.md)|  | [optional] 

### Return type

**{&#x27;String&#x27;: [&#x27;String&#x27;]}**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json
 - **Accept**: text/plain, application/json, text/json

