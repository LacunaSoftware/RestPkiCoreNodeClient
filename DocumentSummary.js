class DocumentSummary
{
    id;
    key;
    formattedKey;
    originalFile;
    signedFile;
    avaliableUntil;
    signatureType;

    construct(model)
    {
        this._id = model.id;
        this._key = model.key;
        this._formattedKey = model.formattedKey;
        if (typeof model.originalFile !== undefined) {
            this._originalFile = new DocumentFile(model.originalFile);
        }
        if (typeof model.signedFile !== undefined) {
            this.signedFile = new DocumentFile(model.signedFile);
        }
        if ( typeof model.avaliableUntil !== undefined) {
            this._avaliableUntil = new DateTime(model.avaliableUntil);
        }
        this.signatureType = model.signatureType;
    }


    getId()
    {
        return this._id;
    }


    getKey()
    {
        return this._key;
    }

   
    getFormattedKey()
    {
        return this._formattedKey;
    }

    
    getOriginalFile()
    {
        return this._originalFile;
    }

    getSignedFile()
    {
        return this.signedFile;
    }

    getAvaliableUntil()
    {
        return this.avaliableUntil;
    }
    
    getSignatureType()
    {
        return this._signatureType;
    }



}