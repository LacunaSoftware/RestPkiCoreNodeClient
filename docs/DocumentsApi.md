# RestPkiCoreClient.DocumentsApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiDocumentsIdGet**](DocumentsApi.md#apiDocumentsIdGet) | **GET** /api/documents/{id} | Retrieves a document&#x27;s details
[**apiDocumentsIdSignersGet**](DocumentsApi.md#apiDocumentsIdSignersGet) | **GET** /api/documents/{id}/signers | Retrieves the full information about each of a document&#x27;s signers
[**apiDocumentsKeysKeyGet**](DocumentsApi.md#apiDocumentsKeysKeyGet) | **GET** /api/documents/keys/{key} | Finds a document&#x27;s details by its key

<a name="apiDocumentsIdGet"></a>
# **apiDocumentsIdGet**
> DocumentModel apiDocumentsIdGet(id)

Retrieves a document&#x27;s details

### Example
```javascript
import {RestPkiCoreClient} from 'rest_pki_core_api';

let apiInstance = new RestPkiCoreClient.DocumentsApi();
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.apiDocumentsIdGet(id, (error, data, response) => {
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

[**DocumentModel**](DocumentModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="apiDocumentsIdSignersGet"></a>
# **apiDocumentsIdSignersGet**
> [SignerModel] apiDocumentsIdSignersGet(id)

Retrieves the full information about each of a document&#x27;s signers

### Example
```javascript
import {RestPkiCoreClient} from 'rest_pki_core_api';

let apiInstance = new RestPkiCoreClient.DocumentsApi();
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.apiDocumentsIdSignersGet(id, (error, data, response) => {
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

[**[SignerModel]**](SignerModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="apiDocumentsKeysKeyGet"></a>
# **apiDocumentsKeysKeyGet**
> DocumentQueryResponse apiDocumentsKeysKeyGet(key)

Finds a document&#x27;s details by its key

The key may be given either in formatted form (e.g. *XXXX-XXXX-XXXX-XXXX*) or unformatted (e.g. *XXXXXXXXXXXXXXXX*)    If a document with the given key is not found, the response is a &#x60;200 (Success)&#x60; with &#x60;\&quot;found\&quot;: false&#x60;.

### Example
```javascript
import {RestPkiCoreClient} from 'rest_pki_core_api';

let apiInstance = new RestPkiCoreClient.DocumentsApi();
let key = "key_example"; // String | 

apiInstance.apiDocumentsKeysKeyGet(key, (error, data, response) => {
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
 **key** | **String**|  | 

### Return type

[**DocumentQueryResponse**](DocumentQueryResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

