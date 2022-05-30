export * from './applicationKeysController29Api';
import { ApplicationKeysController29Api } from './applicationKeysController29Api';
export * from './applicationsApi';
import { ApplicationsApi } from './applicationsApi';
export * from './applicationsController29Api';
import { ApplicationsController29Api } from './applicationsController29Api';
export * from './authenticationApi';
import { AuthenticationApi } from './authenticationApi';
export * from './certificatesApi';
import { CertificatesApi } from './certificatesApi';
export * from './documentKeysApi';
import { DocumentKeysApi } from './documentKeysApi';
export * from './documentsApi';
import { DocumentsApi } from './documentsApi';
export * from './signatureInspectionApi';
import { SignatureInspectionApi } from './signatureInspectionApi';
export * from './signatureSessionsApi';
import { SignatureSessionsApi } from './signatureSessionsApi';
import * as http from 'http';

export class HttpError extends Error {
    constructor (public response: http.IncomingMessage, public body: any, public statusCode?: number) {
        super('HTTP request failed');
        this.name = 'HttpError';
    }
}

export { RequestFile } from '../model/models';

export const APIS = [ApplicationKeysController29Api, ApplicationsApi, ApplicationsController29Api, AuthenticationApi, CertificatesApi, DocumentKeysApi, DocumentsApi, SignatureInspectionApi, SignatureSessionsApi];
