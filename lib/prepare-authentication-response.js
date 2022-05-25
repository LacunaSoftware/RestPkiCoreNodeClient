'use strict'

const { DigestAlgorithmAndValueModel } = require("./digest-algorithm-and-value-model");

class PrepareAuthenticationResponseModel {
    constructor(model){
        this._state = model['state'];
        this._toSignHash = new DigestAlgorithmAndValueModel(model['toSignHash']);
    }

    get state() {
      return this._state;
    }

    get toSignHash() {
      return this._toSignHash;
    }
}