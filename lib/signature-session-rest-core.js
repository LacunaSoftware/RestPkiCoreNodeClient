'use strict';

class SignatureSessionRestCore {

	constructor(client) {
		this._client = client;
	}

    async startSignatureSession(id) {
		let request = {
			id: id
		};


        try {
			let response = await this._client.getRestClient().post('Api/Authentications', request);
			return response.data['token'];
		} catch (err) {
			throw err;
		}
    }
}

const _SignatureSessionRestCore = SignatureSessionRestCore
export { _SignatureSessionRestCore as SignatureSessionRestCore };