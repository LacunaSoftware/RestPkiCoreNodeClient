# RestPkiCoreClient.CertificatesApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiCertificatesThumbprintSha256Get**](CertificatesApi.md#apiCertificatesThumbprintSha256Get) | **GET** /api/certificates/{thumbprintSha256} | Retrieves information about a X.509 certificate previously used to sign some document

<a name="apiCertificatesThumbprintSha256Get"></a>
# **apiCertificatesThumbprintSha256Get**
> CertificateFullModel apiCertificatesThumbprintSha256Get(thumbprintSha256, opts)

Retrieves information about a X.509 certificate previously used to sign some document

### Example
```javascript
import {RestPkiCoreClient} from 'rest_pki_core_api';

let apiInstance = new RestPkiCoreClient.CertificatesApi();
let thumbprintSha256 = "thumbprintSha256_example"; // String | SHA-256 thumbprint in hexadecimal form of the certificate (property `thumbprintSHA256` of `CertificateModel`)
let opts = { 
  'fillPemEncoded': true, // Boolean | Whether the response should include the complete certificate in PEM encoding on property `pemEncoded`. Pass `true` or `false`, if omitted `false` is assumed.
  'fillEncoded': true // Boolean | Whether the response should include the complete certificate in Base64 encoding on property `encoded`. Pass `true` or `false`, if omitted `false` is assumed.
};
apiInstance.apiCertificatesThumbprintSha256Get(thumbprintSha256, opts, (error, data, response) => {
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
 **thumbprintSha256** | **String**| SHA-256 thumbprint in hexadecimal form of the certificate (property &#x60;thumbprintSHA256&#x60; of &#x60;CertificateModel&#x60;) | 
 **fillPemEncoded** | **Boolean**| Whether the response should include the complete certificate in PEM encoding on property &#x60;pemEncoded&#x60;. Pass &#x60;true&#x60; or &#x60;false&#x60;, if omitted &#x60;false&#x60; is assumed. | [optional] 
 **fillEncoded** | **Boolean**| Whether the response should include the complete certificate in Base64 encoding on property &#x60;encoded&#x60;. Pass &#x60;true&#x60; or &#x60;false&#x60;, if omitted &#x60;false&#x60; is assumed. | [optional] 

### Return type

[**CertificateFullModel**](CertificateFullModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

