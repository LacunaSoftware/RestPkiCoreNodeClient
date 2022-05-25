const { SignatureSessionStatus } = require('./enums');
const { CertificateModel } = require('./pk-certificate');
const { SignatureSessionDocumentData } = require('./signature-session-document-data');


pk-certificate

class SignatureSessionModel{

    constructor(model){

        this._id = model['id'];
        this._status = SignatureSessionStatus[model['status']];
        this._callbackArgument = model['callbackArgument'];
        if (model['signerCertificate']) {
			this._signerCertificate = new CertificateModel(model['signerCertificate']);
		}
        if (model['documents']) {
			this._documents = new SignatureSessionDocumentData(model['documents']);
		}	
    }

    get id() {
        return this._id;
    }
    
    get status() {
        return this._status;
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