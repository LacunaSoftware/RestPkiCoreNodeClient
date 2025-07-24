# REST PKI Core Node.js Client Library

A comprehensive JavaScript/TypeScript client library for the [REST PKI Core API](https://homolog.core.pki.rest/swagger/api/swagger.json), providing both direct API access and a convenient facade interface.

## 🚀 Features

- ✅ **Full TypeScript Support** - Complete type definitions and IntelliSense
- ✅ **JavaScript Compatible** - Works in any Node.js application
- ✅ **Comprehensive API Coverage** - All 13 REST PKI Core API endpoints
- ✅ **Promise-based API** - Modern async/await support
- ✅ **Error Handling** - Comprehensive error handling and response wrapping
- ✅ **Zero Dependencies** - Lightweight with no external dependencies

## 📦 Installation

```bash
npm install restpki-core-client
```

## 🚀 Quick Start

### TypeScript Example

```typescript
import { DocumentsApi, PadesSignatureApi, Configuration } from 'restpki-core-client';

// Configure the client
const config = new Configuration({
  basePath: 'https://homolog.core.pki.rest',
  apiKey: 'your-api-key-here'
});

// Create API instances
const documentsApi = new DocumentsApi(config);
const padesApi = new PadesSignatureApi(config);

// Use the APIs
const document = await documentsApi.apiDocumentsIdGet('document-id');
console.log('Document:', document);
```

### JavaScript Example

```javascript
const { DocumentsApi, PadesSignatureApi, Configuration } = require('restpki-core-client');

// Configure the client
const config = new Configuration({
  basePath: 'https://homolog.core.pki.rest',
  apiKey: 'your-api-key-here'
});

// Create API instances
const documentsApi = new DocumentsApi(config);

// Use async/await
const getDocument = async () => {
  try {
    const document = await documentsApi.apiDocumentsIdGet('document-id');
    console.log('Document:', document);
  } catch (error) {
    console.error('Error:', error);
  }
};

getDocument();
```

## 📋 Available APIs

This library provides access to all REST PKI Core operations through dedicated API classes:

### 🗂️ Document Management
```javascript
import { DocumentsApi } from 'restpki-core-client';

const documentsApi = new DocumentsApi(config);

// Get document details
const document = await documentsApi.apiDocumentsIdGet('document-id');

// Get document signers
const signers = await documentsApi.apiDocumentsIdSignersGet('document-id');
```

### 🔑 Document Keys
```javascript
import { DocumentKeysApi } from 'restpki-core-client';

const keysApi = new DocumentKeysApi(config);

// Allocate a document key
const keyRequest = { /* your request */ };
const key = await keysApi.apiDocumentKeysPost(keyRequest);

// Get unused keys
const unusedKeys = await keysApi.apiDocumentKeysUnusedGet();
```

### ✍️ Signature Sessions
```javascript
import { SignatureSessionsApi } from 'restpki-core-client';

const sessionsApi = new SignatureSessionsApi(config);

// Create a signature session
const sessionRequest = { /* your request */ };
const session = await sessionsApi.apiSignatureSessionsPost(sessionRequest);

// Get session status
const status = await sessionsApi.apiSignatureSessionsIdGet('session-id');
```

### 📄 PAdES Signatures (PDF)
```javascript
import { PadesSignatureApi } from 'restpki-core-client';

const padesApi = new PadesSignatureApi(config);

// Create PAdES signature
const padesRequest = { /* your request */ };
const signature = await padesApi.apiPadesSignaturesPost(padesRequest);

// Complete signature
const completeRequest = { /* your request */ };
await padesApi.apiPadesSignaturesTokenPost('token', completeRequest);
```

### 📦 CAdES Signatures
```javascript
import { CadesSignatureApi } from 'restpki-core-client';

const cadesApi = new CadesSignatureApi(config);

// Create CAdES signature
const cadesRequest = { /* your request */ };
const signature = await cadesApi.apiCadesSignaturesPost(cadesRequest);
```

### 🏷️ XML Signatures
```javascript
import { XmlSignatureApi } from 'restpki-core-client';

const xmlApi = new XmlSignatureApi(config);

// Create XML signature
const xmlRequest = { /* your request */ };
const signature = await xmlApi.apiXmlSignaturesFullPost(xmlRequest);
```

### 🔐 Authentication
```javascript
import { AuthenticationApi } from 'restpki-core-client';

const authApi = new AuthenticationApi(config);

// Prepare authentication
const authRequest = { /* your request */ };
const authResponse = await authApi.apiAuthenticationsPost(authRequest);

// Complete authentication
const completeRequest = { /* your request */ };
await authApi.apiAuthenticationsTokenPost('token', completeRequest);
```

### 📝 PDF Processing
```javascript
import { PdfApi } from 'restpki-core-client';

const pdfApi = new PdfApi(config);

// Add marks to PDF
const marksRequest = { /* your request */ };
const result = await pdfApi.apiPdfAddMarksPost(marksRequest);

// Stamp PDF
const stampRequest = { /* your request */ };
await pdfApi.apiPdfStampPost(stampRequest);
```

### 🎨 Visual Positioning Presets
```javascript
import { PadesVisualPositioningPresetsApi } from 'restpki-core-client';

const presetsApi = new PadesVisualPositioningPresetsApi(config);

// Get footnote preset
const footnote = await presetsApi.apiPadesVisualPositioningPresetsFootnoteGet();

// Get new page preset
const newPage = await presetsApi.apiPadesVisualPositioningPresetsNewPageGet();
```

### 🔍 Other APIs
- **SignatureApi**: General signature operations
- **SignatureInspectionApi**: Signature validation and inspection
- **TimestampApi**: Timestamp services
- **UploadApi**: File upload operations

## 🔑 Authentication

All API calls require authentication via API key:

```javascript
import { Configuration } from 'restpki-core-client';

const config = new Configuration({
  basePath: 'https://homolog.core.pki.rest',
  apiKey: 'your-api-key-here'
});

// Or set headers manually for each API instance
const api = new DocumentsApi();
api.defaultHeaders = {
  'X-Api-Key': 'your-api-key-here'
};
```

## ⚠️ Error Handling

The library provides comprehensive error handling:

```javascript
try {
  const document = await documentsApi.apiDocumentsIdGet('document-id');
  console.log('Success:', document);
} catch (error) {
  if (error.response) {
    // API error with response
    console.error('Status:', error.response.status);
    console.error('Data:', error.response.data);
    console.error('Headers:', error.response.headers);
  } else if (error.request) {
    // Network error
    console.error('Network error:', error.request);
  } else {
    // Other error
    console.error('Error:', error.message);
  }
}
```

## 🔄 HTTP Status Codes

| Code | Description |
|------|-------------|
| 200 | Success |
| 400 | Bad Request - Syntax error |
| 401 | Unauthorized - Invalid API key |
| 403 | Forbidden - Insufficient permissions |
| 422 | Unprocessable Entity - API validation error |
| 500 | Internal Server Error |

## 🌍 Internationalization

The API supports multiple languages via the `Accept-Language` header:

```javascript
const config = new Configuration({
  basePath: 'https://homolog.core.pki.rest',
  apiKey: 'your-api-key',
  defaultHeaders: {
    'Accept-Language': 'pt-BR' // Portuguese
    // 'Accept-Language': 'en-US' // English (default)
  }
});
```

## 📊 TypeScript Support

This library is written in TypeScript and provides complete type definitions:

```typescript
import { 
  DocumentModel, 
  PadesSignaturePostRequestV2, 
  CadesSignaturePostRequestV3,
  AuthenticationPostRequest 
} from 'restpki-core-client';

// Full IntelliSense and type checking
const createSignature = async (request: PadesSignaturePostRequestV2) => {
  const api = new PadesSignatureApi(config);
  const response = await api.apiPadesSignaturesPostV2(request);
  return response;
};
```

## 🛠️ Advanced Usage

### Custom Configuration

```javascript
import { Configuration } from 'restpki-core-client';

const config = new Configuration({
  basePath: 'https://your-custom-endpoint.com',
  apiKey: 'your-api-key',
  defaultHeaders: {
    'Accept-Language': 'pt-BR',
    'Custom-Header': 'value'
  },
  // Additional axios configuration
  timeout: 30000,
  maxContentLength: 50 * 1024 * 1024, // 50MB
});
```

### Batch Operations

```javascript
// Process multiple documents in parallel
const documentIds = ['doc-1', 'doc-2', 'doc-3'];
const documentsApi = new DocumentsApi(config);

const results = await Promise.allSettled(
  documentIds.map(id => documentsApi.apiDocumentsIdGet(id))
);

results.forEach((result, index) => {
  if (result.status === 'fulfilled') {
    console.log(`Document ${documentIds[index]}:`, result.value);
  } else {
    console.error(`Error for ${documentIds[index]}:`, result.reason);
  }
});
```

### Response Interceptors

```javascript
import axios from 'axios';

// Add response interceptor for logging
axios.interceptors.response.use(
  response => {
    console.log('API Response:', response.status, response.config.url);
    return response;
  },
  error => {
    console.error('API Error:', error.response?.status, error.config?.url);
    return Promise.reject(error);
  }
);
```

## 📖 API Reference

### Core Models
- `DocumentModel` - Document information
- `CertificateModel` - Certificate details
- `SignatureSessionModel` - Signature session data
- `ValidationResultsModel` - Validation results

### Request Models
- `PadesSignaturePostRequestV2` - PAdES signature request
- `CadesSignaturePostRequestV3` - CAdES signature request
- `AuthenticationPostRequest` - Authentication request
- `CreateSignatureSessionRequest` - Session creation request

### Response Models
- `PadesSignaturePostResponse` - PAdES signature response
- `CadesSignaturePostResponse` - CAdES signature response
- `AuthenticationPostResponse` - Authentication response
- `InspectSignatureResponse` - Signature inspection results

For complete API documentation, see the [REST PKI Core API Specification](https://homolog.core.pki.rest/swagger/api/swagger.json).

## 🤝 Support

- **API Documentation**: [REST PKI Core Docs](https://docs.lacunasoftware.com/en-us/articles/rest-pki/core/)
- **API Specification**: [OpenAPI JSON](https://homolog.core.pki.rest/swagger/api/swagger.json)

## 📄 License

MIT License - See LICENSE file for details.

## 🏷️ Version

Current version: 1.0.2  
Compatible with: Node.js 12+, TypeScript 3.7+

---

**Auto-generated from REST PKI Core OpenAPI Specification**  
This client library is automatically generated from the official REST PKI Core API specification to ensure accuracy and completeness. 