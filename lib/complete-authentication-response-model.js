'use strict'

const { AuthenticationFailures } = require('./enums');
const {PKCertificate: PKCertificate} = require('./pk-certificate');
const { ValidationResultsModel } = require('./validation-results-model');

class CompleteAuthenticationResponse {
    constructor(model) {
        this._success = model['success'];
        this._failure =  AuthenticationFailures[model['failures']];
        if(model['certificate']){
            this._certificate = new PKCertificate(model['certificate']);
        }
        if(model['validationResults']){
            this._validationResults = new ValidationResultsModel(model['validationResults']);
        }

    }

    get success() {
      return this._success
    }

    get failure() {
      return this._failure;
    }

    get certificate() {
      return this._certificate
    }

    get validationResults() {
      return this._validationResults;
    }

}