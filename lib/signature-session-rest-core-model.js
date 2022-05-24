class SignatureSessionRequestModel {
    constructor(model) {
        this._returnUrl = model['returnUrl'] || null;
        this._securityContextId = model['securityContextId'] || null;
        this._callbackArgument = model['callbackArgument'] || null;
        this._enableBackgroundProcessing = model['enableBackgroundProcessing'] || null;
        this._disableDownloads = model['disableDownloads'] || null;
        this._documentMetadata = new DocumentMetadata(model['documentMetadata']) || null;
        this._documents = new Documents(model['documents']) || null;
    }
}

exports.SignatureSessionRequestModel = SignatureSessionRequestModel;