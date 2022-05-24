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
}

exports.Documents = Documents