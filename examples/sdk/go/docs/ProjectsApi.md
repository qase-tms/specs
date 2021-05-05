# {{classname}}

All URIs are relative to *https://api.qase.io/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**ProjectList**](ProjectsApi.md#ProjectList) | **Get** /project | Get All Projects.

# **ProjectList**
> InlineResponse200 ProjectList(ctx, optional)
Get All Projects.

This method allows to retrieve all projects available for your account. You can you limit and offset params to paginate. 

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
 **optional** | ***ProjectsApiProjectListOpts** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a pointer to a ProjectsApiProjectListOpts struct
Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **optional.Int32**| A number of entities in result set. | [default to 100]
 **offset** | **optional.Int32**| How many entities should be skipped. | [default to 0]

### Return type

[**InlineResponse200**](inline_response_200.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

