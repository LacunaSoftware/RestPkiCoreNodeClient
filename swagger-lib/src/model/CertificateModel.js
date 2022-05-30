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
import {NameModel} from './NameModel';
import {PkiBrazilCertificateModel} from './PkiBrazilCertificateModel';
import {PkiItalyCertificateModel} from './PkiItalyCertificateModel';

/**
 * The CertificateModel model module.
 * @module model/CertificateModel
 * @version 1.10.1 RTM
 */
export class CertificateModel {
  /**
   * Constructs a new <code>CertificateModel</code>.
   * @alias module:model/CertificateModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>CertificateModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CertificateModel} obj Optional instance to populate.
   * @return {module:model/CertificateModel} The populated <code>CertificateModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CertificateModel();
      if (data.hasOwnProperty('subjectName'))
        obj.subjectName = NameModel.constructFromObject(data['subjectName']);
      if (data.hasOwnProperty('issuerName'))
        obj.issuerName = NameModel.constructFromObject(data['issuerName']);
      if (data.hasOwnProperty('issuerDisplayName'))
        obj.issuerDisplayName = ApiClient.convertToType(data['issuerDisplayName'], 'String');
      if (data.hasOwnProperty('serialNumber'))
        obj.serialNumber = ApiClient.convertToType(data['serialNumber'], 'String');
      if (data.hasOwnProperty('validityStart'))
        obj.validityStart = ApiClient.convertToType(data['validityStart'], 'Date');
      if (data.hasOwnProperty('validityEnd'))
        obj.validityEnd = ApiClient.convertToType(data['validityEnd'], 'Date');
      if (data.hasOwnProperty('issuer'))
        obj.issuer = CertificateModel.constructFromObject(data['issuer']);
      if (data.hasOwnProperty('pkiBrazil'))
        obj.pkiBrazil = PkiBrazilCertificateModel.constructFromObject(data['pkiBrazil']);
      if (data.hasOwnProperty('pkiItaly'))
        obj.pkiItaly = PkiItalyCertificateModel.constructFromObject(data['pkiItaly']);
      if (data.hasOwnProperty('binaryThumbprintSHA256'))
        obj.binaryThumbprintSHA256 = ApiClient.convertToType(data['binaryThumbprintSHA256'], 'Blob');
      if (data.hasOwnProperty('thumbprint'))
        obj.thumbprint = ApiClient.convertToType(data['thumbprint'], 'String');
      if (data.hasOwnProperty('thumbprintSHA256'))
        obj.thumbprintSHA256 = ApiClient.convertToType(data['thumbprintSHA256'], 'String');
      if (data.hasOwnProperty('subjectCommonName'))
        obj.subjectCommonName = ApiClient.convertToType(data['subjectCommonName'], 'String');
      if (data.hasOwnProperty('subjectDisplayName'))
        obj.subjectDisplayName = ApiClient.convertToType(data['subjectDisplayName'], 'String');
      if (data.hasOwnProperty('subjectIdentifier'))
        obj.subjectIdentifier = ApiClient.convertToType(data['subjectIdentifier'], 'String');
      if (data.hasOwnProperty('emailAddress'))
        obj.emailAddress = ApiClient.convertToType(data['emailAddress'], 'String');
      if (data.hasOwnProperty('organization'))
        obj.organization = ApiClient.convertToType(data['organization'], 'String');
      if (data.hasOwnProperty('organizationIdentifier'))
        obj.organizationIdentifier = ApiClient.convertToType(data['organizationIdentifier'], 'String');
    }
    return obj;
  }
}

/**
 * @member {module:model/NameModel} subjectName
 */
CertificateModel.prototype.subjectName = undefined;

/**
 * @member {module:model/NameModel} issuerName
 */
CertificateModel.prototype.issuerName = undefined;

/**
 * @member {String} issuerDisplayName
 */
CertificateModel.prototype.issuerDisplayName = undefined;

/**
 * @member {String} serialNumber
 */
CertificateModel.prototype.serialNumber = undefined;

/**
 * @member {Date} validityStart
 */
CertificateModel.prototype.validityStart = undefined;

/**
 * @member {Date} validityEnd
 */
CertificateModel.prototype.validityEnd = undefined;

/**
 * @member {module:model/CertificateModel} issuer
 */
CertificateModel.prototype.issuer = undefined;

/**
 * @member {module:model/PkiBrazilCertificateModel} pkiBrazil
 */
CertificateModel.prototype.pkiBrazil = undefined;

/**
 * @member {module:model/PkiItalyCertificateModel} pkiItaly
 */
CertificateModel.prototype.pkiItaly = undefined;

/**
 * @member {Blob} binaryThumbprintSHA256
 */
CertificateModel.prototype.binaryThumbprintSHA256 = undefined;

/**
 * @member {String} thumbprint
 */
CertificateModel.prototype.thumbprint = undefined;

/**
 * @member {String} thumbprintSHA256
 */
CertificateModel.prototype.thumbprintSHA256 = undefined;

/**
 * @member {String} subjectCommonName
 */
CertificateModel.prototype.subjectCommonName = undefined;

/**
 * @member {String} subjectDisplayName
 */
CertificateModel.prototype.subjectDisplayName = undefined;

/**
 * @member {String} subjectIdentifier
 */
CertificateModel.prototype.subjectIdentifier = undefined;

/**
 * @member {String} emailAddress
 */
CertificateModel.prototype.emailAddress = undefined;

/**
 * @member {String} organization
 */
CertificateModel.prototype.organization = undefined;

/**
 * @member {String} organizationIdentifier
 */
CertificateModel.prototype.organizationIdentifier = undefined;

