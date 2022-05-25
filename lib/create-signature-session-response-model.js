class CreateSignatureSessionResponseModel {
    constructor(model) {
        this._sessionId = model['sessionId'];
        this._redirectUrl = model['redirectUrl'];
    }

    get sessionId() {
        return this._sessionId;
    }

    get redirectUrl() {
        return this._redirectUrl;
    }
}

exports.CreateSignatureSessionResponseModel = CreateSignatureSessionResponseModel;
