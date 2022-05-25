'use strict'

const { ValidationItemTypes } = require("./enums");

class ValidationItemModel {
    constructor(model){
        this._type = ValidationItemTypes[model['type']];
        this._message = model['message'];
        this._detail = model['detail'];
        this._innerValidationResults = model['innerValidationResults'];
    }

    get type() {
      return this._type;
    }

    get message() {
      return this._message;
    }

    get detail() {
      return this._detail;
    }

    get innerValidationResults() {
      return this._innerValidationResults;
    }
}

exports.ValidationItemModel = ValidationItemModel