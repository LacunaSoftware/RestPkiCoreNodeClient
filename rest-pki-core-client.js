/**
 * REST PKI Core Client (JavaScript Version)
 * 
 * A comprehensive client that aggregates all REST PKI Core APIs into a single,
 * easy-to-use JavaScript client interface.
 * 
 * This client provides:
 * - Unified configuration and authentication
 * - Promise-based API with async/await support  
 * - Comprehensive error handling
 * - All REST PKI Core endpoints
 * - Convenience methods for common operations
 */

const {
    // API Classes
    AuthenticationApi,
    CadesSignatureApi,
    DocumentKeysApi,
    DocumentsApi,
    PadesSignatureApi,
    PadesVisualPositioningPresetsApi,
    PdfApi,
    SignatureApi,
    SignatureInspectionApi,
    SignatureSessionsApi,
    TimestampApi,
    UploadApi,
    XmlSignatureApi
} = require('./api');

/**
 * Main Client Class
 * 
 * @class RestPkiCoreClient
 * @example
 * const client = new RestPkiCoreClient({
 *   baseUrl: 'https://homolog.core.pki.rest',
 *   apiKey: 'your-api-key-here'
 * });
 * 
 * const document = await client.getDocument('document-id');
 */
class RestPkiCoreClient {
    /**
     * @param {Object} config - Configuration object
     * @param {string} config.baseUrl - REST PKI Core API endpoint URL
     * @param {string} config.apiKey - API key for authentication
     * @param {Object} [config.customHeaders] - Custom headers to include in all requests
     * @param {number} [config.timeout] - Request timeout in milliseconds
     * @param {boolean} [config.ignoreSslErrors] - Whether to ignore SSL certificate errors
     */
    constructor(config) {
        this.config = config;
        this.initializeApis();
    }

    initializeApis() {
        const defaultHeaders = {
            'X-Api-Key': this.config.apiKey,
            'Content-Type': 'application/json',
            ...this.config.customHeaders
        };

        // Initialize all API instances
        this.authenticationApi = new AuthenticationApi(this.config.baseUrl);
        this.cadesSignatureApi = new CadesSignatureApi(this.config.baseUrl);
        this.documentKeysApi = new DocumentKeysApi(this.config.baseUrl);
        this.documentsApi = new DocumentsApi(this.config.baseUrl);
        this.padesSignatureApi = new PadesSignatureApi(this.config.baseUrl);
        this.padesVisualPositioningPresetsApi = new PadesVisualPositioningPresetsApi(this.config.baseUrl);
        this.pdfApi = new PdfApi(this.config.baseUrl);
        this.signatureApi = new SignatureApi(this.config.baseUrl);
        this.signatureInspectionApi = new SignatureInspectionApi(this.config.baseUrl);
        this.signatureSessionsApi = new SignatureSessionsApi(this.config.baseUrl);
        this.timestampApi = new TimestampApi(this.config.baseUrl);
        this.uploadApi = new UploadApi(this.config.baseUrl);
        this.xmlSignatureApi = new XmlSignatureApi(this.config.baseUrl);

        // Set default headers for all APIs
        const apis = [
            this.authenticationApi, this.cadesSignatureApi, this.documentKeysApi,
            this.documentsApi, this.padesSignatureApi, this.padesVisualPositioningPresetsApi,
            this.pdfApi, this.signatureApi, this.signatureInspectionApi,
            this.signatureSessionsApi, this.timestampApi, this.uploadApi, this.xmlSignatureApi
        ];

        apis.forEach(api => {
            api.defaultHeaders = defaultHeaders;
        });
    }

    /**
     * Helper method to wrap API responses
     * @private
     */
    wrapResponse(response) {
        return {
            statusCode: response.response.statusCode || 200,
            headers: response.response.headers || {},
            data: response.body,
            response: response.response
        };
    }

    // ========================================================================================
    // DOCUMENT MANAGEMENT METHODS
    // ========================================================================================

    /**
     * Retrieve document details by ID
     * @param {string} documentId - Document ID
     * @returns {Promise<Object>} Document details
     */
    async getDocument(documentId) {
        const result = await this.documentsApi.apiDocumentsIdGet(documentId);
        return this.wrapResponse(result);
    }

    /**
     * Get document signers
     * @param {string} documentId - Document ID
     * @returns {Promise<Object>} Document signers
     */
    async getDocumentSigners(documentId) {
        const result = await this.documentsApi.apiDocumentsIdSignersGet(documentId);
        return this.wrapResponse(result);
    }

    /**
     * Get document by key
     * @param {string} key - Document key
     * @returns {Promise<Object>} Document details
     */
    async getDocumentByKey(key) {
        const result = await this.documentsApi.apiDocumentsKeysKeyGet(key);
        return this.wrapResponse(result);
    }

    // ========================================================================================
    // DOCUMENT KEY MANAGEMENT METHODS
    // ========================================================================================

    /**
     * Allocate a single document key
     * @param {Object} request - Allocation request
     * @returns {Promise<Object>} Document key
     */
    async allocateDocumentKey(request) {
        const result = await this.documentKeysApi.apiDocumentKeysPost(request);
        return this.wrapResponse(result);
    }

    /**
     * Allocate multiple document keys
     * @param {Object} request - Batch allocation request
     * @returns {Promise<Object>} Document keys
     */
    async allocateDocumentKeyBatch(request) {
        const result = await this.documentKeysApi.apiDocumentKeysBatchPost(request);
        return this.wrapResponse(result);
    }

    /**
     * Get document key details
     * @param {string} key - Document key
     * @returns {Promise<Object>} Key details
     */
    async getDocumentKey(key) {
        const result = await this.documentKeysApi.apiDocumentKeysKeyGet(key);
        return this.wrapResponse(result);
    }

    /**
     * Get unused document keys
     * @returns {Promise<Object>} Unused keys
     */
    async getUnusedDocumentKeys() {
        const result = await this.documentKeysApi.apiDocumentKeysUnusedGet();
        return this.wrapResponse(result);
    }

    // ========================================================================================
    // SIGNATURE SESSION METHODS
    // ========================================================================================

    /**
     * Create a new signature session
     * @param {Object} request - Signature session request
     * @returns {Promise<Object>} Signature session
     */
    async createSignatureSession(request) {
        const result = await this.signatureSessionsApi.apiSignatureSessionsPost(request);
        return this.wrapResponse(result);
    }

    /**
     * Get signature session details
     * @param {string} sessionId - Session ID
     * @returns {Promise<Object>} Session details
     */
    async getSignatureSession(sessionId) {
        const result = await this.signatureSessionsApi.apiSignatureSessionsIdGet(sessionId);
        return this.wrapResponse(result);
    }

    /**
     * Wait for signature session completion
     * @param {string} sessionId - Session ID
     * @returns {Promise<Object>} Completed session
     */
    async waitForSignatureSessionCompletion(sessionId) {
        const result = await this.signatureSessionsApi.apiSignatureSessionsIdWhenCompletedGet(sessionId);
        return this.wrapResponse(result);
    }

    // ========================================================================================
    // PADES (PDF) SIGNATURE METHODS
    // ========================================================================================

    /**
     * Create PAdES signature (V1)
     * @param {Object} request - PAdES signature request
     * @returns {Promise<Object>} Signature response
     */
    async createPadesSignature(request) {
        const result = await this.padesSignatureApi.apiPadesSignaturesPost(request);
        return this.wrapResponse(result);
    }

    /**
     * Create PAdES signature (V2)
     * @param {Object} request - PAdES signature request V2
     * @returns {Promise<Object>} Signature response
     */
    async createPadesSignatureV2(request) {
        const result = await this.padesSignatureApi.apiV2PadesSignaturesPost(request);
        return this.wrapResponse(result);
    }

    /**
     * Complete PAdES signature with signed bytes
     * @param {string} token - Signature token
     * @param {Object} request - Signed bytes request
     * @returns {Promise<Object>} Completion response
     */
    async completePadesSignature(token, request) {
        const result = await this.padesSignatureApi.apiPadesSignaturesTokenSignedBytesPost(token, request);
        return this.wrapResponse(result);
    }

    /**
     * Complete PAdES signature V2 with signed bytes
     * @param {string} token - Signature token
     * @param {Object} request - Complete signature request
     * @returns {Promise<Object>} Completion response
     */
    async completePadesSignatureV2(token, request) {
        const result = await this.padesSignatureApi.apiV2PadesSignaturesTokenSignedBytesPost(token, request);
        return this.wrapResponse(result);
    }

    /**
     * Finalize PAdES signature
     * @param {string} token - Signature token
     * @returns {Promise<Object>} Finalization response
     */
    async finalizePadesSignature(token) {
        const result = await this.padesSignatureApi.apiPadesSignaturesTokenFinalizePost(token);
        return this.wrapResponse(result);
    }

    /**
     * Create open PAdES signature
     * @param {Object} request - Open signature request
     * @returns {Promise<Object>} Signature response
     */
    async createOpenPadesSignature(request) {
        const result = await this.padesSignatureApi.apiPadesSignaturesOpenPost(request);
        return this.wrapResponse(result);
    }

    // ========================================================================================
    // CADES SIGNATURE METHODS  
    // ========================================================================================

    /**
     * Create CAdES signature (V1)
     * @param {Object} request - CAdES signature request
     * @returns {Promise<Object>} Signature response
     */
    async createCadesSignature(request) {
        const result = await this.cadesSignatureApi.apiCadesSignaturesPost(request);
        return this.wrapResponse(result);
    }

    /**
     * Create CAdES signature (V2)
     * @param {Object} request - CAdES signature request V2
     * @returns {Promise<Object>} Signature response
     */
    async createCadesSignatureV2(request) {
        const result = await this.cadesSignatureApi.apiV2CadesSignaturesPost(request);
        return this.wrapResponse(result);
    }

    /**
     * Create CAdES signature (V3)
     * @param {Object} request - CAdES signature request V3
     * @returns {Promise<Object>} Signature response
     */
    async createCadesSignatureV3(request) {
        const result = await this.cadesSignatureApi.apiV3CadesSignaturesPost(request);
        return this.wrapResponse(result);
    }

    /**
     * Complete CAdES signature with signed bytes
     * @param {string} token - Signature token
     * @param {Object} request - Signed bytes request
     * @returns {Promise<Object>} Completion response
     */
    async completeCadesSignature(token, request) {
        const result = await this.cadesSignatureApi.apiCadesSignaturesTokenSignedBytesPost(token, request);
        return this.wrapResponse(result);
    }

    /**
     * Complete CAdES signature V2 with signed bytes
     * @param {string} token - Signature token
     * @param {Object} request - Complete signature request
     * @returns {Promise<Object>} Completion response
     */
    async completeCadesSignatureV2(token, request) {
        const result = await this.cadesSignatureApi.apiV2CadesSignaturesTokenSignedBytesPost(token, request);
        return this.wrapResponse(result);
    }

    /**
     * Finalize CAdES signature
     * @param {string} token - Signature token
     * @returns {Promise<Object>} Finalization response
     */
    async finalizeCadesSignature(token) {
        const result = await this.cadesSignatureApi.apiCadesSignaturesTokenFinalizePost(token);
        return this.wrapResponse(result);
    }

    /**
     * Get required hashes for CAdES signature
     * @param {Object} request - Hash request
     * @returns {Promise<Object>} Required hashes
     */
    async getCadesRequiredHashes(request) {
        const result = await this.cadesSignatureApi.apiCadesSignaturesRequiredHashesPost(request);
        return this.wrapResponse(result);
    }

    /**
     * Create open CAdES signature
     * @param {Object} request - Open signature request
     * @returns {Promise<Object>} Signature response
     */
    async createOpenCadesSignature(request) {
        const result = await this.cadesSignatureApi.apiCadesSignaturesOpenPost(request);
        return this.wrapResponse(result);
    }

    // ========================================================================================
    // XML SIGNATURE METHODS
    // ========================================================================================

    /**
     * Create full XML signature
     * @param {Object} request - Full XML signature request
     * @returns {Promise<Object>} Signature response
     */
    async createFullXmlSignature(request) {
        const result = await this.xmlSignatureApi.apiXmlSignaturesFullXmlSignaturePost(request);
        return this.wrapResponse(result);
    }

    /**
     * Create XML element signature
     * @param {Object} request - XML element signature request
     * @returns {Promise<Object>} Signature response
     */
    async createXmlElementSignature(request) {
        const result = await this.xmlSignatureApi.apiXmlSignaturesXmlElementSignaturePost(request);
        return this.wrapResponse(result);
    }

    /**
     * Complete XML signature with signed bytes
     * @param {string} token - Signature token
     * @param {Object} request - Signed bytes request
     * @returns {Promise<Object>} Completion response
     */
    async completeXmlSignature(token, request) {
        const result = await this.xmlSignatureApi.apiXmlSignaturesTokenSignedBytesPost(token, request);
        return this.wrapResponse(result);
    }

    /**
     * Finalize XML signature
     * @param {string} token - Signature token
     * @returns {Promise<Object>} Finalization response
     */
    async finalizeXmlSignature(token) {
        const result = await this.xmlSignatureApi.apiXmlSignaturesTokenFinalizePost(token);
        return this.wrapResponse(result);
    }

    /**
     * Create open XML signature
     * @param {Object} request - Open signature request
     * @returns {Promise<Object>} Signature response
     */
    async createOpenXmlSignature(request) {
        const result = await this.xmlSignatureApi.apiXmlSignaturesOpenPost(request);
        return this.wrapResponse(result);
    }

    /**
     * Create open XML signature V2
     * @param {Object} request - Open signature request V2
     * @returns {Promise<Object>} Signature response
     */
    async createOpenXmlSignatureV2(request) {
        const result = await this.xmlSignatureApi.apiV2XmlSignaturesOpenPost(request);
        return this.wrapResponse(result);
    }

    // ========================================================================================
    // AUTHENTICATION METHODS
    // ========================================================================================

    /**
     * Prepare authentication V2
     * @param {Object} request - Authentication request
     * @returns {Promise<Object>} Authentication response
     */
    async prepareAuthenticationV2(request) {
        const result = await this.authenticationApi.apiV2AuthenticationPost(request);
        return this.wrapResponse(result);
    }

    /**
     * Complete authentication V2
     * @param {Object} request - Completion request
     * @returns {Promise<Object>} Completion response
     */
    async completeAuthenticationV2(request) {
        const result = await this.authenticationApi.apiV2AuthenticationCompletionPost(request);
        return this.wrapResponse(result);
    }

    /**
     * Create authentication
     * @param {Object} request - Authentication request
     * @returns {Promise<Object>} Authentication response
     */
    async createAuthentication(request) {
        const result = await this.authenticationApi.apiAuthenticationsPost(request);
        return this.wrapResponse(result);
    }

    /**
     * Complete authentication with signed bytes
     * @param {string} token - Authentication token
     * @param {Object} request - Signed bytes request
     * @returns {Promise<Object>} Completion response
     */
    async completeAuthentication(token, request) {
        const result = await this.authenticationApi.apiAuthenticationsTokenSignedBytesPost(token, request);
        return this.wrapResponse(result);
    }

    /**
     * Finalize authentication
     * @param {string} token - Authentication token
     * @returns {Promise<Object>} Finalization response
     */
    async finalizeAuthentication(token) {
        const result = await this.authenticationApi.apiAuthenticationsTokenFinalizePost(token);
        return this.wrapResponse(result);
    }

    /**
     * Get authentication info
     * @returns {Promise<Object>} Authentication info
     */
    async getAuthentication() {
        const result = await this.authenticationApi.apiAuthenticationGet();
        return this.wrapResponse(result);
    }

    /**
     * Prepare authentication
     * @param {Object} request - Authentication request
     * @returns {Promise<Object>} Authentication response
     */
    async prepareAuthentication(request) {
        const result = await this.authenticationApi.apiAuthenticationPost(request);
        return this.wrapResponse(result);
    }

    // ========================================================================================
    // PDF PROCESSING METHODS
    // ========================================================================================

    /**
     * Add marks to PDF
     * @param {Object} request - PDF marks request
     * @returns {Promise<Object>} PDF marks response
     */
    async addPdfMarks(request) {
        const result = await this.pdfApi.apiPdfAddMarksPost(request);
        return this.wrapResponse(result);
    }

    /**
     * Stamp PDF
     * @param {Object} request - PDF stamp request
     * @returns {Promise<Object>} PDF stamp response
     */
    async stampPdf(request) {
        const result = await this.pdfApi.apiPdfStampPost(request);
        return this.wrapResponse(result);
    }

    // ========================================================================================
    // VISUAL POSITIONING PRESET METHODS
    // ========================================================================================

    /**
     * Get footnote positioning preset
     * @returns {Promise<Object>} Footnote preset
     */
    async getFootnotePreset() {
        const result = await this.padesVisualPositioningPresetsApi.apiPadesVisualPositioningPresetsFootnoteGet();
        return this.wrapResponse(result);
    }

    /**
     * Get footnote bottom-up positioning preset
     * @returns {Promise<Object>} Footnote bottom-up preset
     */
    async getFootnoteBottomUpPreset() {
        const result = await this.padesVisualPositioningPresetsApi.apiPadesVisualPositioningPresetsFootnoteBottomUpGet();
        return this.wrapResponse(result);
    }

    /**
     * Get new page positioning preset
     * @returns {Promise<Object>} New page preset
     */
    async getNewPagePreset() {
        const result = await this.padesVisualPositioningPresetsApi.apiPadesVisualPositioningPresetsNewPageGet();
        return this.wrapResponse(result);
    }

    // ========================================================================================
    // SIGNATURE INSPECTION METHODS
    // ========================================================================================

    /**
     * Inspect signature
     * @param {Object} request - Inspection request
     * @returns {Promise<Object>} Inspection response
     */
    async inspectSignature(request) {
        const result = await this.signatureInspectionApi.apiSignatureInspectionPut(request);
        return this.wrapResponse(result);
    }

    // ========================================================================================
    // SIGNATURE METHODS
    // ========================================================================================

    /**
     * Prepare signature
     * @param {Object} request - Signature request
     * @returns {Promise<Object>} Signature response
     */
    async prepareSignature(request) {
        const result = await this.signatureApi.apiSignaturePost(request);
        return this.wrapResponse(result);
    }

    /**
     * Complete signature
     * @param {Object} request - Completion request
     * @returns {Promise<Object>} Completion response
     */
    async completeSignature(request) {
        const result = await this.signatureApi.apiSignatureCompletionPost(request);
        return this.wrapResponse(result);
    }

    // ========================================================================================
    // TIMESTAMP METHODS
    // ========================================================================================

    /**
     * Issue timestamp
     * @param {string} identifier - Timestamp plan identifier
     * @param {Object} request - Timestamp request
     * @returns {Promise<Object>} Timestamp response
     */
    async issueTimestamp(identifier, request) {
        const result = await this.timestampApi.apiTimestampPlansIdentifierIssuePost(identifier, request);
        return this.wrapResponse(result);
    }

    /**
     * Create TSP timestamp
     * @param {string} identifier - TSP identifier
     * @param {Object} request - TSP request
     * @returns {Promise<Object>} TSP response
     */
    async createTspTimestamp(identifier, request) {
        const result = await this.timestampApi.apiTspIdentifierPost(identifier, request);
        return this.wrapResponse(result);
    }

    // ========================================================================================
    // UPLOAD METHODS
    // ========================================================================================

    /**
     * Plain upload
     * @param {Object} request - Upload request
     * @returns {Promise<Object>} Upload response
     */
    async plainUpload(request) {
        const result = await this.uploadApi.apiPlainUploadsPost(request);
        return this.wrapResponse(result);
    }

    /**
     * Begin multipart upload
     * @param {Object} request - Multipart upload request
     * @returns {Promise<Object>} Upload response
     */
    async beginMultipartUpload(request) {
        const result = await this.uploadApi.apiMultipartUploadsPost(request);
        return this.wrapResponse(result);
    }

    /**
     * Upload part
     * @param {string} token - Upload token
     * @param {number} partNumber - Part number
     * @param {Object} request - Part upload request
     * @returns {Promise<Object>} Part upload response
     */
    async uploadPart(token, partNumber, request) {
        const result = await this.uploadApi.apiMultipartUploadsTokenPartNumberPost(token, partNumber, request);
        return this.wrapResponse(result);
    }

    /**
     * Complete multipart upload
     * @param {string} token - Upload token
     * @param {Object} request - Completion request
     * @returns {Promise<Object>} Completion response
     */
    async completeMultipartUpload(token, request) {
        const result = await this.uploadApi.apiMultipartUploadsTokenPost(token, request);
        return this.wrapResponse(result);
    }

    // ========================================================================================
    // CONVENIENCE METHODS
    // ========================================================================================

    /**
     * Update API configuration
     * @param {Object} newConfig - New configuration
     */
    updateConfig(newConfig) {
        this.config = { ...this.config, ...newConfig };
        this.initializeApis();
    }

    /**
     * Get current configuration (excluding API key for security)
     * @returns {Object} Configuration object
     */
    getConfig() {
        const { apiKey, ...configWithoutApiKey } = this.config;
        return configWithoutApiKey;
    }

    /**
     * Test API connectivity
     * @returns {Promise<Object>} Connection test result
     */
    async testConnection() {
        try {
            return await this.getAuthentication();
        } catch (error) {
            throw new Error(`API connection test failed: ${error.message}`);
        }
    }

    /**
     * Get direct access to underlying APIs (for advanced usage)
     * @returns {Object} All API instances
     */
    getApis() {
        return {
            authentication: this.authenticationApi,
            cadesSignature: this.cadesSignatureApi,
            documentKeys: this.documentKeysApi,
            documents: this.documentsApi,
            padesSignature: this.padesSignatureApi,
            padesVisualPositioningPresets: this.padesVisualPositioningPresetsApi,
            pdf: this.pdfApi,
            signature: this.signatureApi,
            signatureInspection: this.signatureInspectionApi,
            signatureSessions: this.signatureSessionsApi,
            timestamp: this.timestampApi,
            upload: this.uploadApi,
            xmlSignature: this.xmlSignatureApi
        };
    }
}

/**
 * Factory function to create a new REST PKI Core Client
 * @param {Object} config - Configuration object
 * @returns {RestPkiCoreClient} New client instance
 */
function createRestPkiCoreClient(config) {
    return new RestPkiCoreClient(config);
}

module.exports = {
    RestPkiCoreClient,
    createRestPkiCoreClient
}; 