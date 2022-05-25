const {CertificateRequirementTypes: CertificateRequirementTypes} = require('./enums');

class CertificateRequirementsModel {
    constructor(model) {
        this._type = CertificateRequirementTypes[model['type']];
        this._argument = model['argument'];
    }
    
    get type() {
        return this._type;
    }
    
    get argument() {
        return this._argument;
    }

    
}

exports.CertificateRequirementsModel = CertificateRequirementsModel;