class SignatureSessionRequestModel{


constructor(){


    this._returnUrl = returnUrl;
    this._securityContextId = securityContextId;
    this._callbackArgument = callbackArgument;
    this._enableBackgroundProcessing = enableBackgroundProcessing;
    this._disableDownloads = disableDownloads;
    this._documentMetadata = new DocumentMetadata();
    this._documents = new Documents ();
}

}