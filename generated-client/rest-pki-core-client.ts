/**
 * REST PKI Core Client
 * 
 * A comprehensive client that aggregates all REST PKI Core APIs into a single,
 * easy-to-use client interface with full TypeScript support.
 * 
 * This client provides:
 * - Unified configuration and authentication
 * - Promise-based API with async/await support  
 * - Comprehensive error handling
 * - Type-safe method calls for all endpoints
 * - Convenience methods for common operations
 */

import {
    AllocateDocumentKeyBatchRequest,
    // Document Key Models
    AllocateDocumentKeyRequest,
    // API Classes
    AuthenticationApi,
    AuthenticationGetResponse,
    AuthenticationPostRequest,
    AuthenticationPostResponse,
    AuthenticationsPostRequest,
    AuthenticationsPostResponse,
    CadesSignatureApi,
    // CAdES Models
    CadesSignaturePostRequestV1,
    CadesSignaturePostRequestV2,
    CadesSignaturePostRequestV3,
    CadesSignaturePostResponse,
    CadesSignaturePostSignedBytesRequest,
    CadesSignaturePostSignedBytesResponse,
    CompleteSignatureRequest,
    CreateSignatureSessionRequest,
    CreateSignatureSessionResponse,
    DocumentKeyModel,
    DocumentKeysApi,
    DocumentKeySummary,
    // Common Models
    DocumentModel,
    DocumentsApi,
    // XML Models
    FullXmlSignaturePostRequest,
    // Inspection Models
    InspectSignatureRequest,
    InspectSignatureResponse,
    // Upload Models
    MultipartUploadBeginResponse,
    MultipartUploadEndRequest,
    PadesSignatureApi,
    // PAdES Models
    PadesSignaturePostRequestV1,
    PadesSignaturePostRequestV2,
    PadesSignaturePostResponse,
    PadesSignaturePostSignedBytesRequest,
    PadesSignaturePostSignedBytesResponse,
    // Positioning Models
    PadesVisualPositioningModel,
    PadesVisualPositioningPresetsApi,
    // PDF Models
    PdfAddMarksRequest,
    PdfAddMarksResponse,
    PdfApi,
    // Signature Models
    PrepareSignatureRequest,
    PrepareSignatureResponse,
    SignatureApi,
    SignatureInspectionApi,
    SignatureSessionModel,
    SignatureSessionsApi,
    StampPdfRequest,
    StampPdfResponse,
    TimestampApi,
    // Timestamp Models
    TimestampIssueResponse,
    UploadApi,
    XmlElementSignaturePostRequest,
    XmlSignatureApi,
    XmlSignaturePostResponse,
    XmlSignaturePostSignedBytesRequest,
    XmlSignaturePostSignedBytesResponse
} from './api';

// Additional imports for missing types
import { CompleteSignatureRequestV2 } from './model/completeSignatureRequestV2';
import { DocumentQueryResponse } from './model/documentQueryResponse';
import { SessionCompletionStatus } from './model/sessionCompletionStatus';

import http from 'http';

/**
 * Configuration interface for the REST PKI Core Client
 */
export interface RestPkiCoreClientConfig {
    /** REST PKI Core API endpoint URL */
    baseUrl: string;
    /** API key for authentication */
    apiKey: string;
    /** Custom headers to include in all requests */
    customHeaders?: { [key: string]: string };
    /** Request timeout in milliseconds */
    timeout?: number;
    /** Whether to ignore SSL certificate errors */
    ignoreSslErrors?: boolean;
}

/**
 * Response wrapper for all API calls
 */
export interface RestPkiCoreResponse<T = any> {
    /** HTTP status code */
    statusCode: number;
    /** Response headers */
    headers: { [name: string]: string };
    /** Response body */
    data: T;
    /** Original HTTP response object */
    response: http.IncomingMessage;
}

/**
 * Main Client Class
 * 
 * This class provides a unified interface to all REST PKI Core APIs.
 * All methods return promises and include proper error handling.
 */
export class RestPkiCoreClient {
    private config: RestPkiCoreClientConfig;
    
    // API instances
    private authenticationApi!: AuthenticationApi;
    private cadesSignatureApi!: CadesSignatureApi;
    private documentKeysApi!: DocumentKeysApi;
    private documentsApi!: DocumentsApi;
    private padesSignatureApi!: PadesSignatureApi;
    private padesVisualPositioningPresetsApi!: PadesVisualPositioningPresetsApi;
    private pdfApi!: PdfApi;
    private signatureApi!: SignatureApi;
    private signatureInspectionApi!: SignatureInspectionApi;
    private signatureSessionsApi!: SignatureSessionsApi;
    private timestampApi!: TimestampApi;
    private uploadApi!: UploadApi;
    private xmlSignatureApi!: XmlSignatureApi;

    constructor(config: RestPkiCoreClientConfig) {
        this.config = config;
        this.initializeApis();
    }

    private initializeApis(): void {
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
            (api as any).defaultHeaders = defaultHeaders;
        });
    }

    /**
     * Helper method to wrap API responses
     */
    private wrapResponse<T>(response: { response: http.IncomingMessage; body?: T }): RestPkiCoreResponse<T> {
        return {
            statusCode: response.response.statusCode || 200,
            headers: response.response.headers as { [name: string]: string },
            data: response.body as T,
            response: response.response
        };
    }

    // ========================================================================================
    // DOCUMENT MANAGEMENT METHODS
    // ========================================================================================

    /**
     * Retrieve document details by ID
     */
    async getDocument(documentId: string): Promise<RestPkiCoreResponse<DocumentModel>> {
        const result = await this.documentsApi.apiDocumentsIdGet(documentId);
        return this.wrapResponse(result);
    }

    /**
     * Get document signers
     */
    async getDocumentSigners(documentId: string): Promise<RestPkiCoreResponse<any[]>> {
        const result = await this.documentsApi.apiDocumentsIdSignersGet(documentId);
        return this.wrapResponse(result);
    }

    /**
     * Get document by key
     */
    async getDocumentByKey(key: string): Promise<RestPkiCoreResponse<DocumentQueryResponse>> {
        const result = await this.documentsApi.apiDocumentsKeysKeyGet(key);
        return this.wrapResponse(result);
    }

    // ========================================================================================
    // DOCUMENT KEY MANAGEMENT METHODS
    // ========================================================================================

    /**
     * Allocate a single document key
     */
    async allocateDocumentKey(request: AllocateDocumentKeyRequest): Promise<RestPkiCoreResponse<DocumentKeyModel>> {
        const result = await this.documentKeysApi.apiDocumentKeysPost(request);
        return this.wrapResponse(result);
    }

    /**
     * Allocate multiple document keys
     */
    async allocateDocumentKeyBatch(request: AllocateDocumentKeyBatchRequest): Promise<RestPkiCoreResponse<DocumentKeyModel[]>> {
        const result = await this.documentKeysApi.apiDocumentKeysBatchPost(request);
        return this.wrapResponse(result);
    }

    /**
     * Get document key details
     */
    async getDocumentKey(key: string): Promise<RestPkiCoreResponse<DocumentKeySummary>> {
        const result = await this.documentKeysApi.apiDocumentKeysKeyGet(key);
        return this.wrapResponse(result);
    }

    /**
     * Get unused document keys
     */
    async getUnusedDocumentKeys(): Promise<RestPkiCoreResponse<DocumentKeySummary[]>> {
        const result = await this.documentKeysApi.apiDocumentKeysUnusedGet();
        return this.wrapResponse(result);
    }

    // ========================================================================================
    // SIGNATURE SESSION METHODS
    // ========================================================================================

    /**
     * Create a new signature session
     */
    async createSignatureSession(request: CreateSignatureSessionRequest): Promise<RestPkiCoreResponse<CreateSignatureSessionResponse>> {
        const result = await this.signatureSessionsApi.apiSignatureSessionsPost(request);
        return this.wrapResponse(result);
    }

    /**
     * Get signature session details
     */
    async getSignatureSession(sessionId: string): Promise<RestPkiCoreResponse<SignatureSessionModel>> {
        const result = await this.signatureSessionsApi.apiSignatureSessionsIdGet(sessionId);
        return this.wrapResponse(result);
    }

    /**
     * Wait for signature session completion
     */
    async waitForSignatureSessionCompletion(sessionId: string): Promise<RestPkiCoreResponse<SessionCompletionStatus>> {
        const result = await this.signatureSessionsApi.apiSignatureSessionsIdWhenCompletedGet(sessionId);
        return this.wrapResponse(result);
    }

    // ========================================================================================
    // PADES (PDF) SIGNATURE METHODS
    // ========================================================================================

    /**
     * Create PAdES signature (V1)
     */
    async createPadesSignature(request: PadesSignaturePostRequestV1): Promise<RestPkiCoreResponse<PadesSignaturePostResponse>> {
        const result = await this.padesSignatureApi.apiPadesSignaturesPost(request);
        return this.wrapResponse(result);
    }

    /**
     * Create PAdES signature (V2)
     */
    async createPadesSignatureV2(request: PadesSignaturePostRequestV2): Promise<RestPkiCoreResponse<PadesSignaturePostResponse>> {
        const result = await this.padesSignatureApi.apiV2PadesSignaturesPost(request);
        return this.wrapResponse(result);
    }

    /**
     * Complete PAdES signature with signed bytes
     */
    async completePadesSignature(token: string, request: PadesSignaturePostSignedBytesRequest): Promise<RestPkiCoreResponse<PadesSignaturePostSignedBytesResponse>> {
        const result = await this.padesSignatureApi.apiPadesSignaturesTokenSignedBytesPost(token, request);
        return this.wrapResponse(result);
    }

    /**
     * Complete PAdES signature V2 with signed bytes
     */
    async completePadesSignatureV2(token: string, request: CompleteSignatureRequest): Promise<RestPkiCoreResponse<any>> {
        const result = await this.padesSignatureApi.apiV2PadesSignaturesTokenSignedBytesPost(token, request);
        return this.wrapResponse(result);
    }

    /**
     * Finalize PAdES signature
     */
    async finalizePadesSignature(token: string): Promise<RestPkiCoreResponse<PadesSignaturePostSignedBytesResponse>> {
        const result = await this.padesSignatureApi.apiPadesSignaturesTokenFinalizePost(token);
        return this.wrapResponse(result);
    }

    /**
     * Create open PAdES signature
     */
    async createOpenPadesSignature(request: any): Promise<RestPkiCoreResponse<any>> {
        const result = await this.padesSignatureApi.apiPadesSignaturesOpenPost(request);
        return this.wrapResponse(result);
    }

    // ========================================================================================
    // CADES SIGNATURE METHODS  
    // ========================================================================================

    /**
     * Create CAdES signature (V1)
     */
    async createCadesSignature(request: CadesSignaturePostRequestV1): Promise<RestPkiCoreResponse<CadesSignaturePostResponse>> {
        const result = await this.cadesSignatureApi.apiCadesSignaturesPost(request);
        return this.wrapResponse(result);
    }

    /**
     * Create CAdES signature (V2)
     */
    async createCadesSignatureV2(request: CadesSignaturePostRequestV2): Promise<RestPkiCoreResponse<CadesSignaturePostResponse>> {
        const result = await this.cadesSignatureApi.apiV2CadesSignaturesPost(request);
        return this.wrapResponse(result);
    }

    /**
     * Create CAdES signature (V3)
     */
    async createCadesSignatureV3(request: CadesSignaturePostRequestV3): Promise<RestPkiCoreResponse<CadesSignaturePostResponse>> {
        const result = await this.cadesSignatureApi.apiV3CadesSignaturesPost(request);
        return this.wrapResponse(result);
    }

    /**
     * Complete CAdES signature with signed bytes
     */
    async completeCadesSignature(token: string, request: CadesSignaturePostSignedBytesRequest): Promise<RestPkiCoreResponse<CadesSignaturePostSignedBytesResponse>> {
        const result = await this.cadesSignatureApi.apiCadesSignaturesTokenSignedBytesPost(token, request);
        return this.wrapResponse(result);
    }

    /**
     * Complete CAdES signature V2 with signed bytes
     */
    async completeCadesSignatureV2(token: string, request: CompleteSignatureRequest): Promise<RestPkiCoreResponse<any>> {
        const result = await this.cadesSignatureApi.apiV2CadesSignaturesTokenSignedBytesPost(token, request);
        return this.wrapResponse(result);
    }

    /**
     * Finalize CAdES signature
     */
    async finalizeCadesSignature(token: string): Promise<RestPkiCoreResponse<CadesSignaturePostSignedBytesResponse>> {
        const result = await this.cadesSignatureApi.apiCadesSignaturesTokenFinalizePost(token);
        return this.wrapResponse(result);
    }

    /**
     * Get required hashes for CAdES signature
     */
    async getCadesRequiredHashes(request: any): Promise<RestPkiCoreResponse<any>> {
        const result = await this.cadesSignatureApi.apiCadesSignaturesRequiredHashesPost(request);
        return this.wrapResponse(result);
    }

    /**
     * Create open CAdES signature
     */
    async createOpenCadesSignature(request: any): Promise<RestPkiCoreResponse<any>> {
        const result = await this.cadesSignatureApi.apiCadesSignaturesOpenPost(request);
        return this.wrapResponse(result);
    }

    // ========================================================================================
    // XML SIGNATURE METHODS
    // ========================================================================================

    /**
     * Create full XML signature
     */
    async createFullXmlSignature(request: FullXmlSignaturePostRequest): Promise<RestPkiCoreResponse<XmlSignaturePostResponse>> {
        const result = await this.xmlSignatureApi.apiXmlSignaturesFullXmlSignaturePost(request);
        return this.wrapResponse(result);
    }

    /**
     * Create XML element signature
     */
    async createXmlElementSignature(request: XmlElementSignaturePostRequest): Promise<RestPkiCoreResponse<XmlSignaturePostResponse>> {
        const result = await this.xmlSignatureApi.apiXmlSignaturesXmlElementSignaturePost(request);
        return this.wrapResponse(result);
    }

    /**
     * Complete XML signature with signed bytes
     */
    async completeXmlSignature(token: string, request: XmlSignaturePostSignedBytesRequest): Promise<RestPkiCoreResponse<XmlSignaturePostSignedBytesResponse>> {
        const result = await this.xmlSignatureApi.apiXmlSignaturesTokenSignedBytesPost(token, request);
        return this.wrapResponse(result);
    }

    /**
     * Finalize XML signature
     */
    async finalizeXmlSignature(token: string): Promise<RestPkiCoreResponse<XmlSignaturePostSignedBytesResponse>> {
        const result = await this.xmlSignatureApi.apiXmlSignaturesTokenFinalizePost(token);
        return this.wrapResponse(result);
    }

    /**
     * Create open XML signature
     */
    async createOpenXmlSignature(request: any): Promise<RestPkiCoreResponse<any>> {
        const result = await this.xmlSignatureApi.apiXmlSignaturesOpenPost(request);
        return this.wrapResponse(result);
    }

    /**
     * Create open XML signature V2
     */
    async createOpenXmlSignatureV2(request: any): Promise<RestPkiCoreResponse<any>> {
        const result = await this.xmlSignatureApi.apiV2XmlSignaturesOpenPost(request);
        return this.wrapResponse(result);
    }

    // ========================================================================================
    // AUTHENTICATION METHODS
    // ========================================================================================

    /**
     * Prepare authentication V2
     */
    async prepareAuthenticationV2(request: any): Promise<RestPkiCoreResponse<any>> {
        const result = await this.authenticationApi.apiV2AuthenticationPost(request);
        return this.wrapResponse(result);
    }

    /**
     * Complete authentication V2
     */
    async completeAuthenticationV2(request: any): Promise<RestPkiCoreResponse<any>> {
        const result = await this.authenticationApi.apiV2AuthenticationCompletionPost(request);
        return this.wrapResponse(result);
    }

    /**
     * Create authentication
     */
    async createAuthentication(request: AuthenticationsPostRequest): Promise<RestPkiCoreResponse<AuthenticationsPostResponse>> {
        const result = await this.authenticationApi.apiAuthenticationsPost(request);
        return this.wrapResponse(result);
    }

    /**
     * Complete authentication with signed bytes
     */
    async completeAuthentication(token: string, request: any): Promise<RestPkiCoreResponse<any>> {
        const result = await this.authenticationApi.apiAuthenticationsTokenSignedBytesPost(token, request);
        return this.wrapResponse(result);
    }

    /**
     * Finalize authentication
     */
    async finalizeAuthentication(token: string): Promise<RestPkiCoreResponse<any>> {
        const result = await this.authenticationApi.apiAuthenticationsTokenFinalizePost(token);
        return this.wrapResponse(result);
    }

    /**
     * Get authentication info
     */
    async getAuthentication(): Promise<RestPkiCoreResponse<AuthenticationGetResponse>> {
        const result = await this.authenticationApi.apiAuthenticationGet();
        return this.wrapResponse(result);
    }

    /**
     * Prepare authentication
     */
    async prepareAuthentication(request: AuthenticationPostRequest): Promise<RestPkiCoreResponse<AuthenticationPostResponse>> {
        const result = await this.authenticationApi.apiAuthenticationPost(request);
        return this.wrapResponse(result);
    }

    // ========================================================================================
    // PDF PROCESSING METHODS
    // ========================================================================================

    /**
     * Add marks to PDF
     */
    async addPdfMarks(request: PdfAddMarksRequest): Promise<RestPkiCoreResponse<PdfAddMarksResponse>> {
        const result = await this.pdfApi.apiPdfAddMarksPost(request);
        return this.wrapResponse(result);
    }

    /**
     * Stamp PDF
     */
    async stampPdf(request: StampPdfRequest): Promise<RestPkiCoreResponse<StampPdfResponse>> {
        const result = await this.pdfApi.apiPdfStampPost(request);
        return this.wrapResponse(result);
    }

    // ========================================================================================
    // VISUAL POSITIONING PRESET METHODS
    // ========================================================================================

    /**
     * Get footnote positioning preset
     */
    async getFootnotePreset(): Promise<RestPkiCoreResponse<PadesVisualPositioningModel>> {
        const result = await this.padesVisualPositioningPresetsApi.apiPadesVisualPositioningPresetsFootnoteGet();
        return this.wrapResponse(result);
    }

    /**
     * Get footnote bottom-up positioning preset
     */
    async getFootnoteBottomUpPreset(): Promise<RestPkiCoreResponse<PadesVisualPositioningModel>> {
        const result = await this.padesVisualPositioningPresetsApi.apiPadesVisualPositioningPresetsFootnoteBottomUpGet();
        return this.wrapResponse(result);
    }

    /**
     * Get new page positioning preset
     */
    async getNewPagePreset(): Promise<RestPkiCoreResponse<PadesVisualPositioningModel>> {
        const result = await this.padesVisualPositioningPresetsApi.apiPadesVisualPositioningPresetsNewPageGet();
        return this.wrapResponse(result);
    }

    // ========================================================================================
    // SIGNATURE INSPECTION METHODS
    // ========================================================================================

    /**
     * Inspect signature
     */
    async inspectSignature(request: InspectSignatureRequest): Promise<RestPkiCoreResponse<InspectSignatureResponse>> {
        const result = await this.signatureInspectionApi.apiSignatureInspectionPut(request);
        return this.wrapResponse(result);
    }

    // ========================================================================================
    // SIGNATURE METHODS
    // ========================================================================================

    /**
     * Prepare signature
     */
    async prepareSignature(request: PrepareSignatureRequest): Promise<RestPkiCoreResponse<PrepareSignatureResponse>> {
        const result = await this.signatureApi.apiSignaturePost(request);
        return this.wrapResponse(result);
    }

    /**
     * Complete signature
     */
    async completeSignature(request: CompleteSignatureRequestV2): Promise<RestPkiCoreResponse<DocumentModel>> {
        const result = await this.signatureApi.apiSignatureCompletionPost(request);
        return this.wrapResponse(result);
    }

    // ========================================================================================
    // TIMESTAMP METHODS
    // ========================================================================================

    /**
     * Issue timestamp
     */
    async issueTimestamp(identifier: string, request: any): Promise<RestPkiCoreResponse<TimestampIssueResponse>> {
        const result = await this.timestampApi.apiTimestampPlansIdentifierIssuePost(identifier, request);
        return this.wrapResponse(result);
    }

    /**
     * Create TSP timestamp
     */
    async createTspTimestamp(identifier: string, request: any): Promise<RestPkiCoreResponse<any>> {
        const result = await this.timestampApi.apiTspIdentifierPost(identifier, request);
        return this.wrapResponse(result);
    }

    // ========================================================================================
    // UPLOAD METHODS
    // ========================================================================================

    /**
     * Plain upload
     */
    async plainUpload(request: any): Promise<RestPkiCoreResponse<any>> {
        const result = await this.uploadApi.apiPlainUploadsPost(request);
        return this.wrapResponse(result);
    }

    /**
     * Begin multipart upload
     */
    async beginMultipartUpload(request: any): Promise<RestPkiCoreResponse<MultipartUploadBeginResponse>> {
        const result = await this.uploadApi.apiMultipartUploadsPost(request);
        return this.wrapResponse(result);
    }

    /**
     * Upload part
     */
    async uploadPart(token: string, partNumber: number, request: any): Promise<RestPkiCoreResponse<any>> {
        const result = await this.uploadApi.apiMultipartUploadsTokenPartNumberPost(token, partNumber, request);
        return this.wrapResponse(result);
    }

    /**
     * Complete multipart upload
     */
    async completeMultipartUpload(token: string, request: MultipartUploadEndRequest): Promise<RestPkiCoreResponse<any>> {
        const result = await this.uploadApi.apiMultipartUploadsTokenPost(token, request);
        return this.wrapResponse(result);
    }

    // ========================================================================================
    // CONVENIENCE METHODS
    // ========================================================================================

    /**
     * Update API configuration
     */
    updateConfig(newConfig: Partial<RestPkiCoreClientConfig>): void {
        this.config = { ...this.config, ...newConfig };
        this.initializeApis();
    }

    /**
     * Get current configuration (excluding API key for security)
     */
    getConfig(): Omit<RestPkiCoreClientConfig, 'apiKey'> {
        const { apiKey, ...configWithoutApiKey } = this.config;
        return configWithoutApiKey;
    }

    /**
     * Test API connectivity
     */
    async testConnection(): Promise<RestPkiCoreResponse<any>> {
        try {
            return await this.getAuthentication();
        } catch (error) {
            throw new Error(`API connection test failed: ${error}`);
        }
    }

    /**
     * Get direct access to underlying APIs (for advanced usage)
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
 */
export function createRestPkiCoreClient(config: RestPkiCoreClientConfig): RestPkiCoreClient {
    return new RestPkiCoreClient(config);
}

// Export all the models and types for convenience
export * from './api';

