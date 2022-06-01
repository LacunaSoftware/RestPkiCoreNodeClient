# RestPkiCoreClient.AuthenticationApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiV2AuthenticationCompletionPost**](AuthenticationApi.md#apiV2AuthenticationCompletionPost) | **POST** /api/v2/authentication/completion | Completes a certificate authentication
[**apiV2AuthenticationPost**](AuthenticationApi.md#apiV2AuthenticationPost) | **POST** /api/v2/authentication | Prepares for a certificate authentication

<a name="apiV2AuthenticationCompletionPost"></a>
# **apiV2AuthenticationCompletionPost**
> CompleteAuthenticationResponse apiV2AuthenticationCompletionPost(opts)

Completes a certificate authentication

### Example
```javascript
import {RestPkiCoreClient} from 'rest_pki_core_api';

let apiInstance = new RestPkiCoreClient.AuthenticationApi();
let opts = { 
  'body': new RestPkiCoreClient.CompleteAuthenticationRequest() // CompleteAuthenticationRequest | 
};
apiInstance.apiV2AuthenticationCompletionPost(opts, (error, data, response) => {
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
 **body** | [**CompleteAuthenticationRequest**](CompleteAuthenticationRequest.md)|  | [optional] 

### Return type

[**CompleteAuthenticationResponse**](CompleteAuthenticationResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json
 - **Accept**: text/plain, application/json, text/json

<a name="apiV2AuthenticationPost"></a>
# **apiV2AuthenticationPost**
> PrepareAuthenticationResponse apiV2AuthenticationPost(opts)

Prepares for a certificate authentication

### Example
```javascript
import {RestPkiCoreClient} from 'rest_pki_core_api';

let apiInstance = new RestPkiCoreClient.AuthenticationApi();
let opts = { 
  'body': new RestPkiCoreClient.PrepareAuthenticationRequest() // PrepareAuthenticationRequest | 
};
apiInstance.apiV2AuthenticationPost(opts, (error, data, response) => {
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
 **body** | [**PrepareAuthenticationRequest**](PrepareAuthenticationRequest.md)|  | [optional] 

### Return type

[**PrepareAuthenticationResponse**](PrepareAuthenticationResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json
 - **Accept**: text/plain, application/json, text/json

