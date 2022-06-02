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
import {ApiClient} from './ApiClient';
import {AllocateDocumentKeyBatchRequest} from './model/AllocateDocumentKeyBatchRequest';
import {AllocateDocumentKeyRequest} from './model/AllocateDocumentKeyRequest';
import {ApplicationKeyModel} from './model/ApplicationKeyModel';
import {ApplicationKeyTypes} from './model/ApplicationKeyTypes';
import {AuthenticationFailures} from './model/AuthenticationFailures';
import {AuthorizationData} from './model/AuthorizationData';
import {AuthorizationDataRootAuthorizationDataRolesRootRolesApplicationData} from './model/AuthorizationDataRootAuthorizationDataRolesRootRolesApplicationData';
import {CertificateFullModel} from './model/CertificateFullModel';
import {CertificateModel} from './model/CertificateModel';
import {CertificateRequirement} from './model/CertificateRequirement';
import {CertificateRequirementTypes} from './model/CertificateRequirementTypes';
import {CertificateSummary} from './model/CertificateSummary';
import {CmsSignatureOptions} from './model/CmsSignatureOptions';
import {CompleteAuthenticationRequest} from './model/CompleteAuthenticationRequest';
import {CompleteAuthenticationResponse} from './model/CompleteAuthenticationResponse';
import {CreateApplicationApiKeyRequest} from './model/CreateApplicationApiKeyRequest';
import {CreateApplicationApiKeyResponse} from './model/CreateApplicationApiKeyResponse';
import {CreateSignatureSessionRequest} from './model/CreateSignatureSessionRequest';
import {CreateSignatureSessionResponse} from './model/CreateSignatureSessionResponse';
import {DigestAlgorithmAndValueModel} from './model/DigestAlgorithmAndValueModel';
import {DigestAlgorithms} from './model/DigestAlgorithms';
import {DocumentFileModel} from './model/DocumentFileModel';
import {DocumentKeyModel} from './model/DocumentKeyModel';
import {DocumentKeyQueryResponse} from './model/DocumentKeyQueryResponse';
import {DocumentKeySummary} from './model/DocumentKeySummary';
import {DocumentModel} from './model/DocumentModel';
import {DocumentQueryResponse} from './model/DocumentQueryResponse';
import {DocumentStatus} from './model/DocumentStatus';
import {DocumentSummary} from './model/DocumentSummary';
import {ErrorModelV2} from './model/ErrorModelV2';
import {FileReferenceModel} from './model/FileReferenceModel';
import {InspectSignatureFailures} from './model/InspectSignatureFailures';
import {InspectSignatureRequest} from './model/InspectSignatureRequest';
import {InspectSignatureResponse} from './model/InspectSignatureResponse';
import {NameModel} from './model/NameModel';
import {PaginationOrders} from './model/PaginationOrders';
import {PkiBrazilCertificateModel} from './model/PkiBrazilCertificateModel';
import {PkiBrazilCertificateTypes} from './model/PkiBrazilCertificateTypes';
import {PkiItalyCertificateModel} from './model/PkiItalyCertificateModel';
import {PkiItalyCertificateTypes} from './model/PkiItalyCertificateTypes';
import {PrepareAuthenticationRequest} from './model/PrepareAuthenticationRequest';
import {PrepareAuthenticationResponse} from './model/PrepareAuthenticationResponse';
import {Roles} from './model/Roles';
import {RootAuthorizationData} from './model/RootAuthorizationData';
import {RootRoles} from './model/RootRoles';
import {SessionCompletionStatus} from './model/SessionCompletionStatus';
import {SignatureAlgorithmAndValueModel} from './model/SignatureAlgorithmAndValueModel';
import {SignatureAlgorithmIdentifier} from './model/SignatureAlgorithmIdentifier';
import {SignatureAlgorithms} from './model/SignatureAlgorithms';
import {SignatureSessionDocumentData} from './model/SignatureSessionDocumentData';
import {SignatureSessionDocumentSummary} from './model/SignatureSessionDocumentSummary';
import {SignatureSessionModel} from './model/SignatureSessionModel';
import {SignatureSessionStatus} from './model/SignatureSessionStatus';
import {SignatureTypes} from './model/SignatureTypes';
import {SignerModel} from './model/SignerModel';
import {SignerSummary} from './model/SignerSummary';
import {SubscriptionAccessModel} from './model/SubscriptionAccessModel';
import {SubscriptionAccessModelRolesRootRolesApplicationModel} from './model/SubscriptionAccessModelRolesRootRolesApplicationModel';
import {SubscriptionAccessModelRolesRootRolesApplicationModelPaginatedSearchResponse} from './model/SubscriptionAccessModelRolesRootRolesApplicationModelPaginatedSearchResponse';
import {ValidationItemModel} from './model/ValidationItemModel';
import {ValidationItemTypes} from './model/ValidationItemTypes';
import {ValidationResultsModel} from './model/ValidationResultsModel';
import {WebhookEventModel} from './model/WebhookEventModel';
import {WebhookEventTypes} from './model/WebhookEventTypes';
import {ApplicationKeysController29Api} from './api/ApplicationKeysController29Api';
import {ApplicationsApi} from './api/ApplicationsApi';
import {ApplicationsController29Api} from './api/ApplicationsController29Api';
import {AuthenticationApi} from './api/AuthenticationApi';
import {CertificatesApi} from './api/CertificatesApi';
import {DocumentKeysApi} from './api/DocumentKeysApi';
import {DocumentsApi} from './api/DocumentsApi';
import {SignatureInspectionApi} from './api/SignatureInspectionApi';
import {SignatureSessionsApi} from './api/SignatureSessionsApi';
import { API_KEY_HEADER } from './model/API_KEY_HEADER';

/**
* biPara_Portugus_a_hrefhttpsdocs_lacunasoftware_compt_brarticlesrest_pkicoreintegrationget_startedclique_aquiaibpa_hrefhttpsdocs_lacunasoftware_comen_usarticlesrest_pkicoreRest_PKI_Corea_is_an_upcoming_version_ofa_hrefhttpsdocs_lacunasoftware_comen_usarticlesrest_pkiRest_PKIa_that_will_have_extended_compatibility_with_environments_and_databases_ppIn_addition_to_Windows_Server__which_is_already_supported_by_Rest_PKI_Rest_PKI_Core_will_also_run_on_bLinuxb__Debian__and_RedHat_based_distributionsand_on_bDockerb__As_for_database_servers_in_addition_to_SQL_Server_bPostgreSQLb_will_also_be_supported_ppbBefore_getting_started_see_the_integration_overview_on_the_a_hrefhttpsdocs_lacunasoftware_comen_usarticlesrest_pkicoreintegrationIntegration_GuideabppFor_questions_regarding_the_usage_of_this_API_please_reach_us_at_a_hrefhttpslacuna_helplacuna_helpaph2Parametersh2pYou_will_need_the_following_parameterspullibEndpointb_address_of_the_Rest_PKI_Core_instance_that_will_be_usedlilibAPI_Keyb_authorization_key_for_using_the_APIliulpThe_span_classmodelendpointspan_must_be_prefixed_to_all_relative_URLs_mentioned_here__As_for_the_span_classmodelAPI_Keyspan_see_how_to_use_it_below_ph2Authenticationh2pThe_API_key_must_be_sent_on_the_span_classmodelX_Api_Keyspan_header_on_each_requestp___unfortunately_class_example_microlight_doesnt_seem_to_work_here___pre_stylefont_size_12px_padding_10px_border_radius_4px_background_41444e_font_weight_600_color_fffX_Api_Key_yourappxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxpreh2HTTP_Codesh2pThe_APIs_will_return_the_following_HTTP_codesptabletheadtrthCodeththDescriptionthtrtheadtbodytrtdstrong_classmodel_title200__OKstrongtdtdRequest_processed_successfully__The_response_is_different_for_each_API_please_refer_to_the_operations_documentationtdtrtrtdstrong_classmodel_title400__Bad_RequeststrongtdtdSyntax_error__For_instance_when_a_required_field_was_not_providedtdtrtrtdstrong_classmodel_title401__UnauthorizedstrongtdtdAPI_key_not_provided_or_invalidtdtrtrtdstrong_classmodel_title403__ForbiddenstrongtdtdAPI_key_is_valid_but_the_application_has_insufficient_permissions_to_complete_the_requested_operationtdtrtrtdstrong_classmodel_title422__Unprocessable_EntitystrongtdtdAPI_error__The_response_body_is_an_a_hrefmodel_ErrorModelV2_classmodelErrorModelV2atrtrtdstrong_classmodel_title500__Internal_Server_ErrorstrongtdtdAn_unexpected_error_occurred__The_span_classmodelexceptionCodespan_contained_on_the_response_body_may_be_of_help_for_our_support_team_during_diagnostic_tdtrtbodytableh3Error_Codesh3pSome_of_the_error_codes_returned_in_the_span_classmodelcodespan_field_of_an_a_hrefmodel_ErrorModelV2_classmodelErrorModelV2a_body_of_responses_with_HTTP_status_code_422_are_provided_belowptabletheadtrthCodeththDescriptionthtrtheadtbodytrtd_classmodelDocumentNotFoundtdtdA_referenced_document_was_not_found__check_the_document_IDtdtrtrtd_classmodelSecurityContextNotFoundtdtdA_referenced_security_context_was_not_found__check_the_security_context_IDtdtrtrtd_classmodelSignatureSessionNotFoundtdtdA_referenced_signature_session_was_not_found__check_the_signature_session_IDtdtrtrtd_classmodelBadSignatureSessionOperationtdtdThe_operation_is_invalid_for_the_current_signature_session_or_document_status__For_instance_trying_to_await_the_sessions_completion_if_it_is_still_span_classmodelPendingspan_results_in_this_errortdtrtrtd_classmodelBackgroundProcessingtdtdThe_operation_cannot_be_completed_at_this_time_because_the_resource_is_being_processed_in_backgroundtdtrtrtd_classmodelSignatureSessionTokenRequiredtdtdThe_signature_session_token_was_not_passed_on_the_span_classmodelX_Signature_Session_Tokenspan_request_headertdtrtrtd_classmodelBadSignatureSessionTokentdtdAn_invalid_signature_session_token_was_passed_on_the_span_classmodelX_Signature_Session_Tokenspan_request_header__Check_your_application_for_possible_corruption_of_the_session_token_which_may_contain_characters_span_classcode_span__hyphen_and_span_classcode_span__underscoretdtrtrtd_classmodelExpiredSignatureSessionTokentdtdAn_expired_signature_session_token_was_passed_on_the_span_classmodelX_Signature_Session_Tokenspan_request_header__Signature_session_tokens_are_normally_valid_for_4_hours_tdtrtbodytablep_stylefont_size_0_9emThe_codes_shown_above_are_the_most_common_error_codes__Nonetheless_this_list_is_not_comprehensive__New_codes_may_be_added_anytime_without_previous_warning_ph2Culture__Internationalization__i18nh2pThe_span_classmodelAccept_Languagespan_request_header_is_observed_by_this_API__The_following_cultures_are_supportedpullispan_classcodeen_USspan__or_simply_span_classcodeenspanlilispan_classcodept_BRspan__or_simply_span_classcodeptspanliulpiNotice_error_messages_are_not_affected_by_this_header_and_therefore_should_not_be_displayed_to_users_being_better_suited_for_logging_ip.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var RestPkiCoreClient = require('index'); // See note below*.
* var xxxSvc = new RestPkiCoreClient.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new RestPkiCoreClient.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new RestPkiCoreClient.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new RestPkiCoreClient.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version 1.0.1
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The AllocateDocumentKeyBatchRequest model constructor.
     * @property {module:model/AllocateDocumentKeyBatchRequest}
     */
    AllocateDocumentKeyBatchRequest,

    /**
     * The AllocateDocumentKeyRequest model constructor.
     * @property {module:model/AllocateDocumentKeyRequest}
     */
    AllocateDocumentKeyRequest,

    /**
     * The ApplicationKeyModel model constructor.
     * @property {module:model/ApplicationKeyModel}
     */
    ApplicationKeyModel,

    /**
     * The ApplicationKeyTypes model constructor.
     * @property {module:model/ApplicationKeyTypes}
     */
    ApplicationKeyTypes,

    /**
     * The AuthenticationFailures model constructor.
     * @property {module:model/AuthenticationFailures}
     */
    AuthenticationFailures,

    /**
     * The AuthorizationData model constructor.
     * @property {module:model/AuthorizationData}
     */
    AuthorizationData,

    /**
     * The AuthorizationDataRootAuthorizationDataRolesRootRolesApplicationData model constructor.
     * @property {module:model/AuthorizationDataRootAuthorizationDataRolesRootRolesApplicationData}
     */
    AuthorizationDataRootAuthorizationDataRolesRootRolesApplicationData,

    /**
     * The CertificateFullModel model constructor.
     * @property {module:model/CertificateFullModel}
     */
    CertificateFullModel,

    /**
     * The CertificateModel model constructor.
     * @property {module:model/CertificateModel}
     */
    CertificateModel,

    /**
     * The CertificateRequirement model constructor.
     * @property {module:model/CertificateRequirement}
     */
    CertificateRequirement,

    /**
     * The CertificateRequirementTypes model constructor.
     * @property {module:model/CertificateRequirementTypes}
     */
    CertificateRequirementTypes,

    /**
     * The CertificateSummary model constructor.
     * @property {module:model/CertificateSummary}
     */
    CertificateSummary,

    /**
     * The CmsSignatureOptions model constructor.
     * @property {module:model/CmsSignatureOptions}
     */
    CmsSignatureOptions,

    /**
     * The CompleteAuthenticationRequest model constructor.
     * @property {module:model/CompleteAuthenticationRequest}
     */
    CompleteAuthenticationRequest,

    /**
     * The CompleteAuthenticationResponse model constructor.
     * @property {module:model/CompleteAuthenticationResponse}
     */
    CompleteAuthenticationResponse,

    /**
     * The CreateApplicationApiKeyRequest model constructor.
     * @property {module:model/CreateApplicationApiKeyRequest}
     */
    CreateApplicationApiKeyRequest,

    /**
     * The CreateApplicationApiKeyResponse model constructor.
     * @property {module:model/CreateApplicationApiKeyResponse}
     */
    CreateApplicationApiKeyResponse,

    /**
     * The CreateSignatureSessionRequest model constructor.
     * @property {module:model/CreateSignatureSessionRequest}
     */
    CreateSignatureSessionRequest,

    /**
     * The CreateSignatureSessionResponse model constructor.
     * @property {module:model/CreateSignatureSessionResponse}
     */
    CreateSignatureSessionResponse,

    /**
     * The DigestAlgorithmAndValueModel model constructor.
     * @property {module:model/DigestAlgorithmAndValueModel}
     */
    DigestAlgorithmAndValueModel,

    /**
     * The DigestAlgorithms model constructor.
     * @property {module:model/DigestAlgorithms}
     */
    DigestAlgorithms,

    /**
     * The DocumentFileModel model constructor.
     * @property {module:model/DocumentFileModel}
     */
    DocumentFileModel,

    /**
     * The DocumentKeyModel model constructor.
     * @property {module:model/DocumentKeyModel}
     */
    DocumentKeyModel,

    /**
     * The DocumentKeyQueryResponse model constructor.
     * @property {module:model/DocumentKeyQueryResponse}
     */
    DocumentKeyQueryResponse,

    /**
     * The DocumentKeySummary model constructor.
     * @property {module:model/DocumentKeySummary}
     */
    DocumentKeySummary,

    /**
     * The DocumentModel model constructor.
     * @property {module:model/DocumentModel}
     */
    DocumentModel,

    /**
     * The DocumentQueryResponse model constructor.
     * @property {module:model/DocumentQueryResponse}
     */
    DocumentQueryResponse,

    /**
     * The DocumentStatus model constructor.
     * @property {module:model/DocumentStatus}
     */
    DocumentStatus,

    /**
     * The DocumentSummary model constructor.
     * @property {module:model/DocumentSummary}
     */
    DocumentSummary,

    /**
     * The ErrorModelV2 model constructor.
     * @property {module:model/ErrorModelV2}
     */
    ErrorModelV2,

    /**
     * The FileReferenceModel model constructor.
     * @property {module:model/FileReferenceModel}
     */
    FileReferenceModel,

    /**
     * The InspectSignatureFailures model constructor.
     * @property {module:model/InspectSignatureFailures}
     */
    InspectSignatureFailures,

    /**
     * The InspectSignatureRequest model constructor.
     * @property {module:model/InspectSignatureRequest}
     */
    InspectSignatureRequest,

    /**
     * The InspectSignatureResponse model constructor.
     * @property {module:model/InspectSignatureResponse}
     */
    InspectSignatureResponse,

    /**
     * The NameModel model constructor.
     * @property {module:model/NameModel}
     */
    NameModel,

    /**
     * The PaginationOrders model constructor.
     * @property {module:model/PaginationOrders}
     */
    PaginationOrders,

    /**
     * The PkiBrazilCertificateModel model constructor.
     * @property {module:model/PkiBrazilCertificateModel}
     */
    PkiBrazilCertificateModel,

    /**
     * The PkiBrazilCertificateTypes model constructor.
     * @property {module:model/PkiBrazilCertificateTypes}
     */
    PkiBrazilCertificateTypes,

    /**
     * The PkiItalyCertificateModel model constructor.
     * @property {module:model/PkiItalyCertificateModel}
     */
    PkiItalyCertificateModel,

    /**
     * The PkiItalyCertificateTypes model constructor.
     * @property {module:model/PkiItalyCertificateTypes}
     */
    PkiItalyCertificateTypes,

    /**
     * The PrepareAuthenticationRequest model constructor.
     * @property {module:model/PrepareAuthenticationRequest}
     */
    PrepareAuthenticationRequest,

    /**
     * The PrepareAuthenticationResponse model constructor.
     * @property {module:model/PrepareAuthenticationResponse}
     */
    PrepareAuthenticationResponse,

    /**
     * The Roles model constructor.
     * @property {module:model/Roles}
     */
    Roles,

    /**
     * The RootAuthorizationData model constructor.
     * @property {module:model/RootAuthorizationData}
     */
    RootAuthorizationData,

    /**
     * The RootRoles model constructor.
     * @property {module:model/RootRoles}
     */
    RootRoles,

    /**
     * The SessionCompletionStatus model constructor.
     * @property {module:model/SessionCompletionStatus}
     */
    SessionCompletionStatus,

    /**
     * The SignatureAlgorithmAndValueModel model constructor.
     * @property {module:model/SignatureAlgorithmAndValueModel}
     */
    SignatureAlgorithmAndValueModel,

    /**
     * The SignatureAlgorithmIdentifier model constructor.
     * @property {module:model/SignatureAlgorithmIdentifier}
     */
    SignatureAlgorithmIdentifier,

    /**
     * The SignatureAlgorithms model constructor.
     * @property {module:model/SignatureAlgorithms}
     */
    SignatureAlgorithms,

    /**
     * The SignatureSessionDocumentData model constructor.
     * @property {module:model/SignatureSessionDocumentData}
     */
    SignatureSessionDocumentData,

    /**
     * The SignatureSessionDocumentSummary model constructor.
     * @property {module:model/SignatureSessionDocumentSummary}
     */
    SignatureSessionDocumentSummary,

    /**
     * The SignatureSessionModel model constructor.
     * @property {module:model/SignatureSessionModel}
     */
    SignatureSessionModel,

    /**
     * The SignatureSessionStatus model constructor.
     * @property {module:model/SignatureSessionStatus}
     */
    SignatureSessionStatus,

    /**
     * The SignatureTypes model constructor.
     * @property {module:model/SignatureTypes}
     */
    SignatureTypes,

    /**
     * The SignerModel model constructor.
     * @property {module:model/SignerModel}
     */
    SignerModel,

    /**
     * The SignerSummary model constructor.
     * @property {module:model/SignerSummary}
     */
    SignerSummary,

    /**
     * The SubscriptionAccessModel model constructor.
     * @property {module:model/SubscriptionAccessModel}
     */
    SubscriptionAccessModel,

    /**
     * The SubscriptionAccessModelRolesRootRolesApplicationModel model constructor.
     * @property {module:model/SubscriptionAccessModelRolesRootRolesApplicationModel}
     */
    SubscriptionAccessModelRolesRootRolesApplicationModel,

    /**
     * The SubscriptionAccessModelRolesRootRolesApplicationModelPaginatedSearchResponse model constructor.
     * @property {module:model/SubscriptionAccessModelRolesRootRolesApplicationModelPaginatedSearchResponse}
     */
    SubscriptionAccessModelRolesRootRolesApplicationModelPaginatedSearchResponse,

    /**
     * The ValidationItemModel model constructor.
     * @property {module:model/ValidationItemModel}
     */
    ValidationItemModel,

    /**
     * The ValidationItemTypes model constructor.
     * @property {module:model/ValidationItemTypes}
     */
    ValidationItemTypes,

    /**
     * The ValidationResultsModel model constructor.
     * @property {module:model/ValidationResultsModel}
     */
    ValidationResultsModel,

    /**
     * The WebhookEventModel model constructor.
     * @property {module:model/WebhookEventModel}
     */
    WebhookEventModel,

    /**
     * The WebhookEventTypes model constructor.
     * @property {module:model/WebhookEventTypes}
     */
    WebhookEventTypes,

    
    /**
    * The API key header.
    * @property {module:model/API_KEY_HEADER}
    */
     API_KEY_HEADER,

    /**
    * The ApplicationKeysController29Api service constructor.
    * @property {module:api/ApplicationKeysController29Api}
    */
    ApplicationKeysController29Api,

    /**
    * The ApplicationsApi service constructor.
    * @property {module:api/ApplicationsApi}
    */
    ApplicationsApi,

    /**
    * The ApplicationsController29Api service constructor.
    * @property {module:api/ApplicationsController29Api}
    */
    ApplicationsController29Api,

    /**
    * The AuthenticationApi service constructor.
    * @property {module:api/AuthenticationApi}
    */
    AuthenticationApi,

    /**
    * The CertificatesApi service constructor.
    * @property {module:api/CertificatesApi}
    */
    CertificatesApi,

    /**
    * The DocumentKeysApi service constructor.
    * @property {module:api/DocumentKeysApi}
    */
    DocumentKeysApi,

    /**
    * The DocumentsApi service constructor.
    * @property {module:api/DocumentsApi}
    */
    DocumentsApi,

    /**
    * The SignatureInspectionApi service constructor.
    * @property {module:api/SignatureInspectionApi}
    */
    SignatureInspectionApi,

    /**
    * The SignatureSessionsApi service constructor.
    * @property {module:api/SignatureSessionsApi}
    */
    SignatureSessionsApi
};
