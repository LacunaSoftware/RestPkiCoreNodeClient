'use strict'

const { ValidationItemModel } = require("./validation-item-model");

class ValidationResultsModel {
    constructor(model){
        if(model['passedChecks']){
            this._passedChecks = new ValidationItemModel(model['passedChecks']);
        }
        if(model['errors']){
            this._errors = new ValidationItemModel(model['errors']);
        }
        if(model['warnings']){
            this._warnings = new ValidationItemModel(model['warnings']);
        }
    }

    get passedChecks() {
      return this._passedChecks;
    }

    get errors() {
      return this._errors;
    }

    get warnings() {
      return this._warnings;
    }
}

exports.ValidationResultsModel = ValidationResultsModel