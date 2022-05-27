const { CertificateRequirementsModel } = require('./certificate-requirement-model');
const { DocumentMetadata: DocumentMetadata } = require('./document-metadata');
const { Documents: Documents } = require('./documents');

class CreateSignatureSessionRequestModel{
    constructor(model) {
        this._returnUrl = model['returnUrl'] || null;
        this._securityContextId = model['securityContextId'] || null;
        this._callbackArgument = model['callbackArgument'] || null;
        this._enableBackgroundProcessing = model['enableBackgroundProcessing'] || null;
        this._disableDownloads = model['disableDownloads'] || null;
        this._documentMetadata = new DocumentMetadata(model['documentMetadata']) || null;
        this._documents = new Documents(model['documents']) || null;
        this._certificateRequirements = new CertificateRequirementsModel(model['certificateRequirements']) || null;
    }


    getreturnUrl() {
        return this._returnUrl;
    }

    getSecurityContextId() {
      return this._securityContextId;
    }

    getCallbackArgument() {
      return this._callbackArgument;
    }

    getEnableBackgroundProcessing() {
      return this._enableBackgroundProcessing;
    }

    getDisableDownloads() {
      return this._disableDownloads;
    }

    getDocumentMetadata() {
      return this._documentMetadata;
    }

    getDocuments() {
      return this._documents;
    }

    get certificateRequirements() {
      return this._certificateRequirements;
    }
}


exports.CreateSignatureSessionRequestModel = CreateSignatureSessionRequestModel;