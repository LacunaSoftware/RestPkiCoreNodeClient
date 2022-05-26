class DocumentMetadata{

constructor(model){
    
    this._additionalProp1 = model['additionalProp1'] || null;
    this._additionalProp2 = model['additionalProp2'] || null;
    this._additionalProp3 = model['additionalProp3'] || null;

}

get additionalProp1() {
    return this._additionalProp1;
}

get additionalProp2() {
    return this._additionalProp2;
}

get additionalProp3() {
    return this._additionalProp3;
}

}

exports.DocumentMetadata = DocumentMetadata;