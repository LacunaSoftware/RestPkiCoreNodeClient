# REST PKI Core Node.js Client Library

A comprehensive JavaScript/TypeScript client library for the [REST PKI Core API](https://homolog.core.pki.rest/swagger/api/swagger.json), featuring both auto-generated clients and a facade interface.

## 🚀 Features

- ✅ **Auto-generated from OpenAPI Spec** - Always up-to-date with the latest API
- ✅ **Full TypeScript Support** - Complete type definitions and IntelliSense
- ✅ **JavaScript Compatible** - Works in any Node.js application
- ✅ **Comprehensive Facade Client** - Unified interface for all 13 API endpoints
- ✅ **Configuration-based Generation** - Fully customizable with JSON config
- ✅ **Promise-based API** - Modern async/await support
- ✅ **Error Handling** - Comprehensive error handling and response wrapping
- ✅ **All REST PKI Core Operations** - Complete coverage of every API endpoint

## 📦 What's Included

### Generated Files
- **13 API Classes**: AuthenticationApi, CadesSignatureApi, DocumentsApi, etc.
- **130+ Type Definitions**: Complete TypeScript models for all operations
- **Compiled JavaScript**: Ready-to-use JS files with type definitions

### Client Library
- **TypeScript Client**: `rest-pki-core-client.ts` - Full type safety
- **JavaScript Client**: `rest-pki-core-client.js` - JavaScript version
- **Unified Interface**: Single client for all operations with 80+ methods

### Configuration & Tools
- **JSON Configuration**: `openapi-generator-config.json` - Complete OpenAPI Generator config
- **PowerShell Script**: `generate-api-client-fixed.ps1` - Automated generation
- **Usage Examples**: Practical examples for all major operations

## For Devs - Quick Start

### 1. Generate the Client

```powershell
# Run the PowerShell script to generate everything
powershell -ExecutionPolicy Bypass -File .\generate-api-client-fixed.ps1 -Force
```

### 2. Install Dependencies

```bash
cd generated-client
npm install
npx tsc  # Compile TypeScript
cd ..
```

### 3. Use the Facade Client (Recommended)

#### TypeScript Example

```typescript
import { createRestPkiCoreClient } from './rest-pki-core-client';

const client = createRestPkiCoreClient({
    baseUrl: 'https://homolog.core.pki.rest',
    apiKey: 'your-api-key-here'
});

// Test connection
await client.testConnection();

// Get a document
const document = await client.getDocument('document-id');
console.log('Document:', document.data);

// Create PAdES signature
const padesRequest = { /* your request */ };
const signature = await client.createPadesSignatureV2(padesRequest);
```

#### JavaScript Example

```javascript
const { createRestPkiCoreClient } = require('./rest-pki-core-client');

const client = createRestPkiCoreClient({
    baseUrl: 'https://homolog.core.pki.rest',
    apiKey: 'your-api-key-here'
});

// Use async/await or promises
const document = await client.getDocument('document-id');
console.log('Document:', document.data);
```

### 4. Or Use Generated APIs Directly

```javascript
const { DocumentsApi, PadesSignatureApi } = require('./generated-client/dist/api');

const documentsApi = new DocumentsApi('https://homolog.core.pki.rest');
documentsApi.defaultHeaders = { 'X-Api-Key': 'your-api-key' };

const result = await documentsApi.apiDocumentsIdGet('document-id');
```

## 📋 Available Operations

The facade client provides unified access to all REST PKI Core operations:

### 🗂️ Document Management (4 methods)
- `getDocument(id)` - Get document details
- `getDocumentSigners(id)` - Get document signers  
- `getDocumentByKey(key)` - Get document by key
- And more...

### 🔑 Document Keys (4 methods)
- `allocateDocumentKey(request)` - Allocate single key
- `allocateDocumentKeyBatch(request)` - Allocate multiple keys
- `getDocumentKey(key)` - Get key details
- `getUnusedDocumentKeys()` - List unused keys

### ✍️ Signature Sessions (3 methods)
- `createSignatureSession(request)` - Create session
- `getSignatureSession(id)` - Get session status
- `waitForSignatureSessionCompletion(id)` - Wait for completion

### 📄 PAdES Signatures (6 methods)
- `createPadesSignature(request)` - Create PDF signature (V1)
- `createPadesSignatureV2(request)` - Create PDF signature (V2)
- `completePadesSignature(token, request)` - Complete signature
- `finalizePadesSignature(token)` - Finalize signature
- And more...

### 📦 CAdES Signatures (7 methods)  
- `createCadesSignature(request)` - Create CAdES (V1)
- `createCadesSignatureV2(request)` - Create CAdES (V2)
- `createCadesSignatureV3(request)` - Create CAdES (V3)
- `completeCadesSignature(token, request)` - Complete signature
- And more...

### 🏷️ XML Signatures (6 methods)
- `createFullXmlSignature(request)` - Full XML signature
- `createXmlElementSignature(request)` - Element signature
- `completeXmlSignature(token, request)` - Complete signature
- And more...

### 🔐 Authentication (7 methods)
- `prepareAuthentication(request)` - Prepare auth
- `completeAuthentication(token, request)` - Complete auth
- `createAuthentication(request)` - Create auth session
- And more...

### 📝 PDF Processing (2 methods)
- `addPdfMarks(request)` - Add marks to PDF
- `stampPdf(request)` - Stamp PDF

### 🎨 Visual Positioning (3 methods)
- `getFootnotePreset()` - Footnote positioning
- `getNewPagePreset()` - New page positioning  
- `getFootnoteBottomUpPreset()` - Bottom-up positioning

### 🔍 Other Operations
- **Signature Inspection**: `inspectSignature(request)`
- **Timestamps**: `issueTimestamp(id, request)`, `createTspTimestamp(id, request)`
- **File Uploads**: `plainUpload(request)`, `beginMultipartUpload(request)`, etc.
- **General Signatures**: `prepareSignature(request)`, `completeSignature(request)`

**Total: 80+ methods covering every REST PKI Core endpoint**

## 🛠️ Generation Configuration

The library uses a comprehensive JSON configuration for OpenAPI generation:

```json
{
  "generatorName": "typescript-node",
  "inputSpec": "https://homolog.core.pki.rest/swagger/api/swagger.json",
  "outputDir": "./generated-client",
  "additionalProperties": {
    "npmName": "restpki-core-client",
    "supportsES6": true,
    "withInterfaces": true,
    "typescriptThreePlus": true,
    "emitJSDoc": true,
    "withNodeImports": true,
    // ... 30+ more configuration options
  }
}
```

All OpenAPI Generator configuration options for TypeScript-Node are supported.

## 📁 Project Structure

```
RestPkiCoreNodeClient/
├── 🔧 Generation Tools
│   ├── generate-api-client-fixed.ps1       # PowerShell generation script
│   ├── openapi-generator-config.json       # Complete OpenAPI config
│   └── usage-example.js/ts                 # Original usage examples
│
├── 🎯 Client Library (Recommended)
│   ├── rest-pki-core-client.ts            # TypeScript client
│   ├── rest-pki-core-client.js            # JavaScript client
│   ├── client-example.js                  # Practical examples
│   └── CLIENT_USAGE_GUIDE.md              # Complete documentation
│
├── 🤖 Generated Client
│   ├── generated-client/
│   │   ├── api/                           # 13 API classes
│   │   ├── model/                         # 130+ type definitions
│   │   ├── dist/                          # Compiled JavaScript
│   │   └── package.json                   # Dependencies
│   └── [APIs & Models generated from spec]
│
└── 📚 Documentation
    ├── README.md                          # This file
    └── FACADE_USAGE_GUIDE.md              # Detailed usage guide
```

## 📖 Documentation

### Quick References
- **[Client Usage Guide](CLIENT_USAGE_GUIDE.md)** - Complete documentation with examples
- **[Practical Examples](client-example.js)** - Working code examples
- **[API Specification](https://homolog.core.pki.rest/swagger/api/swagger.json)** - Official OpenAPI spec

### Example Files
- `client-example.js` - Practical client usage examples
- `usage-example.js` - JavaScript examples with generated APIs
- `usage-example.ts` - TypeScript examples with full type safety

## 🔑 Authentication

All API calls require authentication via the `X-Api-Key` header:

```javascript
// Automatic with facade client
const client = createRestPkiCoreClient({
    baseUrl: 'https://homolog.core.pki.rest',
    apiKey: 'your-api-key-here'
});

// Manual with generated APIs
apiInstance.defaultHeaders = {
    'X-Api-Key': 'your-api-key-here'
};
```

## ⚠️ Error Handling

The facade client provides comprehensive error handling:

```javascript
try {
    const document = await client.getDocument('document-id');
    console.log('Success:', document.data);
} catch (error) {
    if (error.response) {
        console.error('API Error:', error.response.status);
        console.error('Error details:', error.response.data);
    } else {
        console.error('Network/Config Error:', error.message);
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
| 422 | Unprocessable Entity - API error |
| 500 | Internal Server Error |

## 🌍 Internationalization

The API supports multiple languages via the `Accept-Language` header:

```javascript
const client = createRestPkiCoreClient({
    baseUrl: 'https://homolog.core.pki.rest',
    apiKey: 'your-api-key',
    customHeaders: {
        'Accept-Language': 'pt-BR' // Portuguese
        // 'Accept-Language': 'en-US' // English (default)
    }
});
```

## 🔄 Regenerating the Client

To update the client with the latest API changes:

```powershell
# Regenerate with current configuration
.\generate-api-client-fixed.ps1 -Force

# Or modify the configuration first
# Edit openapi-generator-config.json
.\generate-api-client-fixed.ps1
```

## 🎯 Why Use the Facade Client?

### Unified Interface
- **Single import** instead of 13 separate API classes
- **Consistent method naming** across all operations  
- **Unified error handling** and response format
- **Built-in authentication** configuration

### Enhanced Developer Experience
- **Promise-based** with async/await support
- **Response wrapping** with status codes and headers
- **Configuration management** with updateable settings
- **Connection testing** and health checks

### Type Safety (TypeScript)
- **Full IntelliSense** support
- **Compile-time error checking**
- **Auto-completion** for all methods and parameters
- **Type-safe request/response** objects

### Convenience Methods
- **Batch operations** support
- **Direct API access** when needed for advanced usage
- **Configuration helpers** and utilities
- **Comprehensive examples** and documentation

## 📊 Library Stats

- **13 API Classes**: Complete coverage of all REST PKI Core APIs
- **80+ Facade Methods**: Every endpoint wrapped in easy-to-use methods
- **130+ Type Definitions**: Full TypeScript support for all models
- **600+ Lines of Documentation**: Comprehensive usage guide and examples
- **Zero External Dependencies**: Only uses generated OpenAPI client

## 🛠️ Advanced Usage

### Batch Operations

```javascript
// Process multiple documents
const documentIds = ['doc-1', 'doc-2', 'doc-3'];
const results = await Promise.allSettled(
    documentIds.map(id => client.getDocument(id))
);
```

### Direct API Access

```javascript
// Access underlying APIs for advanced usage
const apis = client.getApis();
const rawResult = await apis.documents.apiDocumentsIdGet('doc-id');
```

### Configuration Updates

```javascript
// Update configuration dynamically
client.updateConfig({
    timeout: 60000,
    customHeaders: { 'X-New-Header': 'value' }
});
```

## 🤝 Support

- **API Documentation**: [REST PKI Core Docs](https://docs.lacunasoftware.com/en-us/articles/rest-pki/core/)
- **API Specification**: [OpenAPI JSON](https://homolog.core.pki.rest/swagger/api/swagger.json)
- **Support Portal**: [lacuna.help](https://lacuna.help/)

## 📄 License

MIT License - This generated client library follows the MIT license for maximum compatibility.

---

**Generated from REST PKI Core OpenAPI Specification v3.1.0**  
**Last Updated**: Generated automatically from the latest API specification  
**Compatibility**: Node.js 12+, TypeScript 3.7+, Modern Browsers (via bundlers)

## Publishing

### Publishing to npmjs

This library is ready to be published to npm. Here are the steps to publish:

#### 1. Prepare for Publishing

```bash
# Navigate to the generated client directory
cd generated-client

# Update package.json version (if needed)
npm version patch  # or minor, major
# or manually edit package.json version field

# Ensure all dependencies are installed
npm install

# Build the TypeScript code
npm run build
# or
npx tsc

# Test the build
npm test  # if tests are configured
```

#### 2. Configure npm (if not already done)

```bash
# Login to npmjs
npm login

# Verify you're logged in
npm whoami
```

#### 3. Publish the Package

```bash
# Publish to npmjs
npm publish
```

#### 4. Publishing Options

```bash
# Publish with specific tag
npm publish --tag beta

# Publish as latest (default)
npm publish --tag latest

# Dry run (test without actually publishing)
npm publish --dry-run
```

#### 5. Package Configuration

The `package.json` in the generated client includes:

```json
{
  "name": "restpki-core-client",
  "version": "1.0.1",
  "description": "REST PKI Core Node.js Client Library",
  "main": "dist/index.js",
  "types": "dist/index.d.ts",
  "files": [
    "dist/**/*",
    "README.md"
  ],
  "keywords": [
    "rest-pki",
    "digital-signature",
    "pades",
    "cades",
    "xml-signature",
    "authentication",
    "api-client"
  ],
  "author": "Your Name",
  "license": "MIT",
  "repository": {
    "type": "git",
    "url": "https://github.com/your-username/rest-pki-core-node-client"
  }
}
```

#### 6. Publishing Checklist

Before publishing, ensure:

- [ ] Version number is updated in `package.json`
- [ ] TypeScript compilation succeeds (`npm run build`)
- [ ] All files are included in the `files` array
- [ ] README.md is up to date
- [ ] License file is present
- [ ] No sensitive data (API keys, etc.) is included
- [ ] Package name is available on npmjs

#### 7. After Publishing

```bash
# Verify the package is published
npm view restpki-core-client

# Install and test the published package
npm install restpki-core-client
```

#### 8. Updating Published Package

```bash
# Update version
npm version patch  # or minor, major

# Publish new version
npm publish

# Or publish with specific version
npm version 1.1.0
npm publish
```

#### 9. Unpublishing (if needed)

```bash
# Unpublish a specific version (within 72 hours)
npm unpublish restpki-core-client@1.0.1

# Unpublish entire package (within 72 hours)
npm unpublish restpki-core-client --force
```

**Note**: npm has strict policies about unpublishing. You can only unpublish within 72 hours of publishing, and you cannot republish the same version number.

#### 10. Publishing Script

You can create a publishing script in the root directory:

```bash
# publish.sh
#!/bin/bash
cd generated-client
npm version patch
npm run build
npm publish
echo "Published successfully!"
```

Make it executable:
```bash
chmod +x publish.sh
./publish.sh
```

---

**Ready to publish!** The generated client is fully configured for npm publishing with proper TypeScript definitions, comprehensive documentation, and all necessary metadata.
