import { SignatureSessionsApi } from "./api/SignatureSessionsApi.js";
import { ApiClient } from "./ApiClient.js";

var apiClient = ApiClient.instance;
apiClient.basePath = "https://core.pki.rest"
apiClient.defaultHeaders = {
    'x-api-key': 'pki-suite-samples-01|4c951e182496a545be6f31b3c7c76f512f610588947999807fbcaa0d1f72fb9c'
}

new SignatureSessionsApi(apiClient).apiSignatureSessionsIdGet('3fa85f64-5717-4562-b3fc-2c963f66afa6', (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
