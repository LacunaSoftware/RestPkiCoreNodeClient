# REST PKI Core Client - Usage Guide

This guide provides comprehensive documentation for using the REST PKI Core Client, a unified JavaScript/TypeScript client for all REST PKI Core APIs.

## Table of Contents

- [Installation](#installation)
- [Configuration](#configuration)
- [Client Initialization](#client-initialization)
- [Basic Usage](#basic-usage)
- [Document Management](#document-management)
- [Digital Signatures](#digital-signatures)
- [Advanced Features](#advanced-features)
- [Error Handling](#error-handling)
- [TypeScript Support](#typescript-support)
- [Examples](#examples)

## Installation

The REST PKI Core Client is included with the generated API client. After generating your client:

```bash
cd generated-client
npm install
```

## Configuration

The client requires basic configuration with your REST PKI Core API credentials:

```javascript
const config = {
    baseUrl: 'https://core.pki.rest',     // or 'https://homolog.core.pki.rest' for testing
    apiKey: 'your-api-key-here',
    customHeaders: {                       // Optional
        'X-Custom-Header': 'value'
    },
    timeout: 30000,                       // Optional, in milliseconds
    ignoreSslErrors: false                // Optional, for development only
};
```

## Client Initialization

### TypeScript

```typescript
import { createRestPkiCoreClient } from './rest-pki-core-client';

// Create client instance
const client = createRestPkiCoreClient({
    baseUrl: 'https://homolog.core.pki.rest',
    apiKey: 'your-api-key-here'
});

// Test connection
try {
    await client.testConnection();
    console.log('Connected to REST PKI Core!');
} catch (error) {
    console.error('Connection failed:', error);
}

// Get a document
const document = await client.getDocument('document-id');
console.log('Document:', document.data);
```

### JavaScript

```javascript
const { createRestPkiCoreClient } = require('./rest-pki-core-client');

// Create client instance
const client = createRestPkiCoreClient({
    baseUrl: 'https://homolog.core.pki.rest',
    apiKey: 'your-api-key-here'
});

// Use async/await or promises
client.getDocument('document-id')
    .then(result => {
        console.log('Document:', result.data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
```

## Basic Usage

### Document Management

```typescript
// Get document by ID
const document = await client.getDocument('doc-123');
console.log('Document status:', document.data.status);

// Get document signers
const signers = await client.getDocumentSigners('doc-123');
console.log('Number of signers:', signers.data.length);

// Get document by key
const docByKey = await client.getDocumentByKey('doc-key-456');
console.log('Document name:', docByKey.data.name);
```

### Document Keys

```typescript
// Allocate a single document key
const keyRequest = {
    // Add your key allocation parameters
};
const documentKey = await client.allocateDocumentKey(keyRequest);
console.log('Allocated key:', documentKey.data.key);

// Allocate multiple keys
const batchRequest = {
    count: 10
    // Add other batch parameters
};
const keyBatch = await client.allocateDocumentKeyBatch(batchRequest);
console.log('Allocated keys:', keyBatch.data.length);

// Get unused keys
const unusedKeys = await client.getUnusedDocumentKeys();
console.log('Available keys:', unusedKeys.data.items.length);
```

### Signature Sessions

```typescript
// Create a signature session
const sessionRequest = {
    documents: [
        {
            key: 'doc-key-123'
        }
    ],
    // Add other session parameters
};
const session = await client.createSignatureSession(sessionRequest);
console.log('Session ID:', session.data.id);

// Get session status
const sessionStatus = await client.getSignatureSession(session.data.id);
console.log('Session status:', sessionStatus.data.status);

// Wait for completion
const completedSession = await client.waitForSignatureSessionCompletion(session.data.id);
console.log('Session completed:', completedSession.data.status);
```

### PAdES (PDF) Signatures

```typescript
// Create PAdES signature V2 (recommended)
const padesRequest = {
    pdfToSign: {
        // PDF file reference
        content: 'base64-encoded-pdf-content'
    },
    visualRepresentation: {
        // Visual signature appearance
        position: {
            pageNumber: 1,
            left: 100,
            top: 100,
            right: 300,
            bottom: 150
        },
        text: {
            text: 'Signed by {{signerName}}'
        }
    },
    signaturePolicyId: 'policy-id',
    certificateFile: 'base64-certificate',
    // Add other parameters
};

const padesResponse = await client.createPadesSignatureV2(padesRequest);
console.log('Signature token:', padesResponse.data.token);

// Complete with signed bytes (typically done after user signs)
const completionRequest = {
    signature: 'base64-signed-bytes'
};
const completedSignature = await client.completePadesSignatureV2(
    padesResponse.data.token, 
    completionRequest
);
console.log('Signed PDF:', completedSignature.data.signedPdf);
```

### CAdES Signatures

```typescript
// Create CAdES signature V3 (latest)
const cadesRequest = {
    contentToSign: {
        content: 'base64-content-to-sign'
    },
    signaturePolicyId: 'policy-id',
    certificate: 'base64-certificate',
    // Add other parameters
};

const cadesResponse = await client.createCadesSignatureV3(cadesRequest);
console.log('Signature token:', cadesResponse.data.token);

// Complete with signed bytes
const cadesCompletion = {
    signature: 'base64-signed-bytes'
};
const completedCades = await client.completeCadesSignature(
    cadesResponse.data.token,
    cadesCompletion
);
console.log('CAdES signature:', completedCades.data.cms);
```

### XML Signatures

```typescript
// Create full XML signature
const xmlRequest = {
    xml: 'base64-xml-content',
    signaturePolicyId: 'xml-policy-id',
    certificate: 'base64-certificate',
    // Add other XML signature parameters
};

const xmlResponse = await client.createFullXmlSignature(xmlRequest);
console.log('XML signature token:', xmlResponse.data.token);

// Complete XML signature
const xmlCompletion = {
    signature: 'base64-signed-bytes'
};
const completedXml = await client.completeXmlSignature(
    xmlResponse.data.token,
    xmlCompletion
);
console.log('Signed XML:', completedXml.data.signedXml);
```

### Authentication

```typescript
// Prepare authentication
const authRequest = {
    certificate: 'base64-certificate',
    // Add other auth parameters
};

const authResponse = await client.prepareAuthentication(authRequest);
console.log('Challenge:', authResponse.data.challenge);

// Complete authentication (after user signs the challenge)
const authCompletion = {
    signature: 'base64-signed-challenge'
};
const completedAuth = await client.completeAuthentication(
    authResponse.data.token,
    authCompletion
);
console.log('Authentication result:', completedAuth.data.validationResults);
```

### PDF Processing

```typescript
// Add marks to PDF
const marksRequest = {
    pdf: {
        content: 'base64-pdf-content'
    },
    marks: [
        {
            type: 'Text',
            text: 'CONFIDENTIAL',
            position: {
                pageNumber: 1,
                left: 50,
                top: 50
            },
            style: {
                fontSize: 12,
                color: 'red'
            }
        }
    ]
};

const markedPdf = await client.addPdfMarks(marksRequest);
console.log('Marked PDF:', markedPdf.data.pdf.content);

// Stamp PDF
const stampRequest = {
    pdf: {
        content: 'base64-pdf-content'
    },
    stamp: {
        text: 'DRAFT',
        position: {
            pageNumber: 1,
            left: 100,
            top: 100
        }
    }
};

const stampedPdf = await client.stampPdf(stampRequest);
console.log('Stamped PDF:', stampedPdf.data.pdf.content);
```

### File Uploads

```typescript
// Plain upload
const uploadRequest = {
    file: {
        content: 'base64-file-content',
        name: 'document.pdf',
        mimeType: 'application/pdf'
    }
};

const uploaded = await client.plainUpload(uploadRequest);
console.log('File ID:', uploaded.data.id);

// Multipart upload for large files
const multipartRequest = {
    fileName: 'large-document.pdf',
    mimeType: 'application/pdf',
    size: 10485760 // 10MB
};

const uploadSession = await client.beginMultipartUpload(multipartRequest);
console.log('Upload token:', uploadSession.data.token);

// Upload parts (typically in chunks)
for (let i = 1; i <= totalParts; i++) {
    const partRequest = {
        content: 'base64-part-content'
    };
    await client.uploadPart(uploadSession.data.token, i, partRequest);
}

// Complete upload
const completeRequest = {
    parts: [
        { partNumber: 1, etag: 'etag1' },
        { partNumber: 2, etag: 'etag2' }
        // ... other parts
    ]
};
const completed = await client.completeMultipartUpload(
    uploadSession.data.token,
    completeRequest
);
console.log('Upload completed:', completed.data.fileId);
```

### Signature Inspection

```typescript
// Inspect a signature
const inspectionRequest = {
    signatureFile: {
        content: 'base64-signature-content'
    },
    // Add other inspection parameters
};

const inspection = await client.inspectSignature(inspectionRequest);
console.log('Signatures found:', inspection.data.signatures.length);
console.log('Validation results:', inspection.data.signatures[0].validationResults);
```

### Timestamps

```typescript
// Issue timestamp
const timestampRequest = {
    content: 'base64-content-to-timestamp'
};

const timestamp = await client.issueTimestamp('plan-id', timestampRequest);
console.log('Timestamp token:', timestamp.data.token);

// TSP timestamp
const tspRequest = {
    hashAlgorithm: 'SHA-256',
    hashedMessage: 'base64-hash'
};

const tspTimestamp = await client.createTspTimestamp('tsp-id', tspRequest);
console.log('TSP response:', tspTimestamp.data.timestampToken);
```

## Error Handling

The client provides comprehensive error handling:

```typescript
try {
    const document = await client.getDocument('invalid-id');
} catch (error) {
    if (error.response) {
        // API returned an error response
        console.error('API Error:', error.response.status);
        console.error('Error body:', error.response.data);
    } else if (error.request) {
        // Request was made but no response received
        console.error('Network Error:', error.message);
    } else {
        // Something else happened
        console.error('Error:', error.message);
    }
}

// Using response status checking
const result = await client.getDocument('doc-id');
if (result.statusCode === 200) {
    console.log('Success:', result.data);
} else {
    console.error('Unexpected status:', result.statusCode);
}
```

## Advanced Features

### Accessing Underlying APIs

```typescript
// Get direct access to underlying APIs for advanced usage
const apis = client.getApis();

// Use raw API directly
const rawResult = await apis.documents.apiDocumentsIdGet('doc-id');

// Combine facade methods with raw API calls
const document = await client.getDocument('doc-id');
const rawSigners = await apis.documents.apiDocumentsIdSignersGet(document.data.id);
```

### Custom Headers and Configuration

```typescript
// Set custom headers for specific operations
client.updateConfig({
    customHeaders: {
        'Accept-Language': 'pt-BR',
        'X-Request-ID': 'unique-request-id'
    }
});

// Different configurations for different environments
const prodConfig = {
    baseUrl: 'https://core.pki.rest',
    apiKey: process.env.PROD_API_KEY
};

const testConfig = {
    baseUrl: 'https://homolog.core.pki.rest',
    apiKey: process.env.TEST_API_KEY
};

const client = createRestPkiCoreClient(
    process.env.NODE_ENV === 'production' ? prodConfig : testConfig
);
```

### Batch Operations

```typescript
// Process multiple documents
const documentIds = ['doc-1', 'doc-2', 'doc-3'];

const documents = await Promise.all(
    documentIds.map(id => client.getDocument(id))
);

console.log('Processed documents:', documents.length);

// Error handling for batch operations
const results = await Promise.allSettled(
    documentIds.map(id => client.getDocument(id))
);

results.forEach((result, index) => {
    if (result.status === 'fulfilled') {
        console.log(`Document ${index + 1}:`, result.value.data);
    } else {
        console.error(`Error for document ${index + 1}:`, result.reason);
    }
});
```

### Connection Management

```typescript
// Test connection with retry logic
async function connectWithRetry(client, maxRetries = 3) {
    for (let i = 0; i < maxRetries; i++) {
        try {
            await client.testConnection();
            console.log('Connected successfully!');
            return true;
        } catch (error) {
            console.log(`Connection attempt ${i + 1} failed:`, error.message);
            if (i === maxRetries - 1) throw error;
            await new Promise(resolve => setTimeout(resolve, 1000 * (i + 1))); // Exponential backoff
        }
    }
    return false;
}

await connectWithRetry(client);
```

## TypeScript Support

The client is fully TypeScript-compatible, providing type definitions for all methods and responses.

## Examples

### Basic Usage Example

```typescript
import { createRestPkiCoreClient } from './rest-pki-core-client';

// Create client instance
const client = createRestPkiCoreClient({
    baseUrl: 'https://homolog.core.pki.rest',
    apiKey: 'your-api-key-here'
});

// Test connection
try {
    await client.testConnection();
    console.log('Connected to REST PKI Core!');
} catch (error) {
    console.error('Connection failed:', error);
}

// Get a document
const document = await client.getDocument('document-id');
console.log('Document:', document.data);
```

### Advanced Usage Example

```typescript
import { createRestPkiCoreClient } from './rest-pki-core-client';

// Create client instance
const client = createRestPkiCoreClient({
    baseUrl: 'https://homolog.core.pki.rest',
    apiKey: 'your-api-key-here'
});

// Test connection
try {
    await client.testConnection();
    console.log('Connected to REST PKI Core!');
} catch (error) {
    console.error('Connection failed:', error);
}

// Get a document
const document = await client.getDocument('document-id');
console.log('Document:', document.data);

// Get document signers
const signers = await client.getDocumentSigners('doc-123');
console.log('Number of signers:', signers.data.length);

// Get document by key
const docByKey = await client.getDocumentByKey('doc-key-456');
console.log('Document name:', docByKey.data.name);

// Create a signature session
const sessionRequest = {
    documents: [
        {
            key: 'doc-key-123'
        }
    ],
    // Add other session parameters
};
const session = await client.createSignatureSession(sessionRequest);
console.log('Session ID:', session.data.id);

// Get session status
const sessionStatus = await client.getSignatureSession(session.data.id);
console.log('Session status:', sessionStatus.data.status);

// Wait for completion
const completedSession = await client.waitForSignatureSessionCompletion(session.data.id);
console.log('Session completed:', completedSession.data.status);

// Create PAdES signature V2 (recommended)
const padesRequest = {
    pdfToSign: {
        // PDF file reference
        content: 'base64-encoded-pdf-content'
    },
    visualRepresentation: {
        // Visual signature appearance
        position: {
            pageNumber: 1,
            left: 100,
            top: 100,
            right: 300,
            bottom: 150
        },
        text: {
            text: 'Signed by {{signerName}}'
        }
    },
    signaturePolicyId: 'policy-id',
    certificateFile: 'base64-certificate',
    // Add other parameters
};

const padesResponse = await client.createPadesSignatureV2(padesRequest);
console.log('Signature token:', padesResponse.data.token);

// Complete with signed bytes (typically done after user signs)
const completionRequest = {
    signature: 'base64-signed-bytes'
};
const completedSignature = await client.completePadesSignatureV2(
    padesResponse.data.token, 
    completionRequest
);
console.log('Signed PDF:', completedSignature.data.signedPdf);

// Create CAdES signature V3 (latest)
const cadesRequest = {
    contentToSign: {
        content: 'base64-content-to-sign'
    },
    signaturePolicyId: 'policy-id',
    certificate: 'base64-certificate',
    // Add other parameters
};

const cadesResponse = await client.createCadesSignatureV3(cadesRequest);
console.log('Signature token:', cadesResponse.data.token);

// Complete with signed bytes
const cadesCompletion = {
    signature: 'base64-signed-bytes'
};
const completedCades = await client.completeCadesSignature(
    cadesResponse.data.token,
    cadesCompletion
);
console.log('CAdES signature:', completedCades.data.cms);

// Create full XML signature
const xmlRequest = {
    xml: 'base64-xml-content',
    signaturePolicyId: 'xml-policy-id',
    certificate: 'base64-certificate',
    // Add other XML signature parameters
};

const xmlResponse = await client.createFullXmlSignature(xmlRequest);
console.log('XML signature token:', xmlResponse.data.token);

// Complete XML signature
const xmlCompletion = {
    signature: 'base64-signed-bytes'
};
const completedXml = await client.completeXmlSignature(
    xmlResponse.data.token,
    xmlCompletion
);
console.log('Signed XML:', completedXml.data.signedXml);

// Prepare authentication
const authRequest = {
    certificate: 'base64-certificate',
    // Add other auth parameters
};

const authResponse = await client.prepareAuthentication(authRequest);
console.log('Challenge:', authResponse.data.challenge);

// Complete authentication (after user signs the challenge)
const authCompletion = {
    signature: 'base64-signed-challenge'
};
const completedAuth = await client.completeAuthentication(
    authResponse.data.token,
    authCompletion
);
console.log('Authentication result:', completedAuth.data.validationResults);

// Add marks to PDF
const marksRequest = {
    pdf: {
        content: 'base64-pdf-content'
    },
    marks: [
        {
            type: 'Text',
            text: 'CONFIDENTIAL',
            position: {
                pageNumber: 1,
                left: 50,
                top: 50
            },
            style: {
                fontSize: 12,
                color: 'red'
            }
        }
    ]
};

const markedPdf = await client.addPdfMarks(marksRequest);
console.log('Marked PDF:', markedPdf.data.pdf.content);

// Stamp PDF
const stampRequest = {
    pdf: {
        content: 'base64-pdf-content'
    },
    stamp: {
        text: 'DRAFT',
        position: {
            pageNumber: 1,
            left: 100,
            top: 100
        }
    }
};

const stampedPdf = await client.stampPdf(stampRequest);
console.log('Stamped PDF:', stampedPdf.data.pdf.content);

// Plain upload
const uploadRequest = {
    file: {
        content: 'base64-file-content',
        name: 'document.pdf',
        mimeType: 'application/pdf'
    }
};

const uploaded = await client.plainUpload(uploadRequest);
console.log('File ID:', uploaded.data.id);

// Multipart upload for large files
const multipartRequest = {
    fileName: 'large-document.pdf',
    mimeType: 'application/pdf',
    size: 10485760 // 10MB
};

const uploadSession = await client.beginMultipartUpload(multipartRequest);
console.log('Upload token:', uploadSession.data.token);

// Upload parts (typically in chunks)
for (let i = 1; i <= totalParts; i++) {
    const partRequest = {
        content: 'base64-part-content'
    };
    await client.uploadPart(uploadSession.data.token, i, partRequest);
}

// Complete upload
const completeRequest = {
    parts: [
        { partNumber: 1, etag: 'etag1' },
        { partNumber: 2, etag: 'etag2' }
        // ... other parts
    ]
};
const completed = await client.completeMultipartUpload(
    uploadSession.data.token,
    completeRequest
);
console.log('Upload completed:', completed.data.fileId);

// Inspect a signature
const inspectionRequest = {
    signatureFile: {
        content: 'base64-signature-content'
    },
    // Add other inspection parameters
};

const inspection = await client.inspectSignature(inspectionRequest);
console.log('Signatures found:', inspection.data.signatures.length);
console.log('Validation results:', inspection.data.signatures[0].validationResults);

// Issue timestamp
const timestampRequest = {
    content: 'base64-content-to-timestamp'
};

const timestamp = await client.issueTimestamp('plan-id', timestampRequest);
console.log('Timestamp token:', timestamp.data.token);

// TSP timestamp
const tspRequest = {
    hashAlgorithm: 'SHA-256',
    hashedMessage: 'base64-hash'
};

const tspTimestamp = await client.createTspTimestamp('tsp-id', tspRequest);
console.log('TSP response:', tspTimestamp.data.timestampToken);
```

## Best Practices

1. **Always handle errors appropriately**
2. **Use TypeScript for better development experience**
3. **Test your connection before performing operations**  
4. **Use batch operations for multiple similar requests**
5. **Keep your API keys secure and use environment variables**
6. **Set appropriate timeouts for your use case**
7. **Use the facade methods instead of raw APIs when possible**
8. **Cache configuration objects for reuse**

## Support

For questions about the REST PKI Core API or this facade client:

- **API Documentation**: [REST PKI Core Docs](https://docs.lacunasoftware.com/en-us/articles/rest-pki/core/)
- **API Specification**: [Swagger JSON](https://homolog.core.pki.rest/swagger/api/swagger.json)
- **Support**: [lacuna.help](https://lacuna.help/)

## License

This facade client follows the same license as the generated OpenAPI client (MIT License). 