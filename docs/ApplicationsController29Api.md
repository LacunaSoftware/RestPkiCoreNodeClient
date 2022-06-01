# RestPkiCoreApi.ApplicationsController29Api

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiApplicationsGet**](ApplicationsController29Api.md#apiApplicationsGet) | **GET** /api/applications | 
[**apiApplicationsIdDelete**](ApplicationsController29Api.md#apiApplicationsIdDelete) | **DELETE** /api/applications/{id} | 
[**apiApplicationsIdGet**](ApplicationsController29Api.md#apiApplicationsIdGet) | **GET** /api/applications/{id} | 
[**apiApplicationsNameAvailabilityGet**](ApplicationsController29Api.md#apiApplicationsNameAvailabilityGet) | **GET** /api/applications/name-availability | 
[**apiApplicationsPost**](ApplicationsController29Api.md#apiApplicationsPost) | **POST** /api/applications | 

<a name="apiApplicationsGet"></a>
# **apiApplicationsGet**
> SubscriptionAccessModelRolesRootRolesApplicationModelPaginatedSearchResponse apiApplicationsGet(opts)



### Example
```javascript
import {RestPkiCoreApi} from 'rest_pki_core_api';

let apiInstance = new RestPkiCoreApi.ApplicationsController29Api();
let opts = { 
  'Q': "Q_example", // String | 
  'limit': 56, // Number | 
  'offset': 56, // Number | 
  'order': new RestPkiCoreApi.PaginationOrders(), // PaginationOrders | 
  'name': "name_example" // String | 
};
apiInstance.apiApplicationsGet(opts, (error, data, response) => {
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
 **Q** | **String**|  | [optional] 
 **limit** | **Number**|  | [optional] 
 **offset** | **Number**|  | [optional] 
 **order** | [**PaginationOrders**](.md)|  | [optional] 
 **name** | **String**|  | [optional] 

### Return type

[**SubscriptionAccessModelRolesRootRolesApplicationModelPaginatedSearchResponse**](SubscriptionAccessModelRolesRootRolesApplicationModelPaginatedSearchResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="apiApplicationsIdDelete"></a>
# **apiApplicationsIdDelete**
> apiApplicationsIdDelete(id)



### Example
```javascript
import {RestPkiCoreApi} from 'rest_pki_core_api';

let apiInstance = new RestPkiCoreApi.ApplicationsController29Api();
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.apiApplicationsIdDelete(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**String**](.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="apiApplicationsIdGet"></a>
# **apiApplicationsIdGet**
> SubscriptionAccessModelRolesRootRolesApplicationModel apiApplicationsIdGet(id)



### Example
```javascript
import {RestPkiCoreApi} from 'rest_pki_core_api';

let apiInstance = new RestPkiCoreApi.ApplicationsController29Api();
let id = "38400000-8cf0-11bd-b23e-10b96e4ef00d"; // String | 

apiInstance.apiApplicationsIdGet(id, (error, data, response) => {
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

[**SubscriptionAccessModelRolesRootRolesApplicationModel**](SubscriptionAccessModelRolesRootRolesApplicationModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="apiApplicationsNameAvailabilityGet"></a>
# **apiApplicationsNameAvailabilityGet**
> &#x27;Boolean&#x27; apiApplicationsNameAvailabilityGet(opts)



### Example
```javascript
import {RestPkiCoreApi} from 'rest_pki_core_api';

let apiInstance = new RestPkiCoreApi.ApplicationsController29Api();
let opts = { 
  'name': "name_example" // String | 
};
apiInstance.apiApplicationsNameAvailabilityGet(opts, (error, data, response) => {
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
 **name** | **String**|  | [optional] 

### Return type

**&#x27;Boolean&#x27;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="apiApplicationsPost"></a>
# **apiApplicationsPost**
> SubscriptionAccessModelRolesRootRolesApplicationModel apiApplicationsPost(opts)



### Example
```javascript
import {RestPkiCoreApi} from 'rest_pki_core_api';

let apiInstance = new RestPkiCoreApi.ApplicationsController29Api();
let opts = { 
  'body': new RestPkiCoreApi.AuthorizationDataRootAuthorizationDataRolesRootRolesApplicationData() // AuthorizationDataRootAuthorizationDataRolesRootRolesApplicationData | 
};
apiInstance.apiApplicationsPost(opts, (error, data, response) => {
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
 **body** | [**AuthorizationDataRootAuthorizationDataRolesRootRolesApplicationData**](AuthorizationDataRootAuthorizationDataRolesRootRolesApplicationData.md)|  | [optional] 

### Return type

[**SubscriptionAccessModelRolesRootRolesApplicationModel**](SubscriptionAccessModelRolesRootRolesApplicationModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/json, text/json, application/_*+json
 - **Accept**: text/plain, application/json, text/json

