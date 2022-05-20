'use strict';

class SignatureSessionRestCore {

	constructor(client) {
		this._client = client;
	}

    async getSignatureSession(id) {
		let request = {
			id: id
		};

        try {
			let response = await this._client.getRestClient().get('api/signatureSessions', request);
			return response.data['token'];
		} catch (err) {
			throw err;
		}
    }
}

exports.SignatureSessionRestCore = SignatureSessionRestCore;