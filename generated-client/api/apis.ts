export * from './authenticationApi';
import { AuthenticationApi } from './authenticationApi';
export * from './cadesSignatureApi';
import { CadesSignatureApi } from './cadesSignatureApi';
export * from './documentKeysApi';
import { DocumentKeysApi } from './documentKeysApi';
export * from './documentsApi';
import { DocumentsApi } from './documentsApi';
export * from './padesSignatureApi';
import { PadesSignatureApi } from './padesSignatureApi';
export * from './padesVisualPositioningPresetsApi';
import { PadesVisualPositioningPresetsApi } from './padesVisualPositioningPresetsApi';
export * from './pdfApi';
import { PdfApi } from './pdfApi';
export * from './signatureApi';
import { SignatureApi } from './signatureApi';
export * from './signatureInspectionApi';
import { SignatureInspectionApi } from './signatureInspectionApi';
export * from './signatureSessionsApi';
import { SignatureSessionsApi } from './signatureSessionsApi';
export * from './timestampApi';
import { TimestampApi } from './timestampApi';
export * from './uploadApi';
import { UploadApi } from './uploadApi';
export * from './xmlSignatureApi';
import { XmlSignatureApi } from './xmlSignatureApi';
import * as http from 'http';

export class HttpError extends Error {
    constructor (public response: http.IncomingMessage, public body: any, public statusCode?: number) {
        super('HTTP request failed');
        this.name = 'HttpError';
    }
}

export { RequestFile } from '../model/models';

export const APIS = [AuthenticationApi, CadesSignatureApi, DocumentKeysApi, DocumentsApi, PadesSignatureApi, PadesVisualPositioningPresetsApi, PdfApi, SignatureApi, SignatureInspectionApi, SignatureSessionsApi, TimestampApi, UploadApi, XmlSignatureApi];
