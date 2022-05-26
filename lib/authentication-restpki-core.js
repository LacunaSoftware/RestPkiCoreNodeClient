'use strict';

class AuthenticationRestPkiCore {

	constructor(client) {
		this._client = client;
	}

    async prepareCertificateAuthentication(data) {
        try {
			let response = await this._client.getRestClient().post('api/v2/authentication', data);
			return response.data;
		} catch (err) {
			throw err;
		}
    }

	async postSignatureSession(data) {
        try {
			let response = await this._client.getRestClient().post("api/v2/authentication/completion", data);
			return response.data;
		} catch (err) {
			throw err;
		}
    }
	
}

exports.AuthenticationRestPkiCore = AuthenticationRestPkiCore;