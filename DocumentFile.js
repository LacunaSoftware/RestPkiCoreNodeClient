class DocumentFile
{
     $_name;
     $_length;
     $_contentType;
     $_location;

    construct(model)
    {
       this._name = model.name;
       this._length = model.length;
       this._contentType = model.contentType;
       this._location = model.location;
    }

    getName(){
        returnthis._name;
    }

    getLength(){
        returnthis._length;
    }

    getContentType(){
        returnthis._contentType;
    }

     getLocation(){
        returnthis._location;
    }

    get(name)
    {
        switch (name) {
            case "name":
                return this.getName();
            case "length":
                return this.getLength();
            case "contentType":
                return this.getContentType();
            case "location":
                return this.getLocation();
            default:
                trigger_error('Undefined property: ' . __CLASS__ + '::$'  + name);
                return null;
        }
    }
}
   
