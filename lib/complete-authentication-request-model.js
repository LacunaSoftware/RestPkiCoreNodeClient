'use strict'

class CompleteAuthenticationRequest {
    constructor(model){
        this._state = model['state'];
        this._certificate = model['certificate'];
        this._signature = model['signature'];
    }

    get state() {
      return this._state;
    }

    get certificate() {
      return this._certificate;
    }

    get signature() {
      return this._signature
    }
}