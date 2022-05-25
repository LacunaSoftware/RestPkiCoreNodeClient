class Documents {
    constructor(model){
        this._id = model['id'] || null;
        this._file = model['file'] || null;
        this._mimeType = model['mimeType'] || null;
        this._content = model['content'] || null;
        this._blobToken = model['blobToken'] || null;
        this._url = model['url'] || null;
        this._name = model['name'] || null;
        this._length = model['length'] || null;
    }

    get id() {
        return this._id;
    }

    get file() {
        return this._file;
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

exports.Documents = Documents