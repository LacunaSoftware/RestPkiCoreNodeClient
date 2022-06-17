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
import { InspectSignatureRequest } from '../models';
import { InspectSignatureResponse } from '../models';
/**
 * SignatureInspectionApi - axios parameter creator
 * @export
 */
export const SignatureInspectionApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * ## Overview    The simplest usage of this API is by simply passing the `file` to be inspected. If passing a file by its contents, make sure to pass its  `mimeType` so that the API can infer the signature type (PDF/PAdES, CMS/CAdES or XML/XmlDSig) from it.    Information about each signer found is returned on the `signers` property. If the file was signed on this instance, additional information  about the document is returned on the `document` property.    Please note that by default the signatures are not validated. This means that the `validationResults` property of each signer will be `null`  (unless the file was signed on this instance, in which case the property will be filled).    ## Signature validation    By default, the signed file is only inspected, but not validated. To validate the signatures, pass `validate = true`. In this case, you may  optionally specify the `securityContextId` to be used to validate the certificates. If omitted, your default security context will be used.    Please note that validating the signatures may take several seconds or even longer, depending on the number of signers. If more than 10  signers are found, only the first 10 are validated (this limit may be increased on on-demand instances). If your documents can have a large  number of signers per document, please consider using the signer inspection API to validate each user separately on-demand as the user  interacts with the UI.    ## Validating detached CMS/CAdES signatures     When validating detached CMS/CAdES signatures, the detached data file must be specified on the `dataFile` property or its digests must be given  on the `dataHashes` property. If passing `dataHashes`, make sure to pass at least the SHA-256 digest of the data file (other digests may be necessary  depending on the signature algorithm used by the signers). If your data files can be considerably large, passing the `dataHashes` is recommended  since it avoids transmitting the actual data files through the API.    If a CMS/CAdES signature is given with `validate = true` and without the corresponding data file specified, the API returns a 200 (OK) response with  `success = false` and `failure = DataFileRequired`. This allows you to implement a validation form that lets the user submit the signature file and only  requests the data file if necessary.
         * @summary Inspects a signed file, returning information about its signers and metadata about the corresponding document (if signed on this instance)
         * @param {InspectSignatureRequest} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiSignatureInspectionPut: async (body?: InspectSignatureRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/signature-inspection`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'PUT', ...baseOptions, ...options};
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
 * SignatureInspectionApi - functional programming interface
 * @export
 */
export const SignatureInspectionApiFp = function(configuration?: Configuration) {
    return {
        /**
         * ## Overview    The simplest usage of this API is by simply passing the `file` to be inspected. If passing a file by its contents, make sure to pass its  `mimeType` so that the API can infer the signature type (PDF/PAdES, CMS/CAdES or XML/XmlDSig) from it.    Information about each signer found is returned on the `signers` property. If the file was signed on this instance, additional information  about the document is returned on the `document` property.    Please note that by default the signatures are not validated. This means that the `validationResults` property of each signer will be `null`  (unless the file was signed on this instance, in which case the property will be filled).    ## Signature validation    By default, the signed file is only inspected, but not validated. To validate the signatures, pass `validate = true`. In this case, you may  optionally specify the `securityContextId` to be used to validate the certificates. If omitted, your default security context will be used.    Please note that validating the signatures may take several seconds or even longer, depending on the number of signers. If more than 10  signers are found, only the first 10 are validated (this limit may be increased on on-demand instances). If your documents can have a large  number of signers per document, please consider using the signer inspection API to validate each user separately on-demand as the user  interacts with the UI.    ## Validating detached CMS/CAdES signatures     When validating detached CMS/CAdES signatures, the detached data file must be specified on the `dataFile` property or its digests must be given  on the `dataHashes` property. If passing `dataHashes`, make sure to pass at least the SHA-256 digest of the data file (other digests may be necessary  depending on the signature algorithm used by the signers). If your data files can be considerably large, passing the `dataHashes` is recommended  since it avoids transmitting the actual data files through the API.    If a CMS/CAdES signature is given with `validate = true` and without the corresponding data file specified, the API returns a 200 (OK) response with  `success = false` and `failure = DataFileRequired`. This allows you to implement a validation form that lets the user submit the signature file and only  requests the data file if necessary.
         * @summary Inspects a signed file, returning information about its signers and metadata about the corresponding document (if signed on this instance)
         * @param {InspectSignatureRequest} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSignatureInspectionPut(body?: InspectSignatureRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<InspectSignatureResponse>>> {
            const localVarAxiosArgs = await SignatureInspectionApiAxiosParamCreator(configuration).apiSignatureInspectionPut(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * SignatureInspectionApi - factory interface
 * @export
 */
export const SignatureInspectionApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * ## Overview    The simplest usage of this API is by simply passing the `file` to be inspected. If passing a file by its contents, make sure to pass its  `mimeType` so that the API can infer the signature type (PDF/PAdES, CMS/CAdES or XML/XmlDSig) from it.    Information about each signer found is returned on the `signers` property. If the file was signed on this instance, additional information  about the document is returned on the `document` property.    Please note that by default the signatures are not validated. This means that the `validationResults` property of each signer will be `null`  (unless the file was signed on this instance, in which case the property will be filled).    ## Signature validation    By default, the signed file is only inspected, but not validated. To validate the signatures, pass `validate = true`. In this case, you may  optionally specify the `securityContextId` to be used to validate the certificates. If omitted, your default security context will be used.    Please note that validating the signatures may take several seconds or even longer, depending on the number of signers. If more than 10  signers are found, only the first 10 are validated (this limit may be increased on on-demand instances). If your documents can have a large  number of signers per document, please consider using the signer inspection API to validate each user separately on-demand as the user  interacts with the UI.    ## Validating detached CMS/CAdES signatures     When validating detached CMS/CAdES signatures, the detached data file must be specified on the `dataFile` property or its digests must be given  on the `dataHashes` property. If passing `dataHashes`, make sure to pass at least the SHA-256 digest of the data file (other digests may be necessary  depending on the signature algorithm used by the signers). If your data files can be considerably large, passing the `dataHashes` is recommended  since it avoids transmitting the actual data files through the API.    If a CMS/CAdES signature is given with `validate = true` and without the corresponding data file specified, the API returns a 200 (OK) response with  `success = false` and `failure = DataFileRequired`. This allows you to implement a validation form that lets the user submit the signature file and only  requests the data file if necessary.
         * @summary Inspects a signed file, returning information about its signers and metadata about the corresponding document (if signed on this instance)
         * @param {InspectSignatureRequest} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSignatureInspectionPut(body?: InspectSignatureRequest, options?: AxiosRequestConfig): Promise<AxiosResponse<InspectSignatureResponse>> {
            return SignatureInspectionApiFp(configuration).apiSignatureInspectionPut(body, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * SignatureInspectionApi - object-oriented interface
 * @export
 * @class SignatureInspectionApi
 * @extends {BaseAPI}
 */
export class SignatureInspectionApi extends BaseAPI {
    /**
     * ## Overview    The simplest usage of this API is by simply passing the `file` to be inspected. If passing a file by its contents, make sure to pass its  `mimeType` so that the API can infer the signature type (PDF/PAdES, CMS/CAdES or XML/XmlDSig) from it.    Information about each signer found is returned on the `signers` property. If the file was signed on this instance, additional information  about the document is returned on the `document` property.    Please note that by default the signatures are not validated. This means that the `validationResults` property of each signer will be `null`  (unless the file was signed on this instance, in which case the property will be filled).    ## Signature validation    By default, the signed file is only inspected, but not validated. To validate the signatures, pass `validate = true`. In this case, you may  optionally specify the `securityContextId` to be used to validate the certificates. If omitted, your default security context will be used.    Please note that validating the signatures may take several seconds or even longer, depending on the number of signers. If more than 10  signers are found, only the first 10 are validated (this limit may be increased on on-demand instances). If your documents can have a large  number of signers per document, please consider using the signer inspection API to validate each user separately on-demand as the user  interacts with the UI.    ## Validating detached CMS/CAdES signatures     When validating detached CMS/CAdES signatures, the detached data file must be specified on the `dataFile` property or its digests must be given  on the `dataHashes` property. If passing `dataHashes`, make sure to pass at least the SHA-256 digest of the data file (other digests may be necessary  depending on the signature algorithm used by the signers). If your data files can be considerably large, passing the `dataHashes` is recommended  since it avoids transmitting the actual data files through the API.    If a CMS/CAdES signature is given with `validate = true` and without the corresponding data file specified, the API returns a 200 (OK) response with  `success = false` and `failure = DataFileRequired`. This allows you to implement a validation form that lets the user submit the signature file and only  requests the data file if necessary.
     * @summary Inspects a signed file, returning information about its signers and metadata about the corresponding document (if signed on this instance)
     * @param {InspectSignatureRequest} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SignatureInspectionApi
     */
    public async apiSignatureInspectionPut(body?: InspectSignatureRequest, options?: AxiosRequestConfig) : Promise<AxiosResponse<InspectSignatureResponse>> {
        return SignatureInspectionApiFp(this.configuration).apiSignatureInspectionPut(body, options).then((request) => request(this.axios, this.basePath));
    }
}
