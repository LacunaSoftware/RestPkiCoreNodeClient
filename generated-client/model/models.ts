import localVarRequest from 'request';

export * from './allocateDocumentKeyBatchRequest';
export * from './allocateDocumentKeyRequest';
export * from './attributeCertificateModel';
export * from './auditPackageOptions';
export * from './authenticationFailures';
export * from './authenticationGetResponse';
export * from './authenticationPostRequest';
export * from './authenticationPostResponse';
export * from './authenticationsPostRequest';
export * from './authenticationsPostResponse';
export * from './authenticationsPostSignedBytesRequest';
export * from './authenticationsPostSignedBytesResponse';
export * from './autoPositioningHorizontalDirections';
export * from './autoPositioningVerticalDirections';
export * from './blockchains';
export * from './cadesSignatureModel';
export * from './cadesSignaturePostRequestV1';
export * from './cadesSignaturePostRequestV2';
export * from './cadesSignaturePostRequestV3';
export * from './cadesSignaturePostResponse';
export * from './cadesSignaturePostSignedBytesRequest';
export * from './cadesSignaturePostSignedBytesResponse';
export * from './cadesSignerModel';
export * from './cadesTimestampModel';
export * from './certificateModel';
export * from './certificateReferenceModel';
export * from './certificateRequirement';
export * from './certificateRequirementTypes';
export * from './certificateSummary';
export * from './certifiedAttributeModel';
export * from './certifiedAttributeTypes';
export * from './cmsContentTypes';
export * from './cmsSignatureOptions';
export * from './colorModel';
export * from './commitmentTypeModel';
export * from './completeAuthenticationRequest';
export * from './completeAuthenticationResponse';
export * from './completeSignatureRequest';
export * from './completeSignatureRequestV2';
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
export * from './fileModel';
export * from './fileReferenceModel';
export * from './fullXmlSignaturePostRequest';
export * from './generalNameChoices';
export * from './generalNameModel';
export * from './holderTypes';
export * from './inspectSignatureFailures';
export * from './inspectSignatureRequest';
export * from './inspectSignatureResponse';
export * from './multipartUploadBeginResponse';
export * from './multipartUploadEndRequest';
export * from './nameModel';
export * from './namespaceModel';
export * from './openCadesSignatureRequestModel';
export * from './openSignatureRequestModel';
export * from './openXmlSignatureRequestModel';
export * from './otherNameModel';
export * from './padesCertificationLevel';
export * from './padesHorizontalAlign';
export * from './padesMeasurementUnits';
export * from './padesPageOptimizationModel';
export * from './padesSignatureModel';
export * from './padesSignaturePostRequestV1';
export * from './padesSignaturePostRequestV2';
export * from './padesSignaturePostResponse';
export * from './padesSignaturePostSignedBytesRequest';
export * from './padesSignaturePostSignedBytesResponse';
export * from './padesSignerModel';
export * from './padesSizeModel';
export * from './padesTextHorizontalAlign';
export * from './padesVerticalAlign';
export * from './padesVisualAutoPositioningModel';
export * from './padesVisualImageModel';
export * from './padesVisualPositioningModel';
export * from './padesVisualRectangleModel';
export * from './padesVisualRepresentationModel';
export * from './padesVisualTextModel';
export * from './pageOrientations';
export * from './paperSizes';
export * from './pdfAddMarksRequest';
export * from './pdfAddMarksResponse';
export * from './pdfMarkElementModel';
export * from './pdfMarkElementType';
export * from './pdfMarkImageModel';
export * from './pdfMarkModel';
export * from './pdfMarkPageOptions';
export * from './pdfSignatureOptions';
export * from './pdfTextSectionModel';
export * from './pdfTextStyle';
export * from './pkiBrazilCertificateModel';
export * from './pkiBrazilCertificateTypes';
export * from './pkiItalyCertificateModel';
export * from './pkiItalyCertificateTypes';
export * from './prepareAuthenticationRequest';
export * from './prepareAuthenticationResponse';
export * from './prepareSignatureFailures';
export * from './prepareSignatureRequest';
export * from './prepareSignatureResponse';
export * from './resourceContentOrReference';
export * from './roleAttributeModel';
export * from './sessionCompletionStatus';
export * from './signatureAlgorithmAndValueModel';
export * from './signatureAlgorithmIdentifier';
export * from './signatureAlgorithms';
export * from './signatureBStampModel';
export * from './signatureParametersModel';
export * from './signaturePolicyIdentifierModel';
export * from './signatureResultModel';
export * from './signatureSessionDocumentData';
export * from './signatureSessionDocumentSummary';
export * from './signatureSessionModel';
export * from './signatureSessionStatus';
export * from './signatureTypes';
export * from './signerBStampModel';
export * from './signerModel';
export * from './signerSummary';
export * from './stampPdfRequest';
export * from './stampPdfResponse';
export * from './timestampIssueResponse';
export * from './validationItemModel';
export * from './validationItemTypes';
export * from './validationResultsModel';
export * from './webhookEventModel';
export * from './webhookEventTypes';
export * from './xmlAttributeModel';
export * from './xmlElementLocationModel';
export * from './xmlElementModel';
export * from './xmlElementSignaturePostRequest';
export * from './xmlIdAttributeModel';
export * from './xmlIdResolutionTableModel';
export * from './xmlInsertionOptions';
export * from './xmlNodeNameModel';
export * from './xmlSignatureModel';
export * from './xmlSignatureOptions';
export * from './xmlSignaturePostResponse';
export * from './xmlSignaturePostSignedBytesRequest';
export * from './xmlSignaturePostSignedBytesResponse';
export * from './xmlSignatureResponseModel';
export * from './xmlSignatureTypes';
export * from './xmlSignedEntityTypes';

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
import { AttributeCertificateModel } from './attributeCertificateModel';
import { AuditPackageOptions } from './auditPackageOptions';
import { AuthenticationFailures } from './authenticationFailures';
import { AuthenticationGetResponse } from './authenticationGetResponse';
import { AuthenticationPostRequest } from './authenticationPostRequest';
import { AuthenticationPostResponse } from './authenticationPostResponse';
import { AuthenticationsPostRequest } from './authenticationsPostRequest';
import { AuthenticationsPostResponse } from './authenticationsPostResponse';
import { AuthenticationsPostSignedBytesRequest } from './authenticationsPostSignedBytesRequest';
import { AuthenticationsPostSignedBytesResponse } from './authenticationsPostSignedBytesResponse';
import { AutoPositioningHorizontalDirections } from './autoPositioningHorizontalDirections';
import { AutoPositioningVerticalDirections } from './autoPositioningVerticalDirections';
import { Blockchains } from './blockchains';
import { CadesSignatureModel } from './cadesSignatureModel';
import { CadesSignaturePostRequestV1 } from './cadesSignaturePostRequestV1';
import { CadesSignaturePostRequestV2 } from './cadesSignaturePostRequestV2';
import { CadesSignaturePostRequestV3 } from './cadesSignaturePostRequestV3';
import { CadesSignaturePostResponse } from './cadesSignaturePostResponse';
import { CadesSignaturePostSignedBytesRequest } from './cadesSignaturePostSignedBytesRequest';
import { CadesSignaturePostSignedBytesResponse } from './cadesSignaturePostSignedBytesResponse';
import { CadesSignerModel } from './cadesSignerModel';
import { CadesTimestampModel } from './cadesTimestampModel';
import { CertificateModel } from './certificateModel';
import { CertificateReferenceModel } from './certificateReferenceModel';
import { CertificateRequirement } from './certificateRequirement';
import { CertificateRequirementTypes } from './certificateRequirementTypes';
import { CertificateSummary } from './certificateSummary';
import { CertifiedAttributeModel } from './certifiedAttributeModel';
import { CertifiedAttributeTypes } from './certifiedAttributeTypes';
import { CmsContentTypes } from './cmsContentTypes';
import { CmsSignatureOptions } from './cmsSignatureOptions';
import { ColorModel } from './colorModel';
import { CommitmentTypeModel } from './commitmentTypeModel';
import { CompleteAuthenticationRequest } from './completeAuthenticationRequest';
import { CompleteAuthenticationResponse } from './completeAuthenticationResponse';
import { CompleteSignatureRequest } from './completeSignatureRequest';
import { CompleteSignatureRequestV2 } from './completeSignatureRequestV2';
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
import { FileModel } from './fileModel';
import { FileReferenceModel } from './fileReferenceModel';
import { FullXmlSignaturePostRequest } from './fullXmlSignaturePostRequest';
import { GeneralNameChoices } from './generalNameChoices';
import { GeneralNameModel } from './generalNameModel';
import { HolderTypes } from './holderTypes';
import { InspectSignatureFailures } from './inspectSignatureFailures';
import { InspectSignatureRequest } from './inspectSignatureRequest';
import { InspectSignatureResponse } from './inspectSignatureResponse';
import { MultipartUploadBeginResponse } from './multipartUploadBeginResponse';
import { MultipartUploadEndRequest } from './multipartUploadEndRequest';
import { NameModel } from './nameModel';
import { NamespaceModel } from './namespaceModel';
import { OpenCadesSignatureRequestModel } from './openCadesSignatureRequestModel';
import { OpenSignatureRequestModel } from './openSignatureRequestModel';
import { OpenXmlSignatureRequestModel } from './openXmlSignatureRequestModel';
import { OtherNameModel } from './otherNameModel';
import { PadesCertificationLevel } from './padesCertificationLevel';
import { PadesHorizontalAlign } from './padesHorizontalAlign';
import { PadesMeasurementUnits } from './padesMeasurementUnits';
import { PadesPageOptimizationModel } from './padesPageOptimizationModel';
import { PadesSignatureModel } from './padesSignatureModel';
import { PadesSignaturePostRequestV1 } from './padesSignaturePostRequestV1';
import { PadesSignaturePostRequestV2 } from './padesSignaturePostRequestV2';
import { PadesSignaturePostResponse } from './padesSignaturePostResponse';
import { PadesSignaturePostSignedBytesRequest } from './padesSignaturePostSignedBytesRequest';
import { PadesSignaturePostSignedBytesResponse } from './padesSignaturePostSignedBytesResponse';
import { PadesSignerModel } from './padesSignerModel';
import { PadesSizeModel } from './padesSizeModel';
import { PadesTextHorizontalAlign } from './padesTextHorizontalAlign';
import { PadesVerticalAlign } from './padesVerticalAlign';
import { PadesVisualAutoPositioningModel } from './padesVisualAutoPositioningModel';
import { PadesVisualImageModel } from './padesVisualImageModel';
import { PadesVisualPositioningModel } from './padesVisualPositioningModel';
import { PadesVisualRectangleModel } from './padesVisualRectangleModel';
import { PadesVisualRepresentationModel } from './padesVisualRepresentationModel';
import { PadesVisualTextModel } from './padesVisualTextModel';
import { PageOrientations } from './pageOrientations';
import { PaperSizes } from './paperSizes';
import { PdfAddMarksRequest } from './pdfAddMarksRequest';
import { PdfAddMarksResponse } from './pdfAddMarksResponse';
import { PdfMarkElementModel } from './pdfMarkElementModel';
import { PdfMarkElementType } from './pdfMarkElementType';
import { PdfMarkImageModel } from './pdfMarkImageModel';
import { PdfMarkModel } from './pdfMarkModel';
import { PdfMarkPageOptions } from './pdfMarkPageOptions';
import { PdfSignatureOptions } from './pdfSignatureOptions';
import { PdfTextSectionModel } from './pdfTextSectionModel';
import { PdfTextStyle } from './pdfTextStyle';
import { PkiBrazilCertificateModel } from './pkiBrazilCertificateModel';
import { PkiBrazilCertificateTypes } from './pkiBrazilCertificateTypes';
import { PkiItalyCertificateModel } from './pkiItalyCertificateModel';
import { PkiItalyCertificateTypes } from './pkiItalyCertificateTypes';
import { PrepareAuthenticationRequest } from './prepareAuthenticationRequest';
import { PrepareAuthenticationResponse } from './prepareAuthenticationResponse';
import { PrepareSignatureFailures } from './prepareSignatureFailures';
import { PrepareSignatureRequest } from './prepareSignatureRequest';
import { PrepareSignatureResponse } from './prepareSignatureResponse';
import { ResourceContentOrReference } from './resourceContentOrReference';
import { RoleAttributeModel } from './roleAttributeModel';
import { SessionCompletionStatus } from './sessionCompletionStatus';
import { SignatureAlgorithmAndValueModel } from './signatureAlgorithmAndValueModel';
import { SignatureAlgorithmIdentifier } from './signatureAlgorithmIdentifier';
import { SignatureAlgorithms } from './signatureAlgorithms';
import { SignatureBStampModel } from './signatureBStampModel';
import { SignatureParametersModel } from './signatureParametersModel';
import { SignaturePolicyIdentifierModel } from './signaturePolicyIdentifierModel';
import { SignatureResultModel } from './signatureResultModel';
import { SignatureSessionDocumentData } from './signatureSessionDocumentData';
import { SignatureSessionDocumentSummary } from './signatureSessionDocumentSummary';
import { SignatureSessionModel } from './signatureSessionModel';
import { SignatureSessionStatus } from './signatureSessionStatus';
import { SignatureTypes } from './signatureTypes';
import { SignerBStampModel } from './signerBStampModel';
import { SignerModel } from './signerModel';
import { SignerSummary } from './signerSummary';
import { StampPdfRequest } from './stampPdfRequest';
import { StampPdfResponse } from './stampPdfResponse';
import { TimestampIssueResponse } from './timestampIssueResponse';
import { ValidationItemModel } from './validationItemModel';
import { ValidationItemTypes } from './validationItemTypes';
import { ValidationResultsModel } from './validationResultsModel';
import { WebhookEventModel } from './webhookEventModel';
import { WebhookEventTypes } from './webhookEventTypes';
import { XmlAttributeModel } from './xmlAttributeModel';
import { XmlElementLocationModel } from './xmlElementLocationModel';
import { XmlElementModel } from './xmlElementModel';
import { XmlElementSignaturePostRequest } from './xmlElementSignaturePostRequest';
import { XmlIdAttributeModel } from './xmlIdAttributeModel';
import { XmlIdResolutionTableModel } from './xmlIdResolutionTableModel';
import { XmlInsertionOptions } from './xmlInsertionOptions';
import { XmlNodeNameModel } from './xmlNodeNameModel';
import { XmlSignatureModel } from './xmlSignatureModel';
import { XmlSignatureOptions } from './xmlSignatureOptions';
import { XmlSignaturePostResponse } from './xmlSignaturePostResponse';
import { XmlSignaturePostSignedBytesRequest } from './xmlSignaturePostSignedBytesRequest';
import { XmlSignaturePostSignedBytesResponse } from './xmlSignaturePostSignedBytesResponse';
import { XmlSignatureResponseModel } from './xmlSignatureResponseModel';
import { XmlSignatureTypes } from './xmlSignatureTypes';
import { XmlSignedEntityTypes } from './xmlSignedEntityTypes';

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
        "AuthenticationFailures": AuthenticationFailures,
        "AutoPositioningHorizontalDirections": AutoPositioningHorizontalDirections,
        "AutoPositioningVerticalDirections": AutoPositioningVerticalDirections,
        "Blockchains": Blockchains,
        "CertificateRequirementTypes": CertificateRequirementTypes,
        "CertifiedAttributeTypes": CertifiedAttributeTypes,
        "CmsContentTypes": CmsContentTypes,
        "DigestAlgorithms": DigestAlgorithms,
        "DocumentStatus": DocumentStatus,
        "GeneralNameChoices": GeneralNameChoices,
        "HolderTypes": HolderTypes,
        "InspectSignatureFailures": InspectSignatureFailures,
        "PadesCertificationLevel": PadesCertificationLevel,
        "PadesHorizontalAlign": PadesHorizontalAlign,
        "PadesMeasurementUnits": PadesMeasurementUnits,
        "PadesTextHorizontalAlign": PadesTextHorizontalAlign,
        "PadesVerticalAlign": PadesVerticalAlign,
        "PageOrientations": PageOrientations,
        "PaperSizes": PaperSizes,
        "PdfMarkElementType": PdfMarkElementType,
        "PdfMarkPageOptions": PdfMarkPageOptions,
        "PdfTextStyle": PdfTextStyle,
        "PkiBrazilCertificateTypes": PkiBrazilCertificateTypes,
        "PkiItalyCertificateTypes": PkiItalyCertificateTypes,
        "PrepareSignatureFailures": PrepareSignatureFailures,
        "SignatureAlgorithms": SignatureAlgorithms,
        "SignatureSessionStatus": SignatureSessionStatus,
        "SignatureTypes": SignatureTypes,
        "ValidationItemTypes": ValidationItemTypes,
        "WebhookEventTypes": WebhookEventTypes,
        "XmlInsertionOptions": XmlInsertionOptions,
        "XmlSignatureTypes": XmlSignatureTypes,
        "XmlSignedEntityTypes": XmlSignedEntityTypes,
}

let typeMap: {[index: string]: any} = {
    "AllocateDocumentKeyBatchRequest": AllocateDocumentKeyBatchRequest,
    "AllocateDocumentKeyRequest": AllocateDocumentKeyRequest,
    "AttributeCertificateModel": AttributeCertificateModel,
    "AuditPackageOptions": AuditPackageOptions,
    "AuthenticationGetResponse": AuthenticationGetResponse,
    "AuthenticationPostRequest": AuthenticationPostRequest,
    "AuthenticationPostResponse": AuthenticationPostResponse,
    "AuthenticationsPostRequest": AuthenticationsPostRequest,
    "AuthenticationsPostResponse": AuthenticationsPostResponse,
    "AuthenticationsPostSignedBytesRequest": AuthenticationsPostSignedBytesRequest,
    "AuthenticationsPostSignedBytesResponse": AuthenticationsPostSignedBytesResponse,
    "CadesSignatureModel": CadesSignatureModel,
    "CadesSignaturePostRequestV1": CadesSignaturePostRequestV1,
    "CadesSignaturePostRequestV2": CadesSignaturePostRequestV2,
    "CadesSignaturePostRequestV3": CadesSignaturePostRequestV3,
    "CadesSignaturePostResponse": CadesSignaturePostResponse,
    "CadesSignaturePostSignedBytesRequest": CadesSignaturePostSignedBytesRequest,
    "CadesSignaturePostSignedBytesResponse": CadesSignaturePostSignedBytesResponse,
    "CadesSignerModel": CadesSignerModel,
    "CadesTimestampModel": CadesTimestampModel,
    "CertificateModel": CertificateModel,
    "CertificateReferenceModel": CertificateReferenceModel,
    "CertificateRequirement": CertificateRequirement,
    "CertificateSummary": CertificateSummary,
    "CertifiedAttributeModel": CertifiedAttributeModel,
    "CmsSignatureOptions": CmsSignatureOptions,
    "ColorModel": ColorModel,
    "CommitmentTypeModel": CommitmentTypeModel,
    "CompleteAuthenticationRequest": CompleteAuthenticationRequest,
    "CompleteAuthenticationResponse": CompleteAuthenticationResponse,
    "CompleteSignatureRequest": CompleteSignatureRequest,
    "CompleteSignatureRequestV2": CompleteSignatureRequestV2,
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
    "FileModel": FileModel,
    "FileReferenceModel": FileReferenceModel,
    "FullXmlSignaturePostRequest": FullXmlSignaturePostRequest,
    "GeneralNameModel": GeneralNameModel,
    "InspectSignatureRequest": InspectSignatureRequest,
    "InspectSignatureResponse": InspectSignatureResponse,
    "MultipartUploadBeginResponse": MultipartUploadBeginResponse,
    "MultipartUploadEndRequest": MultipartUploadEndRequest,
    "NameModel": NameModel,
    "NamespaceModel": NamespaceModel,
    "OpenCadesSignatureRequestModel": OpenCadesSignatureRequestModel,
    "OpenSignatureRequestModel": OpenSignatureRequestModel,
    "OpenXmlSignatureRequestModel": OpenXmlSignatureRequestModel,
    "OtherNameModel": OtherNameModel,
    "PadesPageOptimizationModel": PadesPageOptimizationModel,
    "PadesSignatureModel": PadesSignatureModel,
    "PadesSignaturePostRequestV1": PadesSignaturePostRequestV1,
    "PadesSignaturePostRequestV2": PadesSignaturePostRequestV2,
    "PadesSignaturePostResponse": PadesSignaturePostResponse,
    "PadesSignaturePostSignedBytesRequest": PadesSignaturePostSignedBytesRequest,
    "PadesSignaturePostSignedBytesResponse": PadesSignaturePostSignedBytesResponse,
    "PadesSignerModel": PadesSignerModel,
    "PadesSizeModel": PadesSizeModel,
    "PadesVisualAutoPositioningModel": PadesVisualAutoPositioningModel,
    "PadesVisualImageModel": PadesVisualImageModel,
    "PadesVisualPositioningModel": PadesVisualPositioningModel,
    "PadesVisualRectangleModel": PadesVisualRectangleModel,
    "PadesVisualRepresentationModel": PadesVisualRepresentationModel,
    "PadesVisualTextModel": PadesVisualTextModel,
    "PdfAddMarksRequest": PdfAddMarksRequest,
    "PdfAddMarksResponse": PdfAddMarksResponse,
    "PdfMarkElementModel": PdfMarkElementModel,
    "PdfMarkImageModel": PdfMarkImageModel,
    "PdfMarkModel": PdfMarkModel,
    "PdfSignatureOptions": PdfSignatureOptions,
    "PdfTextSectionModel": PdfTextSectionModel,
    "PkiBrazilCertificateModel": PkiBrazilCertificateModel,
    "PkiItalyCertificateModel": PkiItalyCertificateModel,
    "PrepareAuthenticationRequest": PrepareAuthenticationRequest,
    "PrepareAuthenticationResponse": PrepareAuthenticationResponse,
    "PrepareSignatureRequest": PrepareSignatureRequest,
    "PrepareSignatureResponse": PrepareSignatureResponse,
    "ResourceContentOrReference": ResourceContentOrReference,
    "RoleAttributeModel": RoleAttributeModel,
    "SessionCompletionStatus": SessionCompletionStatus,
    "SignatureAlgorithmAndValueModel": SignatureAlgorithmAndValueModel,
    "SignatureAlgorithmIdentifier": SignatureAlgorithmIdentifier,
    "SignatureBStampModel": SignatureBStampModel,
    "SignatureParametersModel": SignatureParametersModel,
    "SignaturePolicyIdentifierModel": SignaturePolicyIdentifierModel,
    "SignatureResultModel": SignatureResultModel,
    "SignatureSessionDocumentData": SignatureSessionDocumentData,
    "SignatureSessionDocumentSummary": SignatureSessionDocumentSummary,
    "SignatureSessionModel": SignatureSessionModel,
    "SignerBStampModel": SignerBStampModel,
    "SignerModel": SignerModel,
    "SignerSummary": SignerSummary,
    "StampPdfRequest": StampPdfRequest,
    "StampPdfResponse": StampPdfResponse,
    "TimestampIssueResponse": TimestampIssueResponse,
    "ValidationItemModel": ValidationItemModel,
    "ValidationResultsModel": ValidationResultsModel,
    "WebhookEventModel": WebhookEventModel,
    "XmlAttributeModel": XmlAttributeModel,
    "XmlElementLocationModel": XmlElementLocationModel,
    "XmlElementModel": XmlElementModel,
    "XmlElementSignaturePostRequest": XmlElementSignaturePostRequest,
    "XmlIdAttributeModel": XmlIdAttributeModel,
    "XmlIdResolutionTableModel": XmlIdResolutionTableModel,
    "XmlNodeNameModel": XmlNodeNameModel,
    "XmlSignatureModel": XmlSignatureModel,
    "XmlSignatureOptions": XmlSignatureOptions,
    "XmlSignaturePostResponse": XmlSignaturePostResponse,
    "XmlSignaturePostSignedBytesRequest": XmlSignaturePostSignedBytesRequest,
    "XmlSignaturePostSignedBytesResponse": XmlSignaturePostSignedBytesResponse,
    "XmlSignatureResponseModel": XmlSignatureResponseModel,
}

// Check if a string starts with another string without using es6 features
function startsWith(str: string, match: string): boolean {
    return str.substring(0, match.length) === match;
}

// Check if a string ends with another string without using es6 features
function endsWith(str: string, match: string): boolean {
    return str.length >= match.length && str.substring(str.length - match.length) === match;
}

const nullableSuffix = " | null";
const optionalSuffix = " | undefined";
const arrayPrefix = "Array<";
const arraySuffix = ">";
const mapPrefix = "{ [key: string]: ";
const mapSuffix = "; }";

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

    public static serialize(data: any, type: string): any {
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (endsWith(type, nullableSuffix)) {
            let subType: string = type.slice(0, -nullableSuffix.length); // Type | null => Type
            return ObjectSerializer.serialize(data, subType);
        } else if (endsWith(type, optionalSuffix)) {
            let subType: string = type.slice(0, -optionalSuffix.length); // Type | undefined => Type
            return ObjectSerializer.serialize(data, subType);
        } else if (startsWith(type, arrayPrefix)) {
            let subType: string = type.slice(arrayPrefix.length, -arraySuffix.length); // Array<Type> => Type
            let transformedData: any[] = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.serialize(datum, subType));
            }
            return transformedData;
        } else if (startsWith(type, mapPrefix)) {
            let subType: string = type.slice(mapPrefix.length, -mapSuffix.length); // { [key: string]: Type; } => Type
            let transformedData: { [key: string]: any } = {};
            for (let key in data) {
                transformedData[key] = ObjectSerializer.serialize(
                    data[key],
                    subType,
                );
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

    public static deserialize(data: any, type: string): any {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (endsWith(type, nullableSuffix)) {
            let subType: string = type.slice(0, -nullableSuffix.length); // Type | null => Type
            return ObjectSerializer.deserialize(data, subType);
        } else if (endsWith(type, optionalSuffix)) {
            let subType: string = type.slice(0, -optionalSuffix.length); // Type | undefined => Type
            return ObjectSerializer.deserialize(data, subType);
        } else if (startsWith(type, arrayPrefix)) {
            let subType: string = type.slice(arrayPrefix.length, -arraySuffix.length); // Array<Type> => Type
            let transformedData: any[] = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.deserialize(datum, subType));
            }
            return transformedData;
        } else if (startsWith(type, mapPrefix)) {
            let subType: string = type.slice(mapPrefix.length, -mapSuffix.length); // { [key: string]: Type; } => Type
            let transformedData: { [key: string]: any } = {};
            for (let key in data) {
                transformedData[key] = ObjectSerializer.deserialize(
                    data[key],
                    subType,
                );
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
