class DocumentSummary
{
    constructor(id, key, formattedKey, originalFile, signedFile, availableUntil, signatureType)
    {
        this._id = id || null;
        this._key = key || null;
        this._formattedKey = formattedKey || null;
        
        if (typeof originalFile !== undefined) {
            this._originalFile = new DocumentFile(originalFile);
        }
        if (typeof signedFile !== undefined) {
            this._signedFile = new DocumentFile(signedFile);
        }
        if ( typeof availableUntil !== undefined) {
            this._availableUntil = new Date(availableUntil);
        }
        
        this._signatureType = signatureType || null;
    }
}