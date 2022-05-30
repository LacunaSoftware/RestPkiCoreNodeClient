import localVarRequest from 'request';

export * from './allocateDocumentKeyBatchRequest';
export * from './allocateDocumentKeyRequest';
export * from './applicationKeyModel';
export * from './applicationKeyTypes';
export * from './authenticationFailures';
export * from './authorizationData';
export * from './authorizationDataRootAuthorizationDataRolesRootRolesApplicationData';
export * from './certificateFullModel';
export * from './certificateModel';
export * from './certificateRequirement';
export * from './certificateRequirementTypes';
export * from './certificateSummary';
export * from './cmsSignatureOptions';
export * from './completeAuthenticationRequest';
export * from './completeAuthenticationResponse';
export * from './createApplicationApiKeyRequest';
export * from './createApplicationApiKeyResponse';
export * from './createSignatureSessionRequest';
export * from './createSignatureSessionResponse';
export * from './digestAlgorithmAndValueModel';
export * from './digestAlgorithms';
export * from './documentFileModel';
export * from './documentKeyModel';
export * from './documentKeyQueryResponse';
export * from './documentKeySummary';
export * from './documentModel';
export * from './documentQueryResponse';
export * from './documentStatus';
export * from './documentSummary';
export * from './errorModelV2';
export * from './fileReferenceModel';
export * from './inspectSignatureFailures';
export * from './inspectSignatureRequest';
export * from './inspectSignatureResponse';
export * from './nameModel';
export * from './paginationOrders';
export * from './pkiBrazilCertificateModel';
export * from './pkiBrazilCertificateTypes';
export * from './pkiItalyCertificateModel';
export * from './pkiItalyCertificateTypes';
export * from './prepareAuthenticationRequest';
export * from './prepareAuthenticationResponse';
export * from './roles';
export * from './rootAuthorizationData';
export * from './rootRoles';
export * from './sessionCompletionStatus';
export * from './signatureAlgorithmAndValueModel';
export * from './signatureAlgorithmIdentifier';
export * from './signatureAlgorithms';
export * from './signatureSessionDocumentData';
export * from './signatureSessionDocumentSummary';
export * from './signatureSessionModel';
export * from './signatureSessionStatus';
export * from './signatureTypes';
export * from './signerModel';
export * from './signerSummary';
export * from './subscriptionAccessModel';
export * from './subscriptionAccessModelRolesRootRolesApplicationModel';
export * from './subscriptionAccessModelRolesRootRolesApplicationModelPaginatedSearchResponse';
export * from './validationItemModel';
export * from './validationItemTypes';
export * from './validationResultsModel';
export * from './webhookEventModel';
export * from './webhookEventTypes';

import * as fs from 'fs';

export interface RequestDetailedFile {
    value: Buffer;
    options?: {
        filename?: string;
        contentType?: string;
    }
}

export type RequestFile = string | Buffer | fs.ReadStream | RequestDetailedFile;


import { AllocateDocumentKeyBatchRequest } from './allocateDocumentKeyBatchRequest';
import { AllocateDocumentKeyRequest } from './allocateDocumentKeyRequest';
import { ApplicationKeyModel } from './applicationKeyModel';
import { ApplicationKeyTypes } from './applicationKeyTypes';
import { AuthenticationFailures } from './authenticationFailures';
import { AuthorizationData } from './authorizationData';
import { AuthorizationDataRootAuthorizationDataRolesRootRolesApplicationData } from './authorizationDataRootAuthorizationDataRolesRootRolesApplicationData';
import { CertificateFullModel } from './certificateFullModel';
import { CertificateModel } from './certificateModel';
import { CertificateRequirement } from './certificateRequirement';
import { CertificateRequirementTypes } from './certificateRequirementTypes';
import { CertificateSummary } from './certificateSummary';
import { CmsSignatureOptions } from './cmsSignatureOptions';
import { CompleteAuthenticationRequest } from './completeAuthenticationRequest';
import { CompleteAuthenticationResponse } from './completeAuthenticationResponse';
import { CreateApplicationApiKeyRequest } from './createApplicationApiKeyRequest';
import { CreateApplicationApiKeyResponse } from './createApplicationApiKeyResponse';
import { CreateSignatureSessionRequest } from './createSignatureSessionRequest';
import { CreateSignatureSessionResponse } from './createSignatureSessionResponse';
import { DigestAlgorithmAndValueModel } from './digestAlgorithmAndValueModel';
import { DigestAlgorithms } from './digestAlgorithms';
import { DocumentFileModel } from './documentFileModel';
import { DocumentKeyModel } from './documentKeyModel';
import { DocumentKeyQueryResponse } from './documentKeyQueryResponse';
import { DocumentKeySummary } from './documentKeySummary';
import { DocumentModel } from './documentModel';
import { DocumentQueryResponse } from './documentQueryResponse';
import { DocumentStatus } from './documentStatus';
import { DocumentSummary } from './documentSummary';
import { ErrorModelV2 } from './errorModelV2';
import { FileReferenceModel } from './fileReferenceModel';
import { InspectSignatureFailures } from './inspectSignatureFailures';
import { InspectSignatureRequest } from './inspectSignatureRequest';
import { InspectSignatureResponse } from './inspectSignatureResponse';
import { NameModel } from './nameModel';
import { PaginationOrders } from './paginationOrders';
import { PkiBrazilCertificateModel } from './pkiBrazilCertificateModel';
import { PkiBrazilCertificateTypes } from './pkiBrazilCertificateTypes';
import { PkiItalyCertificateModel } from './pkiItalyCertificateModel';
import { PkiItalyCertificateTypes } from './pkiItalyCertificateTypes';
import { PrepareAuthenticationRequest } from './prepareAuthenticationRequest';
import { PrepareAuthenticationResponse } from './prepareAuthenticationResponse';
import { Roles } from './roles';
import { RootAuthorizationData } from './rootAuthorizationData';
import { RootRoles } from './rootRoles';
import { SessionCompletionStatus } from './sessionCompletionStatus';
import { SignatureAlgorithmAndValueModel } from './signatureAlgorithmAndValueModel';
import { SignatureAlgorithmIdentifier } from './signatureAlgorithmIdentifier';
import { SignatureAlgorithms } from './signatureAlgorithms';
import { SignatureSessionDocumentData } from './signatureSessionDocumentData';
import { SignatureSessionDocumentSummary } from './signatureSessionDocumentSummary';
import { SignatureSessionModel } from './signatureSessionModel';
import { SignatureSessionStatus } from './signatureSessionStatus';
import { SignatureTypes } from './signatureTypes';
import { SignerModel } from './signerModel';
import { SignerSummary } from './signerSummary';
import { SubscriptionAccessModel } from './subscriptionAccessModel';
import { SubscriptionAccessModelRolesRootRolesApplicationModel } from './subscriptionAccessModelRolesRootRolesApplicationModel';
import { SubscriptionAccessModelRolesRootRolesApplicationModelPaginatedSearchResponse } from './subscriptionAccessModelRolesRootRolesApplicationModelPaginatedSearchResponse';
import { ValidationItemModel } from './validationItemModel';
import { ValidationItemTypes } from './validationItemTypes';
import { ValidationResultsModel } from './validationResultsModel';
import { WebhookEventModel } from './webhookEventModel';
import { WebhookEventTypes } from './webhookEventTypes';

/* tslint:disable:no-unused-variable */
let primitives = [
                    "string",
                    "boolean",
                    "double",
                    "integer",
                    "long",
                    "float",
                    "number",
                    "any"
                 ];

let enumsMap: {[index: string]: any} = {
        "ApplicationKeyTypes": ApplicationKeyTypes,
        "AuthenticationFailures": AuthenticationFailures,
        "CertificateRequirementTypes": CertificateRequirementTypes,
        "DigestAlgorithms": DigestAlgorithms,
        "DocumentStatus": DocumentStatus,
        "InspectSignatureFailures": InspectSignatureFailures,
        "PaginationOrders": PaginationOrders,
        "PkiBrazilCertificateTypes": PkiBrazilCertificateTypes,
        "PkiItalyCertificateTypes": PkiItalyCertificateTypes,
        "Roles": Roles,
        "RootRoles": RootRoles,
        "SignatureAlgorithms": SignatureAlgorithms,
        "SignatureSessionStatus": SignatureSessionStatus,
        "SignatureTypes": SignatureTypes,
        "ValidationItemTypes": ValidationItemTypes,
        "WebhookEventTypes": WebhookEventTypes,
}

let typeMap: {[index: string]: any} = {
    "AllocateDocumentKeyBatchRequest": AllocateDocumentKeyBatchRequest,
    "AllocateDocumentKeyRequest": AllocateDocumentKeyRequest,
    "ApplicationKeyModel": ApplicationKeyModel,
    "AuthorizationData": AuthorizationData,
    "AuthorizationDataRootAuthorizationDataRolesRootRolesApplicationData": AuthorizationDataRootAuthorizationDataRolesRootRolesApplicationData,
    "CertificateFullModel": CertificateFullModel,
    "CertificateModel": CertificateModel,
    "CertificateRequirement": CertificateRequirement,
    "CertificateSummary": CertificateSummary,
    "CmsSignatureOptions": CmsSignatureOptions,
    "CompleteAuthenticationRequest": CompleteAuthenticationRequest,
    "CompleteAuthenticationResponse": CompleteAuthenticationResponse,
    "CreateApplicationApiKeyRequest": CreateApplicationApiKeyRequest,
    "CreateApplicationApiKeyResponse": CreateApplicationApiKeyResponse,
    "CreateSignatureSessionRequest": CreateSignatureSessionRequest,
    "CreateSignatureSessionResponse": CreateSignatureSessionResponse,
    "DigestAlgorithmAndValueModel": DigestAlgorithmAndValueModel,
    "DocumentFileModel": DocumentFileModel,
    "DocumentKeyModel": DocumentKeyModel,
    "DocumentKeyQueryResponse": DocumentKeyQueryResponse,
    "DocumentKeySummary": DocumentKeySummary,
    "DocumentModel": DocumentModel,
    "DocumentQueryResponse": DocumentQueryResponse,
    "DocumentSummary": DocumentSummary,
    "ErrorModelV2": ErrorModelV2,
    "FileReferenceModel": FileReferenceModel,
    "InspectSignatureRequest": InspectSignatureRequest,
    "InspectSignatureResponse": InspectSignatureResponse,
    "NameModel": NameModel,
    "PkiBrazilCertificateModel": PkiBrazilCertificateModel,
    "PkiItalyCertificateModel": PkiItalyCertificateModel,
    "PrepareAuthenticationRequest": PrepareAuthenticationRequest,
    "PrepareAuthenticationResponse": PrepareAuthenticationResponse,
    "RootAuthorizationData": RootAuthorizationData,
    "SessionCompletionStatus": SessionCompletionStatus,
    "SignatureAlgorithmAndValueModel": SignatureAlgorithmAndValueModel,
    "SignatureAlgorithmIdentifier": SignatureAlgorithmIdentifier,
    "SignatureSessionDocumentData": SignatureSessionDocumentData,
    "SignatureSessionDocumentSummary": SignatureSessionDocumentSummary,
    "SignatureSessionModel": SignatureSessionModel,
    "SignerModel": SignerModel,
    "SignerSummary": SignerSummary,
    "SubscriptionAccessModel": SubscriptionAccessModel,
    "SubscriptionAccessModelRolesRootRolesApplicationModel": SubscriptionAccessModelRolesRootRolesApplicationModel,
    "SubscriptionAccessModelRolesRootRolesApplicationModelPaginatedSearchResponse": SubscriptionAccessModelRolesRootRolesApplicationModelPaginatedSearchResponse,
    "ValidationItemModel": ValidationItemModel,
    "ValidationResultsModel": ValidationResultsModel,
    "WebhookEventModel": WebhookEventModel,
}

export class ObjectSerializer {
    public static findCorrectType(data: any, expectedType: string) {
        if (data == undefined) {
            return expectedType;
        } else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        } else if (expectedType === "Date") {
            return expectedType;
        } else {
            if (enumsMap[expectedType]) {
                return expectedType;
            }

            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }

            // Check the discriminator
            let discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            } else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if(typeMap[discriminatorType]){
                        return discriminatorType; // use the type given in the discriminator
                    } else {
                        return expectedType; // discriminator did not map to a type
                    }
                } else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }

    public static serialize(data: any, type: string) {
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.serialize(datum, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return data.toISOString();
        } else {
            if (enumsMap[type]) {
                return data;
            }
            if (!typeMap[type]) { // in case we dont know the type
                return data;
            }

            // Get the actual type of this object
            type = this.findCorrectType(data, type);

            // get the map for the correct type.
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance: {[index: string]: any} = {};
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type);
            }
            return instance;
        }
    }

    public static deserialize(data: any, type: string) {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.deserialize(datum, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return new Date(data);
        } else {
            if (enumsMap[type]) {// is Enum
                return data;
            }

            if (!typeMap[type]) { // dont know the type
                return data;
            }
            let instance = new typeMap[type]();
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.name] = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type);
            }
            return instance;
        }
    }
}

export interface Authentication {
    /**
    * Apply authentication settings to header and query params.
    */
    applyToRequest(requestOptions: localVarRequest.Options): Promise<void> | void;
}

export class HttpBasicAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        requestOptions.auth = {
            username: this.username, password: this.password
        }
    }
}

export class HttpBearerAuth implements Authentication {
    public accessToken: string | (() => string) = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            const accessToken = typeof this.accessToken === 'function'
                            ? this.accessToken()
                            : this.accessToken;
            requestOptions.headers["Authorization"] = "Bearer " + accessToken;
        }
    }
}

export class ApiKeyAuth implements Authentication {
    public apiKey: string = '';

    constructor(private location: string, private paramName: string) {
    }

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (this.location == "query") {
            (<any>requestOptions.qs)[this.paramName] = this.apiKey;
        } else if (this.location == "header" && requestOptions && requestOptions.headers) {
            requestOptions.headers[this.paramName] = this.apiKey;
        } else if (this.location == 'cookie' && requestOptions && requestOptions.headers) {
            if (requestOptions.headers['Cookie']) {
                requestOptions.headers['Cookie'] += '; ' + this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
            else {
                requestOptions.headers['Cookie'] = this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
        }
    }
}

export class OAuth implements Authentication {
    public accessToken: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            requestOptions.headers["Authorization"] = "Bearer " + this.accessToken;
        }
    }
}

export class VoidAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(_: localVarRequest.Options): void {
        // Do nothing
    }
}

export type Interceptor = (requestOptions: localVarRequest.Options) => (Promise<void> | void);
