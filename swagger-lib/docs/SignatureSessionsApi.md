# RestPkiCoreApi.SignatureSessionsApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiSignatureSessionsIdGet**](SignatureSessionsApi.md#apiSignatureSessionsIdGet) | **GET** /api/signature-sessions/{id} | Retrieves a signature session&#x27;s details
[**apiSignatureSessionsIdWhenCompletedGet**](SignatureSessionsApi.md#apiSignatureSessionsIdWhenCompletedGet) | **GET** /api/signature-sessions/{id}/when-completed | Waits for the completion of a signature session
[**apiSignatureSessionsPost**](SignatureSessionsApi.md#apiSignatureSessionsPost) | **POST** /api/signature-sessions | Creates a signature session

<a name="apiSignatureSessionsIdGet"></a>
# **apiSignatureSessionsIdGet**
> SignatureSessionModel apiSignatureSessionsIdGet(id)

Retrieves a signature session&#x27;s details

## Overview    
When a user is redirected back to your application at the end of a signature session, a query parameter is appended to the &#x60;returnUrl&#x60; containing the ID of the  signature session, i.e. &#x60;?signatureSessionId&#x3D;...&#x60;. Your app must get this parameter and use it to call this API, which will return information about the session,  mainly its status and documents.    ## Statuses    When a user is redirected back to your app, the session will have one of two possible statuses: &#x60;Completed&#x60; or &#x60;UserCancelled&#x60;. You should always check the status,  since it is perfecly normal for a user to land back on your app by cancelling the session instead of going through the procedure.    ## Statuses (when background processing is enabled)    If you enabled background processing of the session by passing &#x60;EnableBackgroundProcessing &#x3D; true&#x60; when creating the session, then two additional statuses are possible:  &#x60;Processing&#x60; and &#x60;ProcessingError&#x60;.    While a session is still &#x60;Processing&#x60;, some documents will be in status &#x60;Processing&#x60; and cannot be downloaded. Only when the session transitions to the &#x60;Complete&#x60; status  are all documents ready to be downloaded.    The status &#x60;ProcessingError&#x60; is a rare condition that occurrs only in corner cases such as the user&#x27;s certificate being revoked during the time between the  start of the session and the completion of the background processing. It is perfectly appropriate for your app to &#x60;throw&#x60; if this status is returned.    ## Downloading signed files    The signed files are not returned on the body of the response. Instead, a &#x60;location&#x60; is given for each file which must be invoked to get the actual files&#x27; contents  (see [DocumentFileModel](#model-DocumentFileModel)).

### Example
```javascript
import {RestPkiCoreApi} from 'rest_pki_core_api';

let apiInstance = new RestPkiCoreApi.SignatureSessionsApi();
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.apiSignatureSessionsIdGet(id, (error, data, response) => {
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

[**SignatureSessionModel**](SignatureSessionModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="apiSignatureSessionsIdWhenCompletedGet"></a>
# **apiSignatureSessionsIdWhenCompletedGet**
> SessionCompletionStatus apiSignatureSessionsIdWhenCompletedGet(id)

Waits for the completion of a signature session

This API can be used when background processing is enabled on a signature session to wait for its processing.    The API will hang for a short period (normally 15 seconds) waiting for the session to be completed. If it is completed during that time,  the API returns immediately with &#x60;Completed &#x3D; true&#x60;. If, however, that period elapsed and the session is still not completed, the API  returns with &#x60;Completed &#x3D; false&#x60; and with the current &#x60;Progress&#x60; (0 to 100).    A client app that intends to wait for the session completion indefinitely must therefore implement a loop to call this API until  &#x60;Completed &#x3D; true&#x60; is returned. This might seem like polling (and actually is), but is different because it is a sort of \&quot;smart polling\&quot;  since the API returns immediately once the session is completed, instead of the app having to wait for the next polling interval.

### Example
```javascript
import {RestPkiCoreApi} from 'rest_pki_core_api';

let apiInstance = new RestPkiCoreApi.SignatureSessionsApi();
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.apiSignatureSessionsIdWhenCompletedGet(id, (error, data, response) => {
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

[**SessionCompletionStatus**](SessionCompletionStatus.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="apiSignatureSessionsPost"></a>
# **apiSignatureSessionsPost**
> CreateSignatureSessionResponse apiSignatureSessionsPost(opts)

Creates a signature session

## Overview    
This API creates a **signature session**, which enables your users to perform digital signatures without requiring you to implement a signature web page on your app.    To create a signature session, your app specifies a &#x60;returnUrl&#x60; and receives back a &#x60;redirectUrl&#x60;. Your app then redirects the user to the &#x60;redirectUrl&#x60;, where he will   digitally sign documents. Once the process is complete, the user will be redirected back to your app on the *returnUrl* you specified when starting the session.  A query parameter will be added to the &#x60;returnUrl&#x60; containing the signature session ID (&#x60;?signatureSessionId&#x3D;...&#x60;). Then, your app parses the signature session ID on  the query string and uses it to call APIs to fetch the documents signed by the user.    The session can either have predefined documents that the user must sign (passed on the &#x60;Documents&#x60; collection) or allow the user to upload his own documents (in this  case, omit the &#x60;Documents&#x60; collection).    ## Showing the signature page on a new tab    The default behavior is for your app to provide a &#x60;returnUrl&#x60;, and then redirect the user to the &#x60;returnUrl&#x60; returned by this API with a HTTP redirection response  (e.g. *303 See Other*) or with a &#x60;location.href &#x3D; ...&#x60; call on Javascript. By the end of the procedure, the user is redirected back to your app, all in a single browser tab.    Alternatively, you may want to display the signature page on a new tab. In this case, omit the &#x60;returnUrl&#x60; parameter when creating the session. Furthermore, you must open  the tab with an HTML anchor tag with &#x60;target&#x3D;\&quot;_blank\&quot;&#x60;, or with the &#x60;window.open()&#x60; function on Javascript. The tab will then be closed by the end of the process.    ## Background processing    By default, users are kept waiting while documents are processed before being redirected back to your application.    If you want to provide your users with a faster experience, turn on background processing by passing &#x60;EnableBackgroundProcessing &#x3D; true&#x60;. In this case, users do not wait  for documents to be processed. However, your application must be ready to handle the case of a signature session whose documents are not yet available for download.    ## Webhooks    You may configure your Rest PKI Core subscription to inform your app of any documents that are signed on signature sessions created by it. This way, you don&#x27;t  need to rely on users landing back on your page to detect that documents have been signed. Please refer to the *Webhooks* section for more information.    ## Disabling downloads    If you don&#x27;t receive webhook notifications of documents signed, you might feel like the signature session process is not working reliably because some users simply download  the signed documents and don&#x27;t bother to stick around while they are redirected back to your app, denying it the chance to detect that documents have been signed.  If you feel this is a problem for your case, you can disable the downloading of signed documents by passing &#x60;DisableDownloads &#x3D; true&#x60;. Then, users will only be able to  download documents through your app, and thus will be far less inclined to quit the process prematurely.    ## File name validation    If you want to validate the file names that are acceptable for users to upload, you can configure the *acceptable file name pattern* on your subscription&#x27;s  configuration to a regular expression conforming to your rules.    You can also configure a *file name validation endpoint*, an API implemented by your app that is called for each file selected by the user with the file&#x27;s name and  MIME type and returns whether the file should be acceptable or not (and, if not, a reason to be displayed to the user).

### Example
```javascript
import {RestPkiCoreApi} from 'rest_pki_core_api';

let apiInstance = new RestPkiCoreApi.SignatureSessionsApi();
let opts = { 
  'body': new RestPkiCoreApi.CreateSignatureSessionRequest() // CreateSignatureSessionRequest | 
};
apiInstance.apiSignatureSessionsPost(opts, (error, data, response) => {
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
 **body** | [**CreateSignatureSessionRequest**](CreateSignatureSessionRequest.md)|  | [optional] 

### Return type

[**CreateSignatureSessionResponse**](CreateSignatureSessionResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json
 - **Accept**: text/plain, application/json, text/json

