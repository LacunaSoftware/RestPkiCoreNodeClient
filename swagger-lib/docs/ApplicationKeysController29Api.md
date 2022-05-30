# RestPkiCoreApi.ApplicationKeysController29Api

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiApplicationsAppIdApiKeysPost**](ApplicationKeysController29Api.md#apiApplicationsAppIdApiKeysPost) | **POST** /api/applications/{appId}/api-keys | 

<a name="apiApplicationsAppIdApiKeysPost"></a>
# **apiApplicationsAppIdApiKeysPost**
> CreateApplicationApiKeyResponse apiApplicationsAppIdApiKeysPost(appId, opts)



### Example
```javascript
import {RestPkiCoreApi} from 'rest_pki_core_api';

let apiInstance = new RestPkiCoreApi.ApplicationKeysController29Api();
let appId = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 
let opts = { 
  'body': new RestPkiCoreApi.CreateApplicationApiKeyRequest() // CreateApplicationApiKeyRequest | 
};
apiInstance.apiApplicationsAppIdApiKeysPost(appId, opts, (error, data, response) => {
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
 **appId** | [**String**](.md)|  | 
 **body** | [**CreateApplicationApiKeyRequest**](CreateApplicationApiKeyRequest.md)|  | [optional] 

### Return type

[**CreateApplicationApiKeyResponse**](CreateApplicationApiKeyResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json
 - **Accept**: text/plain, application/json, text/json

