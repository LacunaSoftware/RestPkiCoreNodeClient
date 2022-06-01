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
import {ApiClient} from '../ApiClient';

/**
 * The NameModel model module.
 * @module model/NameModel
 * @version 1.10.1 RTM
 */
export class NameModel {
  /**
   * Constructs a new <code>NameModel</code>.
   * @alias module:model/NameModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>NameModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/NameModel} obj Optional instance to populate.
   * @return {module:model/NameModel} The populated <code>NameModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new NameModel();
      if (data.hasOwnProperty('country'))
        obj.country = ApiClient.convertToType(data['country'], 'String');
      if (data.hasOwnProperty('organization'))
        obj.organization = ApiClient.convertToType(data['organization'], 'String');
      if (data.hasOwnProperty('organizationUnit'))
        obj.organizationUnit = ApiClient.convertToType(data['organizationUnit'], 'String');
      if (data.hasOwnProperty('dnQualifier'))
        obj.dnQualifier = ApiClient.convertToType(data['dnQualifier'], 'String');
      if (data.hasOwnProperty('stateName'))
        obj.stateName = ApiClient.convertToType(data['stateName'], 'String');
      if (data.hasOwnProperty('commonName'))
        obj.commonName = ApiClient.convertToType(data['commonName'], 'String');
      if (data.hasOwnProperty('serialNumber'))
        obj.serialNumber = ApiClient.convertToType(data['serialNumber'], 'String');
      if (data.hasOwnProperty('locality'))
        obj.locality = ApiClient.convertToType(data['locality'], 'String');
      if (data.hasOwnProperty('title'))
        obj.title = ApiClient.convertToType(data['title'], 'String');
      if (data.hasOwnProperty('surname'))
        obj.surname = ApiClient.convertToType(data['surname'], 'String');
      if (data.hasOwnProperty('givenName'))
        obj.givenName = ApiClient.convertToType(data['givenName'], 'String');
      if (data.hasOwnProperty('initials'))
        obj.initials = ApiClient.convertToType(data['initials'], 'String');
      if (data.hasOwnProperty('pseudonym'))
        obj.pseudonym = ApiClient.convertToType(data['pseudonym'], 'String');
      if (data.hasOwnProperty('generationQualifier'))
        obj.generationQualifier = ApiClient.convertToType(data['generationQualifier'], 'String');
      if (data.hasOwnProperty('emailAddress'))
        obj.emailAddress = ApiClient.convertToType(data['emailAddress'], 'String');
      if (data.hasOwnProperty('allValues'))
        obj.allValues = ApiClient.convertToType(data['allValues'], {'String': ['String']});
    }
    return obj;
  }
}

/**
 * @member {String} country
 */
NameModel.prototype.country = undefined;

/**
 * @member {String} organization
 */
NameModel.prototype.organization = undefined;

/**
 * @member {String} organizationUnit
 */
NameModel.prototype.organizationUnit = undefined;

/**
 * @member {String} dnQualifier
 */
NameModel.prototype.dnQualifier = undefined;

/**
 * @member {String} stateName
 */
NameModel.prototype.stateName = undefined;

/**
 * @member {String} commonName
 */
NameModel.prototype.commonName = undefined;

/**
 * @member {String} serialNumber
 */
NameModel.prototype.serialNumber = undefined;

/**
 * @member {String} locality
 */
NameModel.prototype.locality = undefined;

/**
 * @member {String} title
 */
NameModel.prototype.title = undefined;

/**
 * @member {String} surname
 */
NameModel.prototype.surname = undefined;

/**
 * @member {String} givenName
 */
NameModel.prototype.givenName = undefined;

/**
 * @member {String} initials
 */
NameModel.prototype.initials = undefined;

/**
 * @member {String} pseudonym
 */
NameModel.prototype.pseudonym = undefined;

/**
 * @member {String} generationQualifier
 */
NameModel.prototype.generationQualifier = undefined;

/**
 * @member {String} emailAddress
 */
NameModel.prototype.emailAddress = undefined;

/**
 * @member {Object.<String, Array.<String>>} allValues
 */
NameModel.prototype.allValues = undefined;

