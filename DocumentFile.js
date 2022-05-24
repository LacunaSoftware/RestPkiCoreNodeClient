class DocumentFile
{
    constructor(model)
    {
       this._name = model.name || null;
       this._length = model.length || null;
       this._contentType = model.contentType || null;
       this._location = model.location || null;
    }
}
   
