const { SignatureSessionStatus } = require('./enums');
const { CertificateModel } = require('./certificate-model');
const { SignatureSessionDocumentSummary} = require('./signature-session-document-summary');
class SignatureSessionModel{

    constructor(model){

        this._id = model['id'];
        this._status = SignatureSessionStatus[model['status']];
        this._processingErrorCode = model['processingErrorCode'];
        this._callbackArgument = model['callbackArgument'];
        if (model['signerCertificate']) {
			this._signerCertificate = new CertificateModel(model['signerCertificate']);
		}
        if (model['documents']) {
			this._documents = new SignatureSessionDocumentSummary(model['documents']);
		}	
    }

    get id() {
        return this._id;
    }
    
    get status() {
        return this._status;
    }

    get processingErrorCode() {
        return this._processingErrorCode;
    }
    
    get callbackArgument() {
        return this._callbackArgument;
    }
    
    get signerCertificate() {
        return this._signerCertificate;
    }

    get signerCertificate() {
        return this._signerCertificate;
    }
    
    get documents() {
        return this._documents;
    }
    

        
}
exports.SignatureSessionModel = SignatureSessionModel;