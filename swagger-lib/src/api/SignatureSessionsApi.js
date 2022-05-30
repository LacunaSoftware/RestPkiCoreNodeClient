/*
 * Rest PKI Core API
 * <b><i>Para Português, <a href=\"https://docs.lacunasoftware.com/pt-br/articles/rest-pki/core/integration/get-started\">clique aqui</a></i></b>  <p>   <a href=\"https://docs.lacunasoftware.com/en-us/articles/rest-pki/core/\">Rest PKI Core</a> is an upcoming version of   <a href=\"https://docs.lacunasoftware.com/en-us/articles/rest-pki/\">Rest PKI</a> that will have extended compatibility with environments and databases.  </p>  <p>   In addition to Windows Server (which is already supported by Rest PKI), Rest PKI Core will also run on <b>Linux</b> (Debian- and RedHat-based distributions)   and on <b>Docker</b>. As for database servers, in addition to SQL Server, <b>PostgreSQL</b> will also be supported.  </p>  <p>   <b>Before getting started, see the integration overview on the <a href=\"https://docs.lacunasoftware.com/en-us/articles/rest-pki/core/integration/\">Integration Guide</a></b>  </p>  <p>   For questions regarding the usage of this API, please reach us at <a href=\"https://lacuna.help/\">lacuna.help</a>  </p>    <h2>Parameters</h2>  <p>   You will need the following parameters:  </p>  <ul>   <li><b>Endpoint</b>: address of the Rest PKI Core instance that will be used</li>   <li><b>API Key</b>: authorization key for using the API</li>  </ul>  <p>   The <span class=\"model\">endpoint</span> must be prefixed to all relative URLs mentioned here. As for the <span class=\"model\">API Key</span>, see how to use it below.  </p>    <h2>Authentication</h2>  <p>   The API key must be sent on the <span class=\"model\">X-Api-Key</span> header on each request:  </p>    <!-- unfortunately, class \"example microlight\" doesn't seem to work here -->  <pre style=\"font-size: 12px; padding: 10px; border-radius: 4px; background: #41444e; font-weight: 600; color: #fff;\">  X-Api-Key: yourapp|xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx  </pre>    <h2>HTTP Codes</h2>    <p>   The APIs will return the following HTTP codes:  </p>    <table>   <thead>    <tr>     <th>Code</th>     <th>Description</th>    </tr>   </thead>   <tbody>    <tr>     <td><strong class=\"model-title\">200 (OK)</strong></td>     <td>Request processed successfully. The response is different for each API, please refer to the operation's documentation</td>    </tr>    <tr>     <td><strong class=\"model-title\">400 (Bad Request)</strong></td>     <td>Syntax error. For instance, when a required field was not provided</td>    </tr>    <tr>     <td><strong class=\"model-title\">401 (Unauthorized)</strong></td>     <td>API key not provided or invalid</td>    </tr>    <tr>     <td><strong class=\"model-title\">403 (Forbidden)</strong></td>     <td>API key is valid, but the application has insufficient permissions to complete the requested operation</td>    </tr>    <tr>     <td><strong class=\"model-title\">422 (Unprocessable Entity)</strong></td>     <td>API error. The response body is an <a href=\"#model-ErrorModelV2\" class=\"model\">ErrorModelV2</a>    </tr>    <tr>     <td><strong class=\"model-title\">500 (Internal Server Error)</strong></td>     <td>An unexpected error occurred. The <span class=\"model\">exceptionCode</span> contained on the response body may be of help for our support team during diagnostic.</td>    </tr>   </tbody>  </table>    <h3>Error Codes</h3>    <p>   Some of the error codes returned in the <span class=\"model\">code</span> field of an <a href=\"#model-ErrorModelV2\" class=\"model\">ErrorModelV2</a>   (body of responses with HTTP status code 422) are provided below*:  </p>    <table>   <thead>    <tr>     <th>Code</th>     <th>Description</th>    </tr>   </thead>   <tbody>    <tr>     <td class=\"model\">DocumentNotFound</td>     <td>A referenced document was not found (check the document ID)</td>    </tr>    <tr>     <td class=\"model\">SecurityContextNotFound</td>     <td>A referenced security context was not found (check the security context ID)</td>    </tr>    <tr>     <td class=\"model\">SignatureSessionNotFound</td>     <td>A referenced signature session was not found (check the signature session ID)</td>    </tr>    <tr>     <td class=\"model\">BadSignatureSessionOperation</td>     <td>The operation is invalid for the current signature session or document status. For instance, trying to await the session's completion if it is still <span class=\"model\">Pending</span> results in this error</td>    </tr>    <tr>     <td class=\"model\">BackgroundProcessing</td>     <td>The operation cannot be completed at this time because the resource is being processed in background</td>    </tr>    <tr>     <td class=\"model\">SignatureSessionTokenRequired</td>     <td>The signature session token was not passed on the <span class=\"model\">X-Signature-Session-Token</span> request header</td>    </tr>    <tr>     <td class=\"model\">BadSignatureSessionToken</td>     <td>An invalid signature session token was passed on the <span class=\"model\">X-Signature-Session-Token</span> request header. Check your application for possible corruption of the session token, which may contain characters <span class=\"code\">-</span> (hyphen) and <span class=\"code\">_</span> (underscore)</td>    </tr>    <tr>     <td class=\"model\">ExpiredSignatureSessionToken</td>     <td>An expired signature session token was passed on the <span class=\"model\">X-Signature-Session-Token</span> request header. Signature session tokens are normally valid for 4 hours.</td>    </tr>   </tbody>  </table>    <p style=\"font-size: 0.9em\">   *The codes shown above are the most common error codes. Nonetheless, this list is not comprehensive. New codes may be added anytime without previous warning.  </p>    <h2>Culture / Internationalization (i18n)</h2>  <p>The <span class=\"model\">Accept-Language</span> request header is observed by this API. The following cultures are supported:</p>  <ul>   <li><span class=\"code\">en-US</span> (or simply <span class=\"code\">en</span>)</li>   <li><span class=\"code\">pt-BR</span> (or simply <span class=\"code\">pt</span>)</li>  </ul>  <p><i>Notice: error messages are not affected by this header and therefore should not be displayed to users, being better suited for logging.</i></p>  
 *
 * OpenAPI spec version: 1.10.1 RTM
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.34
 *
 * Do not edit the class manually.
 *
 */
import {ApiClient} from "../ApiClient";
import {CreateSignatureSessionRequest} from '../model/CreateSignatureSessionRequest';
import {CreateSignatureSessionResponse} from '../model/CreateSignatureSessionResponse';
import {SessionCompletionStatus} from '../model/SessionCompletionStatus';
import {SignatureSessionModel} from '../model/SignatureSessionModel';

/**
* SignatureSessions service.
* @module api/SignatureSessionsApi
* @version 1.10.1 RTM
*/
export class SignatureSessionsApi {

    /**
    * Constructs a new SignatureSessionsApi. 
    * @alias module:api/SignatureSessionsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the apiSignatureSessionsIdGet operation.
     * @callback moduleapi/SignatureSessionsApi~apiSignatureSessionsIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SignatureSessionModel{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieves a signature session&#x27;s details
     * ## Overview    When a user is redirected back to your application at the end of a signature session, a query parameter is appended to the &#x60;returnUrl&#x60; containing the ID of the  signature session, i.e. &#x60;?signatureSessionId&#x3D;...&#x60;. Your app must get this parameter and use it to call this API, which will return information about the session,  mainly its status and documents.    ## Statuses    When a user is redirected back to your app, the session will have one of two possible statuses: &#x60;Completed&#x60; or &#x60;UserCancelled&#x60;. You should always check the status,  since it is perfecly normal for a user to land back on your app by cancelling the session instead of going through the procedure.    ## Statuses (when background processing is enabled)    If you enabled background processing of the session by passing &#x60;EnableBackgroundProcessing &#x3D; true&#x60; when creating the session, then two additional statuses are possible:  &#x60;Processing&#x60; and &#x60;ProcessingError&#x60;.    While a session is still &#x60;Processing&#x60;, some documents will be in status &#x60;Processing&#x60; and cannot be downloaded. Only when the session transitions to the &#x60;Complete&#x60; status  are all documents ready to be downloaded.    The status &#x60;ProcessingError&#x60; is a rare condition that occurrs only in corner cases such as the user&#x27;s certificate being revoked during the time between the  start of the session and the completion of the background processing. It is perfectly appropriate for your app to &#x60;throw&#x60; if this status is returned.    ## Downloading signed files    The signed files are not returned on the body of the response. Instead, a &#x60;location&#x60; is given for each file which must be invoked to get the actual files&#x27; contents  (see [DocumentFileModel](#model-DocumentFileModel)).
     * @param {String} id 
     * @param {module:api/SignatureSessionsApi~apiSignatureSessionsIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    apiSignatureSessionsIdGet(id, callback) {
      
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling apiSignatureSessionsIdGet");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['text/plain', 'application/json', 'text/json'];
      let returnType = SignatureSessionModel;

      return this.apiClient.callApi(
        '/api/signature-sessions/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the apiSignatureSessionsIdWhenCompletedGet operation.
     * @callback moduleapi/SignatureSessionsApi~apiSignatureSessionsIdWhenCompletedGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SessionCompletionStatus{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Waits for the completion of a signature session
     * This API can be used when background processing is enabled on a signature session to wait for its processing.    The API will hang for a short period (normally 15 seconds) waiting for the session to be completed. If it is completed during that time,  the API returns immediately with &#x60;Completed &#x3D; true&#x60;. If, however, that period elapsed and the session is still not completed, the API  returns with &#x60;Completed &#x3D; false&#x60; and with the current &#x60;Progress&#x60; (0 to 100).    A client app that intends to wait for the session completion indefinitely must therefore implement a loop to call this API until  &#x60;Completed &#x3D; true&#x60; is returned. This might seem like polling (and actually is), but is different because it is a sort of \&quot;smart polling\&quot;  since the API returns immediately once the session is completed, instead of the app having to wait for the next polling interval.
     * @param {String} id 
     * @param {module:api/SignatureSessionsApi~apiSignatureSessionsIdWhenCompletedGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    apiSignatureSessionsIdWhenCompletedGet(id, callback) {
      
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling apiSignatureSessionsIdWhenCompletedGet");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['text/plain', 'application/json', 'text/json'];
      let returnType = SessionCompletionStatus;

      return this.apiClient.callApi(
        '/api/signature-sessions/{id}/when-completed', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the apiSignatureSessionsPost operation.
     * @callback moduleapi/SignatureSessionsApi~apiSignatureSessionsPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CreateSignatureSessionResponse{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Creates a signature session
     * ## Overview    This API creates a **signature session**, which enables your users to perform digital signatures without requiring you to implement a signature web page on your app.    To create a signature session, your app specifies a &#x60;returnUrl&#x60; and receives back a &#x60;redirectUrl&#x60;. Your app then redirects the user to the &#x60;redirectUrl&#x60;, where he will   digitally sign documents. Once the process is complete, the user will be redirected back to your app on the *returnUrl* you specified when starting the session.  A query parameter will be added to the &#x60;returnUrl&#x60; containing the signature session ID (&#x60;?signatureSessionId&#x3D;...&#x60;). Then, your app parses the signature session ID on  the query string and uses it to call APIs to fetch the documents signed by the user.    The session can either have predefined documents that the user must sign (passed on the &#x60;Documents&#x60; collection) or allow the user to upload his own documents (in this  case, omit the &#x60;Documents&#x60; collection).    ## Showing the signature page on a new tab    The default behavior is for your app to provide a &#x60;returnUrl&#x60;, and then redirect the user to the &#x60;returnUrl&#x60; returned by this API with a HTTP redirection response  (e.g. *303 See Other*) or with a &#x60;location.href &#x3D; ...&#x60; call on Javascript. By the end of the procedure, the user is redirected back to your app, all in a single browser tab.    Alternatively, you may want to display the signature page on a new tab. In this case, omit the &#x60;returnUrl&#x60; parameter when creating the session. Furthermore, you must open  the tab with an HTML anchor tag with &#x60;target&#x3D;\&quot;_blank\&quot;&#x60;, or with the &#x60;window.open()&#x60; function on Javascript. The tab will then be closed by the end of the process.    ## Background processing    By default, users are kept waiting while documents are processed before being redirected back to your application.    If you want to provide your users with a faster experience, turn on background processing by passing &#x60;EnableBackgroundProcessing &#x3D; true&#x60;. In this case, users do not wait  for documents to be processed. However, your application must be ready to handle the case of a signature session whose documents are not yet available for download.    ## Webhooks    You may configure your Rest PKI Core subscription to inform your app of any documents that are signed on signature sessions created by it. This way, you don&#x27;t  need to rely on users landing back on your page to detect that documents have been signed. Please refer to the *Webhooks* section for more information.    ## Disabling downloads    If you don&#x27;t receive webhook notifications of documents signed, you might feel like the signature session process is not working reliably because some users simply download  the signed documents and don&#x27;t bother to stick around while they are redirected back to your app, denying it the chance to detect that documents have been signed.  If you feel this is a problem for your case, you can disable the downloading of signed documents by passing &#x60;DisableDownloads &#x3D; true&#x60;. Then, users will only be able to  download documents through your app, and thus will be far less inclined to quit the process prematurely.    ## File name validation    If you want to validate the file names that are acceptable for users to upload, you can configure the *acceptable file name pattern* on your subscription&#x27;s  configuration to a regular expression conforming to your rules.    You can also configure a *file name validation endpoint*, an API implemented by your app that is called for each file selected by the user with the file&#x27;s name and  MIME type and returns whether the file should be acceptable or not (and, if not, a reason to be displayed to the user).
     * @param {Object} opts Optional parameters
     * @param {module:model/CreateSignatureSessionRequest} opts.body 
     * @param {module:api/SignatureSessionsApi~apiSignatureSessionsPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    apiSignatureSessionsPost(opts, callback) {
      opts = opts || {};
      let postBody = opts['body'];

      let pathParams = {
        
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = [];
      let contentTypes = ['application/json-patch+json', 'application/json', 'text/json', 'application/_*+json'];
      let accepts = ['text/plain', 'application/json', 'text/json'];
      let returnType = CreateSignatureSessionResponse;

      return this.apiClient.callApi(
        '/api/signature-sessions', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}