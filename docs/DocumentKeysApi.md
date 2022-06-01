# RestPkiCoreApi.DocumentKeysApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiDocumentKeysBatchPost**](DocumentKeysApi.md#apiDocumentKeysBatchPost) | **POST** /api/document-keys/batch | Allocates a batch of document keys to be used later on document signatures
[**apiDocumentKeysKeyGet**](DocumentKeysApi.md#apiDocumentKeysKeyGet) | **GET** /api/document-keys/{key} | Queries documents by key
[**apiDocumentKeysPost**](DocumentKeysApi.md#apiDocumentKeysPost) | **POST** /api/document-keys | Allocates a document key to be used later on a document signature
[**apiDocumentKeysUnusedGet**](DocumentKeysApi.md#apiDocumentKeysUnusedGet) | **GET** /api/document-keys/unused | Queries unused document keys

<a name="apiDocumentKeysBatchPost"></a>
# **apiDocumentKeysBatchPost**
> [DocumentKeyModel] apiDocumentKeysBatchPost(opts)

Allocates a batch of document keys to be used later on document signatures

At most 100 keys may be allocated on each request. Limitations on the total number of unused document keys allocated may apply.

### Example
```javascript
import {RestPkiCoreApi} from 'rest_pki_core_api';

let apiInstance = new RestPkiCoreApi.DocumentKeysApi();
let opts = { 
  'body': new RestPkiCoreApi.AllocateDocumentKeyBatchRequest() // AllocateDocumentKeyBatchRequest | 
};
apiInstance.apiDocumentKeysBatchPost(opts, (error, data, response) => {
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
 **body** | [**AllocateDocumentKeyBatchRequest**](AllocateDocumentKeyBatchRequest.md)|  | [optional] 

### Return type

[**[DocumentKeyModel]**](DocumentKeyModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json
 - **Accept**: text/plain, application/json, text/json

<a name="apiDocumentKeysKeyGet"></a>
# **apiDocumentKeysKeyGet**
> DocumentKeyQueryResponse apiDocumentKeysKeyGet(key)

Queries documents by key

The key may be given either in formatted form (e.g. *XXXX-XXXX-XXXX-XXXX*) or unformatted (e.g. *XXXXXXXXXXXXXXXX*)    If a document with the given key is not found, the response is a &#x60;200 (Success)&#x60; with &#x60;\&quot;found\&quot;: false&#x60;.    If the given key has been allocated in advance but is not yet associated with a document, the response is a &#x60;200 (Success)&#x60;  with &#x60;\&quot;found\&quot;: true&#x60; and &#x60;\&quot;hasDocument\&quot;: false&#x60;. In this case, the field &#x60;provisionalMetadata&#x60; contains any provisional metadata  passed during the document key allocation, which serves as an indicative of the metadata that a future document will likely have.    Only if &#x60;\&quot;found\&quot;: true&#x60; **and** &#x60;\&quot;hasDocument\&quot;: true&#x60; is the field &#x60;document&#x60; filled. In this case, &#x60;provisionalMetadata&#x60; is not filled.

### Example
```javascript
import {RestPkiCoreApi} from 'rest_pki_core_api';

let apiInstance = new RestPkiCoreApi.DocumentKeysApi();
let key = "key_example"; // String | 

apiInstance.apiDocumentKeysKeyGet(key, (error, data, response) => {
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

[**DocumentKeyQueryResponse**](DocumentKeyQueryResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="apiDocumentKeysPost"></a>
# **apiDocumentKeysPost**
> DocumentKeyModel apiDocumentKeysPost(opts)

Allocates a document key to be used later on a document signature

To allocate a number of document keys at once, use the &#x60;POST /api/document-keys/batch&#x60; API instead. Limitations on the total number of unused document keys allocated may apply.

### Example
```javascript
import {RestPkiCoreApi} from 'rest_pki_core_api';

let apiInstance = new RestPkiCoreApi.DocumentKeysApi();
let opts = { 
  'body': new RestPkiCoreApi.AllocateDocumentKeyRequest() // AllocateDocumentKeyRequest | 
};
apiInstance.apiDocumentKeysPost(opts, (error, data, response) => {
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
 **body** | [**AllocateDocumentKeyRequest**](AllocateDocumentKeyRequest.md)|  | [optional] 

### Return type

[**DocumentKeyModel**](DocumentKeyModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json
 - **Accept**: text/plain, application/json, text/json

<a name="apiDocumentKeysUnusedGet"></a>
# **apiDocumentKeysUnusedGet**
> [DocumentKeySummary] apiDocumentKeysUnusedGet(opts)

Queries unused document keys

### Example
```javascript
import {RestPkiCoreApi} from 'rest_pki_core_api';

let apiInstance = new RestPkiCoreApi.DocumentKeysApi();
let opts = { 
  'metadataName': "metadataName_example", // String | 
  'metadataValue': "metadataValue_example" // String | 
};
apiInstance.apiDocumentKeysUnusedGet(opts, (error, data, response) => {
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
 **metadataName** | **String**|  | [optional] 
 **metadataValue** | **String**|  | [optional] 

### Return type

[**[DocumentKeySummary]**](DocumentKeySummary.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

