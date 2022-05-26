class DocumentFile
{
    constructor(model)
    {
       this._name = model['name'] || null;
       this._length = model['length'] || null;
       this._contentType = model['contentType'] || null;
       this._location = model['location'] || null;
    }

    get name() {
        return this._name;
    }

    get length() {
        return this.length;
    }

    get contentType() {
        return this._contentType;
    }
    
    get location() {
        return this._location;
    }
}

exports.DocumentFile = DocumentFile;
   
