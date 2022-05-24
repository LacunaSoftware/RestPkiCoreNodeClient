class DocumentSummary
{
    constructor(model)
    {
        this._id = model['id'] || null;
        this._key = model['key'] || null;
        this._formattedKey = model['formattedKey'] || null;
        
        if (typeof model['originalFile'] !== undefined) {
            this._originalFile = new DocumentFile(model['originalFile']);
        }
        if (typeof model['signedFile'] !== undefined) {
            this._signedFile = new DocumentFile(model['signedFile']);
        }
        if ( typeof model['availableUntil'] !== undefined) {
            this._availableUntil = new Date(model['availableUntil']);
        }
        
        this._signatureType = model['signatureType'] || null;
    }
}

exports.DocumentSummary = DocumentSummary;