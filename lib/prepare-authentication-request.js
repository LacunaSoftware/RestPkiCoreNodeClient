'use strict';

class PrepareAuthenticationRequestModel {
    constructor(model){
        this._securityContextId = model['securityContextId'];
        this._ignoreRevocationStatusUnknown = model['ignoreRevocationStatusUnknown'];
    }

    get securityContextId() {
      return this._securityContextId;
    }

    get ignoreRevocationStatusUnknown() {
      return this._ignoreRevocationStatusUnknown;
    }
}

exports.PrepareAuthenticationRequestModel = PrepareAuthenticationRequestModel;