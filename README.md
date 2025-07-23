# REST PKI Core Node.js Client Library - Developer Guide

A comprehensive JavaScript/TypeScript client library generator for the [REST PKI Core API](https://homolog.core.pki.rest/swagger/api/swagger.json), featuring auto-generated clients from OpenAPI specifications and a unified facade interface.

## 🛠️ For Developers - Project Overview

This project provides tools and configurations to generate a complete Node.js client library for REST PKI Core API, including:

- **Auto-generated API clients** from OpenAPI specifications
- **Unified facade client** with simplified interface
- **Complete TypeScript support** with full type definitions
- **Configurable generation process** with JSON configuration
- **Ready-to-publish npm package** with proper metadata

## 📁 Project Structure

```
RestPkiCoreNodeClient/
├── 🔧 Generation Tools
│   ├── generate-api-client.ps1              # PowerShell generation script
│   ├── openapi-generator-config.json        # Complete OpenAPI Generator config
│   └── openapitools.json                    # OpenAPI tools configuration
│
├── 🎯 Custom Client Library
│   ├── rest-pki-core-client.ts             # TypeScript facade client
│   ├── rest-pki-core-client.js             # JavaScript facade client
│   ├── CLIENT_USAGE_GUIDE.md               # Complete client documentation
│   └── lib/                                # Legacy library files
│
├── 🤖 Generated Client (Output)
│   ├── generated-client/
│   │   ├── api/                            # 13 generated API classes
│   │   ├── model/                          # 130+ generated type definitions
│   │   ├── dist/                           # Compiled JavaScript output
│   │   ├── package.json                    # NPM package configuration
│   │   └── README.md                       # User-focused documentation
│   └── [All files generated from OpenAPI spec]
│
└── 📚 Documentation
    ├── README.md                           # This developer guide
    └── [Generated documentation files]
```

## 🚀 Quick Start for Developers

### 1. Clone and Setup

```bash
git clone <repository-url>
cd RestPkiCoreNodeClient

# Ensure you have OpenAPI Generator CLI installed
npm install @openapitools/openapi-generator-cli -g
# or use the local installation via npx
```

### 2. Generate the Client

```powershell
# Run the PowerShell script to generate everything
powershell -ExecutionPolicy Bypass -File .\generate-api-client.ps1 -Force

# Or on Unix systems, you can call the OpenAPI generator directly:
# npx @openapitools/openapi-generator-cli generate -c openapi-generator-config.json
```

### 3. Build and Test

```bash
cd generated-client
npm install
npm run build    # Compile TypeScript
npm test        # Run tests (if configured)
cd ..
```

### 4. Development Workflow

```bash
# Make changes to configuration
edit openapi-generator-config.json

# Regenerate client
.\generate-api-client.ps1 -Force

# Test the facade client
node rest-pki-core-client.js

# Or test with TypeScript
npx ts-node rest-pki-core-client.ts
```

## ⚙️ Generation Configuration

The library uses a comprehensive JSON configuration file for OpenAPI generation:

### `openapi-generator-config.json`

```json
{
  "generatorName": "typescript-node",
  "inputSpec": "https://homolog.core.pki.rest/swagger/api/swagger.json",
  "outputDir": "./generated-client",
  "additionalProperties": {
    "npmName": "restpki-core-client",
    "npmVersion": "1.0.2",
    "supportsES6": true,
    "withInterfaces": true,
    "typescriptThreePlus": true,
    "emitJSDoc": true,
    "withNodeImports": true,
    "npmRepository": "https://github.com/your-username/rest-pki-core-node-client",
    "npmDescription": "REST PKI Core Node.js Client Library",
    "modelPropertyNaming": "camelCase",
    "paramNaming": "camelCase",
    "enumPropertyNaming": "UPPERCASE",
    "stringEnums": true,
    "usePromises": true,
    "useRxJS": false,
    "platform": "node",
    "withSeparateModelsAndApi": true,
    "modelPackage": "model",
    "apiPackage": "api",
    "sortParamsByRequiredFlag": true,
    "ensureUniqueParams": true,
    "allowUnicodeIdentifiers": false,
    "disallowAdditionalPropertiesIfNotPresent": false,
    "prependFormOrBodyParameters": false,
    "legacyDiscriminatorBehavior": false,
    "useObjectParameters": false
  },
  "globalProperties": {
    "models": "",
    "apis": "",
    "supportingFiles": "true",
    "modelTests": "false",
    "modelDocs": "false",
    "apiTests": "false",
    "apiDocs": "false"
  }
}
```

### Configuration Options Explained

- **`generatorName`**: Uses `typescript-node` for Node.js TypeScript client
- **`inputSpec`**: REST PKI Core OpenAPI specification URL
- **`outputDir`**: Output directory for generated files
- **`npmName`**: Package name for publishing to npm
- **`supportsES6`**: Enables ES6+ features
- **`withInterfaces`**: Generates TypeScript interfaces
- **`typescriptThreePlus`**: Uses TypeScript 3+ features
- **`modelPropertyNaming`**: Converts property names to camelCase
- **`usePromises`**: Uses Promise-based API instead of callbacks

## 🔧 Development Tools

### PowerShell Generation Script

The `generate-api-client.ps1` script automates the entire generation process:

```powershell
param(
    [switch]$Force = $false
)

# Check if OpenAPI Generator CLI is available
if (!(Get-Command "openapi-generator-cli" -ErrorAction SilentlyContinue)) {
    Write-Host "OpenAPI Generator CLI not found. Installing..." -ForegroundColor Yellow
    npm install -g @openapitools/openapi-generator-cli
}

# Remove existing generated client if Force is specified
if ($Force -and (Test-Path "generated-client")) {
    Write-Host "Removing existing generated-client directory..." -ForegroundColor Yellow
    Remove-Item -Recurse -Force "generated-client"
}

# Generate the client
Write-Host "Generating REST PKI Core client..." -ForegroundColor Green
openapi-generator-cli generate -c openapi-generator-config.json

# Navigate to generated client and install dependencies
cd generated-client
Write-Host "Installing dependencies..." -ForegroundColor Green
npm install

# Build TypeScript
Write-Host "Building TypeScript..." -ForegroundColor Green
npx tsc

Write-Host "Client generation completed successfully!" -ForegroundColor Green
```

### Manual Generation Commands

```bash
# Generate using npx (recommended)
npx @openapitools/openapi-generator-cli generate -c openapi-generator-config.json

# Or using global installation
openapi-generator-cli generate -c openapi-generator-config.json

# Validate configuration before generation
npx @openapitools/openapi-generator-cli config-help -g typescript-node
```

## 📦 Generated Files Overview

### API Classes (13 files)
- `AuthenticationApi.ts` - Authentication operations
- `CadesSignatureApi.ts` - CAdES signature operations
- `DocumentsApi.ts` - Document management
- `DocumentKeysApi.ts` - Document key allocation
- `PadesSignatureApi.ts` - PAdES signature operations
- `PadesVisualPositioningPresetsApi.ts` - Visual positioning
- `PdfApi.ts` - PDF processing operations
- `SignatureApi.ts` - General signature operations
- `SignatureInspectionApi.ts` - Signature validation
- `SignatureSessionsApi.ts` - Signature session management
- `TimestampApi.ts` - Timestamp services
- `UploadApi.ts` - File upload operations
- `XmlSignatureApi.ts` - XML signature operations

### Model Types (130+ files)
All request/response models, enums, and type definitions are generated in the `model/` directory with full TypeScript support.

### Package Files
- `package.json` - NPM package configuration
- `tsconfig.json` - TypeScript compilation settings
- `index.ts` - Main export file
- `README.md` - User documentation

## 🎯 Facade Client Development

The facade client (`rest-pki-core-client.ts`) provides a unified interface over all generated APIs:

### Key Features
- **Single Configuration**: One configuration object for all APIs
- **Unified Error Handling**: Consistent error handling across all operations
- **Response Wrapping**: Standardized response format with status codes
- **Type Safety**: Full TypeScript support with IntelliSense
- **Method Consistency**: Standardized method naming conventions

### Development Pattern

```typescript
// Facade client structure
export class RestPkiCoreClient {
  private config: ClientConfig;
  private apis: {
    documents: DocumentsApi;
    signatures: PadesSignatureApi;
    // ... other APIs
  };

  constructor(config: ClientConfig) {
    this.config = config;
    this.initializeApis();
  }

  // Wrapper methods for each API operation
  async getDocument(id: string): Promise<ApiResponse<DocumentModel>> {
    try {
      const response = await this.apis.documents.apiDocumentsIdGet(id);
      return {
        success: true,
        data: response.data,
        status: response.status,
        headers: response.headers
      };
    } catch (error) {
      return this.handleError(error);
    }
  }
}
```

## 🔄 Updating the Generated Client

### When API Changes
1. The OpenAPI specification is updated automatically
2. Run the generation script to get latest changes:
   ```powershell
   .\generate-api-client.ps1 -Force
   ```

### When Configuration Changes
1. Edit `openapi-generator-config.json`
2. Regenerate the client
3. Test the changes
4. Update facade client if needed

### Version Management
1. Update version in `openapi-generator-config.json`
2. Regenerate client
3. Update `package.json` version
4. Commit and tag release

## 📋 Development Checklist

### Before Generation
- [ ] OpenAPI Generator CLI is installed
- [ ] Configuration file is valid
- [ ] Output directory is clean (use `-Force` if needed)
- [ ] Internet connection for downloading OpenAPI spec

### After Generation
- [ ] Generated files compile without errors
- [ ] TypeScript definitions are complete
- [ ] Package.json has correct metadata
- [ ] README.md is appropriate for users
- [ ] No sensitive information in generated files

### Before Publishing
- [ ] Version number is incremented
- [ ] All tests pass
- [ ] Documentation is up to date
- [ ] License file is present
- [ ] Repository URL is correct

## 🧪 Testing Strategy

### Unit Tests
```bash
cd generated-client
npm test  # Run generated tests (if configured)
```

### Integration Tests
```javascript
// Test facade client functionality
const client = createRestPkiCoreClient({
  baseUrl: 'https://homolog.core.pki.rest',
  apiKey: process.env.REST_PKI_API_KEY
});

// Test connection
await client.testConnection();

// Test document operations
const documents = await client.getDocuments();
```

### Manual Testing
```bash
# Test generated APIs directly
node -e "
const { DocumentsApi } = require('./generated-client/dist/api');
const api = new DocumentsApi('https://homolog.core.pki.rest');
api.defaultHeaders = { 'X-Api-Key': 'test-key' };
console.log('API instance created successfully');
"
```

## 📊 Project Statistics

- **13 API Classes**: Complete coverage of REST PKI Core
- **130+ Type Definitions**: Full TypeScript support
- **Zero Manual Code**: Everything generated from OpenAPI spec
- **Full Documentation**: JSDoc comments in all generated code
- **npm Ready**: Configured for immediate publishing

## 🚀 Publishing Workflow

### Preparation
```bash
cd generated-client
npm version patch  # or minor/major
npm run build
npm pack --dry-run  # Test packaging
```

### Publishing
```bash
npm login
npm publish

# Or with tag
npm publish --tag beta
```

### Post-Publishing
```bash
npm view restpki-core-client  # Verify publication
```

## 🤝 Contributing

### Development Setup
1. Fork the repository
2. Clone your fork
3. Install dependencies
4. Make changes to configuration or facade client
5. Regenerate and test
6. Submit pull request

### Code Style
- Follow TypeScript best practices
- Use consistent naming conventions
- Include JSDoc comments for public APIs
- Maintain backward compatibility when possible

## 📖 Additional Resources

### OpenAPI Generator
- [Documentation](https://openapi-generator.tech/docs/generators/typescript-node)
- [Configuration Options](https://openapi-generator.tech/docs/generators/typescript-node#config-options)
- [GitHub Repository](https://github.com/OpenAPITools/openapi-generator)

### REST PKI Core
- [API Documentation](https://docs.lacunasoftware.com/en-us/articles/rest-pki/core/)
- [OpenAPI Specification](https://homolog.core.pki.rest/swagger/api/swagger.json)
- [Support Portal](https://lacuna.help/)

## 🏷️ Version History

- **v1.0.2** - Initial release with full API coverage
- **v1.0.0** - Beta release with basic functionality

## 📄 License

MIT License - See LICENSE file for details.

---

**Developer Note**: This project uses OpenAPI Generator to automatically create client libraries from the REST PKI Core API specification. The generated code should not be manually edited as it will be overwritten on regeneration. All customizations should be made in the facade client or configuration files.
