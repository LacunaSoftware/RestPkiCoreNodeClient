class DocumentMetadata{

constructor(model){
    
    this._additionalProp1 = model['additionalProp1'] || null;
    this._additionalProp2 = model['additionalProp2'] || null;
    this._additionalProp3 = model['additionalProp3'] || null;

}
}

exports.DocumentMetadata = DocumentMetadata;