const { CertificateRequirementsModel } = require('./certificate-requirement-model');
const { DocumentMetadata: DocumentMetadata } = require('./document-metadata');
const { Documents: Documents } = require('./documents');

class CreateSignatureSessionRequestModel {
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

    get returnUrl() {
        return this._returnUrl;
    }

    get securityContextId() {
      return this._securityContextId;
    }

    get callbackArgument() {
      return this._callbackArgument;
    }

    get enableBackgroundProcessing() {
      return this._enableBackgroundProcessing;
    }

    get disableDownloads() {
      return this._disableDownloads;
    }

    get documentMetadata() {
      return this._documentMetadata;
    }

    get documents() {
      return this._documents;
    }

    get certificateRequirements() {
      return this._certificateRequirements;
    }
}


exports.CreateSignatureSessionRequestModel = CreateSignatureSessionRequestModel;