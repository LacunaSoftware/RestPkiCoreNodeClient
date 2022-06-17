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
import { AllocateDocumentKeyBatchRequest } from '../models';
import { AllocateDocumentKeyRequest } from '../models';
import { DocumentKeyModel } from '../models';
import { DocumentKeyQueryResponse } from '../models';
import { DocumentKeySummary } from '../models';
/**
 * DocumentKeysApi - axios parameter creator
 * @export
 */
export const DocumentKeysApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * At most 100 keys may be allocated on each request. Limitations on the total number of unused document keys allocated may apply.
         * @summary Allocates a batch of document keys to be used later on document signatures
         * @param {AllocateDocumentKeyBatchRequest} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiDocumentKeysBatchPost: async (body?: AllocateDocumentKeyBatchRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/document-keys/batch`;
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
        /**
         * The key may be given either in formatted form (e.g. *XXXX-XXXX-XXXX-XXXX*) or unformatted (e.g. *XXXXXXXXXXXXXXXX*)    If a document with the given key is not found, the response is a `200 (Success)` with `\"found\": false`.    If the given key has been allocated in advance but is not yet associated with a document, the response is a `200 (Success)`  with `\"found\": true` and `\"hasDocument\": false`. In this case, the field `provisionalMetadata` contains any provisional metadata  passed during the document key allocation, which serves as an indicative of the metadata that a future document will likely have.    Only if `\"found\": true` **and** `\"hasDocument\": true` is the field `document` filled. In this case, `provisionalMetadata` is not filled.
         * @summary Queries documents by key
         * @param {string} key 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiDocumentKeysKeyGet: async (key: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'key' is not null or undefined
            if (key === null || key === undefined) {
                throw new RequiredError('key','Required parameter key was null or undefined when calling apiDocumentKeysKeyGet.');
            }
            const localVarPath = `/api/document-keys/{key}`
                .replace(`{${"key"}}`, encodeURIComponent(String(key)));
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
         * To allocate a number of document keys at once, use the `POST /api/document-keys/batch` API instead. Limitations on the total number of unused document keys allocated may apply.
         * @summary Allocates a document key to be used later on a document signature
         * @param {AllocateDocumentKeyRequest} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiDocumentKeysPost: async (body?: AllocateDocumentKeyRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/document-keys`;
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
        /**
         * 
         * @summary Queries unused document keys
         * @param {string} [metadataName] 
         * @param {string} [metadataValue] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiDocumentKeysUnusedGet: async (metadataName?: string, metadataValue?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/document-keys/unused`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (metadataName !== undefined) {
                localVarQueryParameter['metadataName'] = metadataName;
            }

            if (metadataValue !== undefined) {
                localVarQueryParameter['metadataValue'] = metadataValue;
            }

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
    }
};

/**
 * DocumentKeysApi - functional programming interface
 * @export
 */
export const DocumentKeysApiFp = function(configuration?: Configuration) {
    return {
        /**
         * At most 100 keys may be allocated on each request. Limitations on the total number of unused document keys allocated may apply.
         * @summary Allocates a batch of document keys to be used later on document signatures
         * @param {AllocateDocumentKeyBatchRequest} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiDocumentKeysBatchPost(body?: AllocateDocumentKeyBatchRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<Array<DocumentKeyModel>>>> {
            const localVarAxiosArgs = await DocumentKeysApiAxiosParamCreator(configuration).apiDocumentKeysBatchPost(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * The key may be given either in formatted form (e.g. *XXXX-XXXX-XXXX-XXXX*) or unformatted (e.g. *XXXXXXXXXXXXXXXX*)    If a document with the given key is not found, the response is a `200 (Success)` with `\"found\": false`.    If the given key has been allocated in advance but is not yet associated with a document, the response is a `200 (Success)`  with `\"found\": true` and `\"hasDocument\": false`. In this case, the field `provisionalMetadata` contains any provisional metadata  passed during the document key allocation, which serves as an indicative of the metadata that a future document will likely have.    Only if `\"found\": true` **and** `\"hasDocument\": true` is the field `document` filled. In this case, `provisionalMetadata` is not filled.
         * @summary Queries documents by key
         * @param {string} key 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiDocumentKeysKeyGet(key: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<DocumentKeyQueryResponse>>> {
            const localVarAxiosArgs = await DocumentKeysApiAxiosParamCreator(configuration).apiDocumentKeysKeyGet(key, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * To allocate a number of document keys at once, use the `POST /api/document-keys/batch` API instead. Limitations on the total number of unused document keys allocated may apply.
         * @summary Allocates a document key to be used later on a document signature
         * @param {AllocateDocumentKeyRequest} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiDocumentKeysPost(body?: AllocateDocumentKeyRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<DocumentKeyModel>>> {
            const localVarAxiosArgs = await DocumentKeysApiAxiosParamCreator(configuration).apiDocumentKeysPost(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Queries unused document keys
         * @param {string} [metadataName] 
         * @param {string} [metadataValue] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiDocumentKeysUnusedGet(metadataName?: string, metadataValue?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<Array<DocumentKeySummary>>>> {
            const localVarAxiosArgs = await DocumentKeysApiAxiosParamCreator(configuration).apiDocumentKeysUnusedGet(metadataName, metadataValue, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * DocumentKeysApi - factory interface
 * @export
 */
export const DocumentKeysApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * At most 100 keys may be allocated on each request. Limitations on the total number of unused document keys allocated may apply.
         * @summary Allocates a batch of document keys to be used later on document signatures
         * @param {AllocateDocumentKeyBatchRequest} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiDocumentKeysBatchPost(body?: AllocateDocumentKeyBatchRequest, options?: AxiosRequestConfig): Promise<AxiosResponse<Array<DocumentKeyModel>>> {
            return DocumentKeysApiFp(configuration).apiDocumentKeysBatchPost(body, options).then((request) => request(axios, basePath));
        },
        /**
         * The key may be given either in formatted form (e.g. *XXXX-XXXX-XXXX-XXXX*) or unformatted (e.g. *XXXXXXXXXXXXXXXX*)    If a document with the given key is not found, the response is a `200 (Success)` with `\"found\": false`.    If the given key has been allocated in advance but is not yet associated with a document, the response is a `200 (Success)`  with `\"found\": true` and `\"hasDocument\": false`. In this case, the field `provisionalMetadata` contains any provisional metadata  passed during the document key allocation, which serves as an indicative of the metadata that a future document will likely have.    Only if `\"found\": true` **and** `\"hasDocument\": true` is the field `document` filled. In this case, `provisionalMetadata` is not filled.
         * @summary Queries documents by key
         * @param {string} key 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiDocumentKeysKeyGet(key: string, options?: AxiosRequestConfig): Promise<AxiosResponse<DocumentKeyQueryResponse>> {
            return DocumentKeysApiFp(configuration).apiDocumentKeysKeyGet(key, options).then((request) => request(axios, basePath));
        },
        /**
         * To allocate a number of document keys at once, use the `POST /api/document-keys/batch` API instead. Limitations on the total number of unused document keys allocated may apply.
         * @summary Allocates a document key to be used later on a document signature
         * @param {AllocateDocumentKeyRequest} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiDocumentKeysPost(body?: AllocateDocumentKeyRequest, options?: AxiosRequestConfig): Promise<AxiosResponse<DocumentKeyModel>> {
            return DocumentKeysApiFp(configuration).apiDocumentKeysPost(body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Queries unused document keys
         * @param {string} [metadataName] 
         * @param {string} [metadataValue] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiDocumentKeysUnusedGet(metadataName?: string, metadataValue?: string, options?: AxiosRequestConfig): Promise<AxiosResponse<Array<DocumentKeySummary>>> {
            return DocumentKeysApiFp(configuration).apiDocumentKeysUnusedGet(metadataName, metadataValue, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * DocumentKeysApi - object-oriented interface
 * @export
 * @class DocumentKeysApi
 * @extends {BaseAPI}
 */
export class DocumentKeysApi extends BaseAPI {
    /**
     * At most 100 keys may be allocated on each request. Limitations on the total number of unused document keys allocated may apply.
     * @summary Allocates a batch of document keys to be used later on document signatures
     * @param {AllocateDocumentKeyBatchRequest} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DocumentKeysApi
     */
    public async apiDocumentKeysBatchPost(body?: AllocateDocumentKeyBatchRequest, options?: AxiosRequestConfig) : Promise<AxiosResponse<Array<DocumentKeyModel>>> {
        return DocumentKeysApiFp(this.configuration).apiDocumentKeysBatchPost(body, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * The key may be given either in formatted form (e.g. *XXXX-XXXX-XXXX-XXXX*) or unformatted (e.g. *XXXXXXXXXXXXXXXX*)    If a document with the given key is not found, the response is a `200 (Success)` with `\"found\": false`.    If the given key has been allocated in advance but is not yet associated with a document, the response is a `200 (Success)`  with `\"found\": true` and `\"hasDocument\": false`. In this case, the field `provisionalMetadata` contains any provisional metadata  passed during the document key allocation, which serves as an indicative of the metadata that a future document will likely have.    Only if `\"found\": true` **and** `\"hasDocument\": true` is the field `document` filled. In this case, `provisionalMetadata` is not filled.
     * @summary Queries documents by key
     * @param {string} key 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DocumentKeysApi
     */
    public async apiDocumentKeysKeyGet(key: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<DocumentKeyQueryResponse>> {
        return DocumentKeysApiFp(this.configuration).apiDocumentKeysKeyGet(key, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * To allocate a number of document keys at once, use the `POST /api/document-keys/batch` API instead. Limitations on the total number of unused document keys allocated may apply.
     * @summary Allocates a document key to be used later on a document signature
     * @param {AllocateDocumentKeyRequest} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DocumentKeysApi
     */
    public async apiDocumentKeysPost(body?: AllocateDocumentKeyRequest, options?: AxiosRequestConfig) : Promise<AxiosResponse<DocumentKeyModel>> {
        return DocumentKeysApiFp(this.configuration).apiDocumentKeysPost(body, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary Queries unused document keys
     * @param {string} [metadataName] 
     * @param {string} [metadataValue] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DocumentKeysApi
     */
    public async apiDocumentKeysUnusedGet(metadataName?: string, metadataValue?: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<Array<DocumentKeySummary>>> {
        return DocumentKeysApiFp(this.configuration).apiDocumentKeysUnusedGet(metadataName, metadataValue, options).then((request) => request(this.axios, this.basePath));
    }
}
