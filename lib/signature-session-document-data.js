const { FileReferenceModel } = require('./file-reference-model');

class SignatureSessionDocumentData {
    constructor(model){
        this._id = model['id'];
        if (model['file']) {
			this._documents = new FileReferenceModel(model['file']);
		}
        this._documentKey = model['documentKey']

        this._signatureType
     
    }

    get id() {
        return this._id;
    }

    get file() {
        return this._file;
    }

    get documentKey() {
        return this._documentKey;
    }

}

exports.SignatureSessionDocumentData = SignatureSessionDocumentData