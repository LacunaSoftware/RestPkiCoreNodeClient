/* tslint:disable */
/* eslint-disable */
/**
 * Rest PKI Core API
 * <b><i>Para Português, <a href=\"https://docs.lacunasoftware.com/pt-br/articles/rest-pki/core/integration/get-started\">clique aqui</a></i></b>  <p>   <a href=\"https://docs.lacunasoftware.com/en-us/articles/rest-pki/core/\">Rest PKI Core</a> is an upcoming version of   <a href=\"https://docs.lacunasoftware.com/en-us/articles/rest-pki/\">Rest PKI</a> that will have extended compatibility with environments and databases.  </p>  <p>   In addition to Windows Server (which is already supported by Rest PKI), Rest PKI Core will also run on <b>Linux</b> (Debian- and RedHat-based distributions)   and on <b>Docker</b>. As for database servers, in addition to SQL Server, <b>PostgreSQL</b> will also be supported.  </p>  <p>   <b>Before getting started, see the integration overview on the <a href=\"https://docs.lacunasoftware.com/en-us/articles/rest-pki/core/integration/\">Integration Guide</a></b>  </p>  <p>   For questions regarding the usage of this API, please reach us at <a href=\"https://lacuna.help/\">lacuna.help</a>  </p>    <h2>Parameters</h2>  <p>   You will need the following parameters:  </p>  <ul>   <li><b>Endpoint</b>: address of the Rest PKI Core instance that will be used</li>   <li><b>API Key</b>: authorization key for using the API</li>  </ul>  <p>   The <span class=\"model\">endpoint</span> must be prefixed to all relative URLs mentioned here. As for the <span class=\"model\">API Key</span>, see how to use it below.  </p>    <h2>Authentication</h2>  <p>   The API key must be sent on the <span class=\"model\">X-Api-Key</span> header on each request:  </p>    <!-- unfortunately, class \"example microlight\" doesn't seem to work here -->  <pre style=\"font-size: 12px; padding: 10px; border-radius: 4px; background: #41444e; font-weight: 600; color: #fff;\">  X-Api-Key: yourapp|xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx  </pre>    <h2>HTTP Codes</h2>    <p>   The APIs will return the following HTTP codes:  </p>    <table>   <thead>    <tr>     <th>Code</th>     <th>Description</th>    </tr>   </thead>   <tbody>    <tr>     <td><strong class=\"model-title\">200 (OK)</strong></td>     <td>Request processed successfully. The response is different for each API, please refer to the operation's documentation</td>    </tr>    <tr>     <td><strong class=\"model-title\">400 (Bad Request)</strong></td>     <td>Syntax error. For instance, when a required field was not provided</td>    </tr>    <tr>     <td><strong class=\"model-title\">401 (Unauthorized)</strong></td>     <td>API key not provided or invalid</td>    </tr>    <tr>     <td><strong class=\"model-title\">403 (Forbidden)</strong></td>     <td>API key is valid, but the application has insufficient permissions to complete the requested operation</td>    </tr>    <tr>     <td><strong class=\"model-title\">422 (Unprocessable Entity)</strong></td>     <td>API error. The response body is an <a href=\"#model-ErrorModelV2\" class=\"model\">ErrorModelV2</a>    </tr>    <tr>     <td><strong class=\"model-title\">500 (Internal Server Error)</strong></td>     <td>An unexpected error occurred. The <span class=\"model\">exceptionCode</span> contained on the response body may be of help for our support team during diagnostic.</td>    </tr>   </tbody>  </table>    <h3>Error Codes</h3>    <p>   Some of the error codes returned in the <span class=\"model\">code</span> field of an <a href=\"#model-ErrorModelV2\" class=\"model\">ErrorModelV2</a>   (body of responses with HTTP status code 422) are provided below*:  </p>    <table>   <thead>    <tr>     <th>Code</th>     <th>Description</th>    </tr>   </thead>   <tbody>    <tr>     <td class=\"model\">DocumentNotFound</td>     <td>A referenced document was not found (check the document ID)</td>    </tr>    <tr>     <td class=\"model\">SecurityContextNotFound</td>     <td>A referenced security context was not found (check the security context ID)</td>    </tr>    <tr>     <td class=\"model\">SignatureSessionNotFound</td>     <td>A referenced signature session was not found (check the signature session ID)</td>    </tr>    <tr>     <td class=\"model\">BadSignatureSessionOperation</td>     <td>The operation is invalid for the current signature session or document status. For instance, trying to await the session's completion if it is still <span class=\"model\">Pending</span> results in this error</td>    </tr>    <tr>     <td class=\"model\">BackgroundProcessing</td>     <td>The operation cannot be completed at this time because the resource is being processed in background</td>    </tr>    <tr>     <td class=\"model\">SignatureSessionTokenRequired</td>     <td>The signature session token was not passed on the <span class=\"model\">X-Signature-Session-Token</span> request header</td>    </tr>    <tr>     <td class=\"model\">BadSignatureSessionToken</td>     <td>An invalid signature session token was passed on the <span class=\"model\">X-Signature-Session-Token</span> request header. Check your application for possible corruption of the session token, which may contain characters <span class=\"code\">-</span> (hyphen) and <span class=\"code\">_</span> (underscore)</td>    </tr>    <tr>     <td class=\"model\">ExpiredSignatureSessionToken</td>     <td>An expired signature session token was passed on the <span class=\"model\">X-Signature-Session-Token</span> request header. Signature session tokens are normally valid for 4 hours.</td>    </tr>   </tbody>  </table>    <p style=\"font-size: 0.9em\">   *The codes shown above are the most common error codes. Nonetheless, this list is not comprehensive. New codes may be added anytime without previous warning.  </p>    <h2>Culture / Internationalization (i18n)</h2>  <p>The <span class=\"model\">Accept-Language</span> request header is observed by this API. The following cultures are supported:</p>  <ul>   <li><span class=\"code\">en-US</span> (or simply <span class=\"code\">en</span>)</li>   <li><span class=\"code\">pt-BR</span> (or simply <span class=\"code\">pt</span>)</li>  </ul>  <p><i>Notice: error messages are not affected by this header and therefore should not be displayed to users, being better suited for logging.</i></p>  
 *
 * OpenAPI spec version: 1.10.1 RTM
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import globalAxios, { AxiosResponse, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
import { CreateSignatureSessionRequest } from '../models';
import { CreateSignatureSessionResponse } from '../models';
import { SessionCompletionStatus } from '../models';
import { SignatureSessionModel } from '../models';
/**
 * SignatureSessionsApi - axios parameter creator
 * @export
 */
export const SignatureSessionsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * ## Overview    When a user is redirected back to your application at the end of a signature session, a query parameter is appended to the `returnUrl` containing the ID of the  signature session, i.e. `?signatureSessionId=...`. Your app must get this parameter and use it to call this API, which will return information about the session,  mainly its status and documents.    ## Statuses    When a user is redirected back to your app, the session will have one of two possible statuses: `Completed` or `UserCancelled`. You should always check the status,  since it is perfecly normal for a user to land back on your app by cancelling the session instead of going through the procedure.    ## Statuses (when background processing is enabled)    If you enabled background processing of the session by passing `EnableBackgroundProcessing = true` when creating the session, then two additional statuses are possible:  `Processing` and `ProcessingError`.    While a session is still `Processing`, some documents will be in status `Processing` and cannot be downloaded. Only when the session transitions to the `Complete` status  are all documents ready to be downloaded.    The status `ProcessingError` is a rare condition that occurrs only in corner cases such as the user's certificate being revoked during the time between the  start of the session and the completion of the background processing. It is perfectly appropriate for your app to `throw` if this status is returned.    ## Downloading signed files    The signed files are not returned on the body of the response. Instead, a `location` is given for each file which must be invoked to get the actual files' contents  (see [DocumentFileModel](#model-DocumentFileModel)).
         * @summary Retrieves a signature session's details
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiSignatureSessionsIdGet: async (id: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling apiSignatureSessionsIdGet.');
            }
            const localVarPath = `/api/signature-sessions/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * This API can be used when background processing is enabled on a signature session to wait for its processing.    The API will hang for a short period (normally 15 seconds) waiting for the session to be completed. If it is completed during that time,  the API returns immediately with `Completed = true`. If, however, that period elapsed and the session is still not completed, the API  returns with `Completed = false` and with the current `Progress` (0 to 100).    A client app that intends to wait for the session completion indefinitely must therefore implement a loop to call this API until  `Completed = true` is returned. This might seem like polling (and actually is), but is different because it is a sort of \"smart polling\"  since the API returns immediately once the session is completed, instead of the app having to wait for the next polling interval.
         * @summary Waits for the completion of a signature session
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiSignatureSessionsIdWhenCompletedGet: async (id: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling apiSignatureSessionsIdWhenCompletedGet.');
            }
            const localVarPath = `/api/signature-sessions/{id}/when-completed`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * ## Overview    This API creates a **signature session**, which enables your users to perform digital signatures without requiring you to implement a signature web page on your app.    To create a signature session, your app specifies a `returnUrl` and receives back a `redirectUrl`. Your app then redirects the user to the `redirectUrl`, where he will   digitally sign documents. Once the process is complete, the user will be redirected back to your app on the *returnUrl* you specified when starting the session.  A query parameter will be added to the `returnUrl` containing the signature session ID (`?signatureSessionId=...`). Then, your app parses the signature session ID on  the query string and uses it to call APIs to fetch the documents signed by the user.    The session can either have predefined documents that the user must sign (passed on the `Documents` collection) or allow the user to upload his own documents (in this  case, omit the `Documents` collection).    ## Showing the signature page on a new tab    The default behavior is for your app to provide a `returnUrl`, and then redirect the user to the `returnUrl` returned by this API with a HTTP redirection response  (e.g. *303 See Other*) or with a `location.href = ...` call on Javascript. By the end of the procedure, the user is redirected back to your app, all in a single browser tab.    Alternatively, you may want to display the signature page on a new tab. In this case, omit the `returnUrl` parameter when creating the session. Furthermore, you must open  the tab with an HTML anchor tag with `target=\"_blank\"`, or with the `window.open()` function on Javascript. The tab will then be closed by the end of the process.    ## Background processing    By default, users are kept waiting while documents are processed before being redirected back to your application.    If you want to provide your users with a faster experience, turn on background processing by passing `EnableBackgroundProcessing = true`. In this case, users do not wait  for documents to be processed. However, your application must be ready to handle the case of a signature session whose documents are not yet available for download.    ## Webhooks    You may configure your Rest PKI Core subscription to inform your app of any documents that are signed on signature sessions created by it. This way, you don't  need to rely on users landing back on your page to detect that documents have been signed. Please refer to the *Webhooks* section for more information.    ## Disabling downloads    If you don't receive webhook notifications of documents signed, you might feel like the signature session process is not working reliably because some users simply download  the signed documents and don't bother to stick around while they are redirected back to your app, denying it the chance to detect that documents have been signed.  If you feel this is a problem for your case, you can disable the downloading of signed documents by passing `DisableDownloads = true`. Then, users will only be able to  download documents through your app, and thus will be far less inclined to quit the process prematurely.    ## File name validation    If you want to validate the file names that are acceptable for users to upload, you can configure the *acceptable file name pattern* on your subscription's  configuration to a regular expression conforming to your rules.    You can also configure a *file name validation endpoint*, an API implemented by your app that is called for each file selected by the user with the file's name and  MIME type and returns whether the file should be acceptable or not (and, if not, a reason to be displayed to the user).
         * @summary Creates a signature session
         * @param {CreateSignatureSessionRequest} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiSignatureSessionsPost: async (body?: CreateSignatureSessionRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/signature-sessions`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            localVarHeaderParameter['Content-Type'] = 'application/json-patch+json';

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const needsSerialization = (typeof body !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * SignatureSessionsApi - functional programming interface
 * @export
 */
export const SignatureSessionsApiFp = function(configuration?: Configuration) {
    return {
        /**
         * ## Overview    When a user is redirected back to your application at the end of a signature session, a query parameter is appended to the `returnUrl` containing the ID of the  signature session, i.e. `?signatureSessionId=...`. Your app must get this parameter and use it to call this API, which will return information about the session,  mainly its status and documents.    ## Statuses    When a user is redirected back to your app, the session will have one of two possible statuses: `Completed` or `UserCancelled`. You should always check the status,  since it is perfecly normal for a user to land back on your app by cancelling the session instead of going through the procedure.    ## Statuses (when background processing is enabled)    If you enabled background processing of the session by passing `EnableBackgroundProcessing = true` when creating the session, then two additional statuses are possible:  `Processing` and `ProcessingError`.    While a session is still `Processing`, some documents will be in status `Processing` and cannot be downloaded. Only when the session transitions to the `Complete` status  are all documents ready to be downloaded.    The status `ProcessingError` is a rare condition that occurrs only in corner cases such as the user's certificate being revoked during the time between the  start of the session and the completion of the background processing. It is perfectly appropriate for your app to `throw` if this status is returned.    ## Downloading signed files    The signed files are not returned on the body of the response. Instead, a `location` is given for each file which must be invoked to get the actual files' contents  (see [DocumentFileModel](#model-DocumentFileModel)).
         * @summary Retrieves a signature session's details
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSignatureSessionsIdGet(id: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<SignatureSessionModel>>> {
            const localVarAxiosArgs = await SignatureSessionsApiAxiosParamCreator(configuration).apiSignatureSessionsIdGet(id, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * This API can be used when background processing is enabled on a signature session to wait for its processing.    The API will hang for a short period (normally 15 seconds) waiting for the session to be completed. If it is completed during that time,  the API returns immediately with `Completed = true`. If, however, that period elapsed and the session is still not completed, the API  returns with `Completed = false` and with the current `Progress` (0 to 100).    A client app that intends to wait for the session completion indefinitely must therefore implement a loop to call this API until  `Completed = true` is returned. This might seem like polling (and actually is), but is different because it is a sort of \"smart polling\"  since the API returns immediately once the session is completed, instead of the app having to wait for the next polling interval.
         * @summary Waits for the completion of a signature session
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSignatureSessionsIdWhenCompletedGet(id: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<SessionCompletionStatus>>> {
            const localVarAxiosArgs = await SignatureSessionsApiAxiosParamCreator(configuration).apiSignatureSessionsIdWhenCompletedGet(id, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * ## Overview    This API creates a **signature session**, which enables your users to perform digital signatures without requiring you to implement a signature web page on your app.    To create a signature session, your app specifies a `returnUrl` and receives back a `redirectUrl`. Your app then redirects the user to the `redirectUrl`, where he will   digitally sign documents. Once the process is complete, the user will be redirected back to your app on the *returnUrl* you specified when starting the session.  A query parameter will be added to the `returnUrl` containing the signature session ID (`?signatureSessionId=...`). Then, your app parses the signature session ID on  the query string and uses it to call APIs to fetch the documents signed by the user.    The session can either have predefined documents that the user must sign (passed on the `Documents` collection) or allow the user to upload his own documents (in this  case, omit the `Documents` collection).    ## Showing the signature page on a new tab    The default behavior is for your app to provide a `returnUrl`, and then redirect the user to the `returnUrl` returned by this API with a HTTP redirection response  (e.g. *303 See Other*) or with a `location.href = ...` call on Javascript. By the end of the procedure, the user is redirected back to your app, all in a single browser tab.    Alternatively, you may want to display the signature page on a new tab. In this case, omit the `returnUrl` parameter when creating the session. Furthermore, you must open  the tab with an HTML anchor tag with `target=\"_blank\"`, or with the `window.open()` function on Javascript. The tab will then be closed by the end of the process.    ## Background processing    By default, users are kept waiting while documents are processed before being redirected back to your application.    If you want to provide your users with a faster experience, turn on background processing by passing `EnableBackgroundProcessing = true`. In this case, users do not wait  for documents to be processed. However, your application must be ready to handle the case of a signature session whose documents are not yet available for download.    ## Webhooks    You may configure your Rest PKI Core subscription to inform your app of any documents that are signed on signature sessions created by it. This way, you don't  need to rely on users landing back on your page to detect that documents have been signed. Please refer to the *Webhooks* section for more information.    ## Disabling downloads    If you don't receive webhook notifications of documents signed, you might feel like the signature session process is not working reliably because some users simply download  the signed documents and don't bother to stick around while they are redirected back to your app, denying it the chance to detect that documents have been signed.  If you feel this is a problem for your case, you can disable the downloading of signed documents by passing `DisableDownloads = true`. Then, users will only be able to  download documents through your app, and thus will be far less inclined to quit the process prematurely.    ## File name validation    If you want to validate the file names that are acceptable for users to upload, you can configure the *acceptable file name pattern* on your subscription's  configuration to a regular expression conforming to your rules.    You can also configure a *file name validation endpoint*, an API implemented by your app that is called for each file selected by the user with the file's name and  MIME type and returns whether the file should be acceptable or not (and, if not, a reason to be displayed to the user).
         * @summary Creates a signature session
         * @param {CreateSignatureSessionRequest} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSignatureSessionsPost(body?: CreateSignatureSessionRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<CreateSignatureSessionResponse>>> {
            const localVarAxiosArgs = await SignatureSessionsApiAxiosParamCreator(configuration).apiSignatureSessionsPost(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * SignatureSessionsApi - factory interface
 * @export
 */
export const SignatureSessionsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * ## Overview    When a user is redirected back to your application at the end of a signature session, a query parameter is appended to the `returnUrl` containing the ID of the  signature session, i.e. `?signatureSessionId=...`. Your app must get this parameter and use it to call this API, which will return information about the session,  mainly its status and documents.    ## Statuses    When a user is redirected back to your app, the session will have one of two possible statuses: `Completed` or `UserCancelled`. You should always check the status,  since it is perfecly normal for a user to land back on your app by cancelling the session instead of going through the procedure.    ## Statuses (when background processing is enabled)    If you enabled background processing of the session by passing `EnableBackgroundProcessing = true` when creating the session, then two additional statuses are possible:  `Processing` and `ProcessingError`.    While a session is still `Processing`, some documents will be in status `Processing` and cannot be downloaded. Only when the session transitions to the `Complete` status  are all documents ready to be downloaded.    The status `ProcessingError` is a rare condition that occurrs only in corner cases such as the user's certificate being revoked during the time between the  start of the session and the completion of the background processing. It is perfectly appropriate for your app to `throw` if this status is returned.    ## Downloading signed files    The signed files are not returned on the body of the response. Instead, a `location` is given for each file which must be invoked to get the actual files' contents  (see [DocumentFileModel](#model-DocumentFileModel)).
         * @summary Retrieves a signature session's details
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSignatureSessionsIdGet(id: string, options?: AxiosRequestConfig): Promise<AxiosResponse<SignatureSessionModel>> {
            return SignatureSessionsApiFp(configuration).apiSignatureSessionsIdGet(id, options).then((request) => request(axios, basePath));
        },
        /**
         * This API can be used when background processing is enabled on a signature session to wait for its processing.    The API will hang for a short period (normally 15 seconds) waiting for the session to be completed. If it is completed during that time,  the API returns immediately with `Completed = true`. If, however, that period elapsed and the session is still not completed, the API  returns with `Completed = false` and with the current `Progress` (0 to 100).    A client app that intends to wait for the session completion indefinitely must therefore implement a loop to call this API until  `Completed = true` is returned. This might seem like polling (and actually is), but is different because it is a sort of \"smart polling\"  since the API returns immediately once the session is completed, instead of the app having to wait for the next polling interval.
         * @summary Waits for the completion of a signature session
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSignatureSessionsIdWhenCompletedGet(id: string, options?: AxiosRequestConfig): Promise<AxiosResponse<SessionCompletionStatus>> {
            return SignatureSessionsApiFp(configuration).apiSignatureSessionsIdWhenCompletedGet(id, options).then((request) => request(axios, basePath));
        },
        /**
         * ## Overview    This API creates a **signature session**, which enables your users to perform digital signatures without requiring you to implement a signature web page on your app.    To create a signature session, your app specifies a `returnUrl` and receives back a `redirectUrl`. Your app then redirects the user to the `redirectUrl`, where he will   digitally sign documents. Once the process is complete, the user will be redirected back to your app on the *returnUrl* you specified when starting the session.  A query parameter will be added to the `returnUrl` containing the signature session ID (`?signatureSessionId=...`). Then, your app parses the signature session ID on  the query string and uses it to call APIs to fetch the documents signed by the user.    The session can either have predefined documents that the user must sign (passed on the `Documents` collection) or allow the user to upload his own documents (in this  case, omit the `Documents` collection).    ## Showing the signature page on a new tab    The default behavior is for your app to provide a `returnUrl`, and then redirect the user to the `returnUrl` returned by this API with a HTTP redirection response  (e.g. *303 See Other*) or with a `location.href = ...` call on Javascript. By the end of the procedure, the user is redirected back to your app, all in a single browser tab.    Alternatively, you may want to display the signature page on a new tab. In this case, omit the `returnUrl` parameter when creating the session. Furthermore, you must open  the tab with an HTML anchor tag with `target=\"_blank\"`, or with the `window.open()` function on Javascript. The tab will then be closed by the end of the process.    ## Background processing    By default, users are kept waiting while documents are processed before being redirected back to your application.    If you want to provide your users with a faster experience, turn on background processing by passing `EnableBackgroundProcessing = true`. In this case, users do not wait  for documents to be processed. However, your application must be ready to handle the case of a signature session whose documents are not yet available for download.    ## Webhooks    You may configure your Rest PKI Core subscription to inform your app of any documents that are signed on signature sessions created by it. This way, you don't  need to rely on users landing back on your page to detect that documents have been signed. Please refer to the *Webhooks* section for more information.    ## Disabling downloads    If you don't receive webhook notifications of documents signed, you might feel like the signature session process is not working reliably because some users simply download  the signed documents and don't bother to stick around while they are redirected back to your app, denying it the chance to detect that documents have been signed.  If you feel this is a problem for your case, you can disable the downloading of signed documents by passing `DisableDownloads = true`. Then, users will only be able to  download documents through your app, and thus will be far less inclined to quit the process prematurely.    ## File name validation    If you want to validate the file names that are acceptable for users to upload, you can configure the *acceptable file name pattern* on your subscription's  configuration to a regular expression conforming to your rules.    You can also configure a *file name validation endpoint*, an API implemented by your app that is called for each file selected by the user with the file's name and  MIME type and returns whether the file should be acceptable or not (and, if not, a reason to be displayed to the user).
         * @summary Creates a signature session
         * @param {CreateSignatureSessionRequest} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSignatureSessionsPost(body?: CreateSignatureSessionRequest, options?: AxiosRequestConfig): Promise<AxiosResponse<CreateSignatureSessionResponse>> {
            return SignatureSessionsApiFp(configuration).apiSignatureSessionsPost(body, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * SignatureSessionsApi - object-oriented interface
 * @export
 * @class SignatureSessionsApi
 * @extends {BaseAPI}
 */
export class SignatureSessionsApi extends BaseAPI {
    /**
     * ## Overview    When a user is redirected back to your application at the end of a signature session, a query parameter is appended to the `returnUrl` containing the ID of the  signature session, i.e. `?signatureSessionId=...`. Your app must get this parameter and use it to call this API, which will return information about the session,  mainly its status and documents.    ## Statuses    When a user is redirected back to your app, the session will have one of two possible statuses: `Completed` or `UserCancelled`. You should always check the status,  since it is perfecly normal for a user to land back on your app by cancelling the session instead of going through the procedure.    ## Statuses (when background processing is enabled)    If you enabled background processing of the session by passing `EnableBackgroundProcessing = true` when creating the session, then two additional statuses are possible:  `Processing` and `ProcessingError`.    While a session is still `Processing`, some documents will be in status `Processing` and cannot be downloaded. Only when the session transitions to the `Complete` status  are all documents ready to be downloaded.    The status `ProcessingError` is a rare condition that occurrs only in corner cases such as the user's certificate being revoked during the time between the  start of the session and the completion of the background processing. It is perfectly appropriate for your app to `throw` if this status is returned.    ## Downloading signed files    The signed files are not returned on the body of the response. Instead, a `location` is given for each file which must be invoked to get the actual files' contents  (see [DocumentFileModel](#model-DocumentFileModel)).
     * @summary Retrieves a signature session's details
     * @param {string} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SignatureSessionsApi
     */
    public async apiSignatureSessionsIdGet(id: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<SignatureSessionModel>> {
        return SignatureSessionsApiFp(this.configuration).apiSignatureSessionsIdGet(id, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * This API can be used when background processing is enabled on a signature session to wait for its processing.    The API will hang for a short period (normally 15 seconds) waiting for the session to be completed. If it is completed during that time,  the API returns immediately with `Completed = true`. If, however, that period elapsed and the session is still not completed, the API  returns with `Completed = false` and with the current `Progress` (0 to 100).    A client app that intends to wait for the session completion indefinitely must therefore implement a loop to call this API until  `Completed = true` is returned. This might seem like polling (and actually is), but is different because it is a sort of \"smart polling\"  since the API returns immediately once the session is completed, instead of the app having to wait for the next polling interval.
     * @summary Waits for the completion of a signature session
     * @param {string} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SignatureSessionsApi
     */
    public async apiSignatureSessionsIdWhenCompletedGet(id: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<SessionCompletionStatus>> {
        return SignatureSessionsApiFp(this.configuration).apiSignatureSessionsIdWhenCompletedGet(id, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * ## Overview    This API creates a **signature session**, which enables your users to perform digital signatures without requiring you to implement a signature web page on your app.    To create a signature session, your app specifies a `returnUrl` and receives back a `redirectUrl`. Your app then redirects the user to the `redirectUrl`, where he will   digitally sign documents. Once the process is complete, the user will be redirected back to your app on the *returnUrl* you specified when starting the session.  A query parameter will be added to the `returnUrl` containing the signature session ID (`?signatureSessionId=...`). Then, your app parses the signature session ID on  the query string and uses it to call APIs to fetch the documents signed by the user.    The session can either have predefined documents that the user must sign (passed on the `Documents` collection) or allow the user to upload his own documents (in this  case, omit the `Documents` collection).    ## Showing the signature page on a new tab    The default behavior is for your app to provide a `returnUrl`, and then redirect the user to the `returnUrl` returned by this API with a HTTP redirection response  (e.g. *303 See Other*) or with a `location.href = ...` call on Javascript. By the end of the procedure, the user is redirected back to your app, all in a single browser tab.    Alternatively, you may want to display the signature page on a new tab. In this case, omit the `returnUrl` parameter when creating the session. Furthermore, you must open  the tab with an HTML anchor tag with `target=\"_blank\"`, or with the `window.open()` function on Javascript. The tab will then be closed by the end of the process.    ## Background processing    By default, users are kept waiting while documents are processed before being redirected back to your application.    If you want to provide your users with a faster experience, turn on background processing by passing `EnableBackgroundProcessing = true`. In this case, users do not wait  for documents to be processed. However, your application must be ready to handle the case of a signature session whose documents are not yet available for download.    ## Webhooks    You may configure your Rest PKI Core subscription to inform your app of any documents that are signed on signature sessions created by it. This way, you don't  need to rely on users landing back on your page to detect that documents have been signed. Please refer to the *Webhooks* section for more information.    ## Disabling downloads    If you don't receive webhook notifications of documents signed, you might feel like the signature session process is not working reliably because some users simply download  the signed documents and don't bother to stick around while they are redirected back to your app, denying it the chance to detect that documents have been signed.  If you feel this is a problem for your case, you can disable the downloading of signed documents by passing `DisableDownloads = true`. Then, users will only be able to  download documents through your app, and thus will be far less inclined to quit the process prematurely.    ## File name validation    If you want to validate the file names that are acceptable for users to upload, you can configure the *acceptable file name pattern* on your subscription's  configuration to a regular expression conforming to your rules.    You can also configure a *file name validation endpoint*, an API implemented by your app that is called for each file selected by the user with the file's name and  MIME type and returns whether the file should be acceptable or not (and, if not, a reason to be displayed to the user).
     * @summary Creates a signature session
     * @param {CreateSignatureSessionRequest} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SignatureSessionsApi
     */
    public async apiSignatureSessionsPost(body?: CreateSignatureSessionRequest, options?: AxiosRequestConfig) : Promise<AxiosResponse<CreateSignatureSessionResponse>> {
        return SignatureSessionsApiFp(this.configuration).apiSignatureSessionsPost(body, options).then((request) => request(this.axios, this.basePath));
    }
}
