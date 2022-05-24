'use strict';

class SignatureSessionRestCore {

	constructor(client) {
		this._client = client;
	}

    async getSignatureSession(id) {
        try {
			let response = await this._client.getRestClient().get('api/signature-sessions/', id);
			return response.data;
		} catch (err) {
			throw err;
		}
    }
}

exports.SignatureSessionRestCore = SignatureSessionRestCore;