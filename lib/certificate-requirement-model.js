const {CertificateRequirementTypes: CertificateRequirementTypes} = require('./enums');

class CertificateRequirementsModel {
    constructor(model) {
        this._argument = model['argument'];
        this._argument = CertificateRequirementTypes[model['type']];
    }
}

exports.CertificateRequirementsModel = CertificateRequirementsModel;