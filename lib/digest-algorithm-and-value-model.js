'use strict'

const { DigestAlgorithms } = require("./enums")

class DigestAlgorithmAndValueModel {
    constructor(model){
        this._algorithm = DigestAlgorithms[model['algorithm']];
        this._value = model['value'];
        this._hexValue = model['hexValue'];
    }

    get algorithm() {
      return this._algorithm;
    }

    get value() {
      return this._value;
    }

    get hexValue() {
      return this._hexValue;
    }
}

exports.DigestAlgorithmAndValueModel = DigestAlgorithmAndValueModel;