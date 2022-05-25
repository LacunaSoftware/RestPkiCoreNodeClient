class FileReferenceModel{
    
    constructor(model){

        this._mimeType = model['mimeType'];
        this._content = model['content'];
        this._blobToken = model['blobToken'];
        this._url = model['url'];
        this._name = model ['name'];
        this._length = model ['length'];
    }

    get mimeType() {
        return this._mimeType;
    }

    get content() {
        return this._content;
    }

    get blobToken() {
        return this._blobToken;
    }

    get url() {
        return this._url;
    }

    get name() {
        return this._name;
    }

    get length() {
        return this._length;
    }

}
exports.FileReferenceModel = FileReferenceModel;