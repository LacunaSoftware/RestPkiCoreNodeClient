const { CertificateRequirementsModel } = require('./certificate-requirement');
const { DocumentMetadata: DocumentMetadata } = require('./document-metadata');
const { SignatureSessionDocumentData: SignatureSessionDocumentData } = require('./signature-session-document-data');

class CreateSignatureSessionRequestModel {
    constructor(model) {
        this._returnUrl = model['returnUrl'] || null;
        this._securityContextId = model['securityContextId'] || null;
        this._callbackArgument = model['callbackArgument'] || null;
        this._enableBackgroundProcessing = model['enableBackgroundProcessing'] || null;
        this._disableDownloads = model['disableDownloads'] || null;
        if (model['documentMetadata']) {
          this._documentMetadata = new DocumentMetadata (model['documentMetadata']);
        }
        if (model['documents']) {
          this._documents = new SignatureSessionDocumentData (model['documents']);
        }
        if (model['certificateRequirements']) {
          this._certificateRequirements = new CertificateRequirementsModel (model['certificateRequirements']);
        }
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

    get SignatureSessionDocumentData() {
      return this._SignatureSessionDocumentData;
    }

    get certificateRequirements() {
      return this._certificateRequirements;
    }
}


exports.CreateSignatureSessionRequestModel = CreateSignatureSessionRequestModel;