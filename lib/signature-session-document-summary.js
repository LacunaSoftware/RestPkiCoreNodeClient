const { FileReferenceModel } = require('./file-reference-model');

class SignatureSessionDocumentSummary{

 constructor(model){

    this._status = SignatureSessionStatus[model['status']];
    this._dataSigned = model['dataSigned'];
    this._id = model['id'];
    this._formattedKey = model['formattedKey']
    this._documentKey = model['documentKey']
     if (model['originalFile']) {
        this._originalFile= new FileReferenceModel(model['originalFile']);
    }
    if (model['markedFile']) {
        this._markedFile = new FileReferenceModel(model['markedFile']);
    }
    if (model['signedFile']) {
        this._signedFile = new FileReferenceModel(model['signedFile']);
    }
    this._signatureType = SignatureType[model['signatureType']];

    this._availableUntil = model['availableUntil'];

 }

 get status() {
     return this._status;
 }

 get dataSigned() {
     return this._dataSigned;
 }

 get id() {
     return this._id;
 }

 get formattedKey() {
     return this._formattedKey;
 }

 get documentKey() {
     return this._documentKey;
 }

 get originalFile() {
     return this._originalFile;
 }

 get markedFile() {
     return this._markedFile;
 }

 get signedFile() {
     return this._signedFile;
 }

 get signatureType() {
     return this._signatureType;
 }

 get avaliableUntil() {
     return this._availableUntil;
 }


}
exports.SignatureSessionDocumentSummary = SignatureSessionDocumentSummary