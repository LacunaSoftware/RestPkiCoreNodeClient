# PowerShell script to generate JavaScript library with TypeScript definitions from OpenAPI spec
param(
    [string]$ConfigFile = "./openapi-generator-config.json",
    [switch]$Force = $false
)

$ErrorActionPreference = "Stop"

Write-Host "=== OpenAPI Client Generator Script ===" -ForegroundColor Green

try {
    if (-not (Test-Path $ConfigFile)) {
        throw "Configuration file not found: $ConfigFile"
    }

    $config = Get-Content $ConfigFile -Raw | ConvertFrom-Json
    Write-Host "Configuration loaded successfully!" -ForegroundColor Green
    
    $ApiSpecUrl = $config.inputSpec
    $OutputDir = $config.outputDir
    $PackageName = $config.additionalProperties.npmName
    $PackageVersion = $config.additionalProperties.npmVersion
    
    Write-Host "API Spec URL: $ApiSpecUrl" -ForegroundColor Cyan
    Write-Host "Output Directory: $OutputDir" -ForegroundColor Cyan

    Write-Host "Checking Node.js installation..." -ForegroundColor Yellow
    $nodeVersion = node --version 2>&1
    if ($LASTEXITCODE -ne 0) {
        throw "Node.js is not installed or not in PATH."
    }
    Write-Host "Node.js version: $nodeVersion" -ForegroundColor Green

    Write-Host "Checking OpenAPI Generator CLI..." -ForegroundColor Yellow
    $openApiGenVersion = npx @openapitools/openapi-generator-cli version 2>&1
    if ($LASTEXITCODE -ne 0) {
        Write-Host "Installing OpenAPI Generator CLI..." -ForegroundColor Yellow
        npm install -g @openapitools/openapi-generator-cli
    }

    if (Test-Path $OutputDir) {
        if ($Force) {
            Write-Host "Force flag set - removing existing output directory: $OutputDir" -ForegroundColor Yellow
            Remove-Item -Path $OutputDir -Recurse -Force
        } else {
            $response = Read-Host "Output directory exists. Remove it? (y/n)"
            if ($response -eq 'y' -or $response -eq 'Y' -or $response -eq 'yes') {
                Write-Host "Removing existing output directory: $OutputDir" -ForegroundColor Yellow
                Remove-Item -Path $OutputDir -Recurse -Force
            } else {
                throw "Operation cancelled."
            }
        }
    }
    New-Item -ItemType Directory -Path $OutputDir -Force | Out-Null
    Write-Host "Output directory prepared: $OutputDir" -ForegroundColor Green

    Write-Host "Generating TypeScript client..." -ForegroundColor Yellow
    npx @openapitools/openapi-generator-cli generate -c $ConfigFile --global-property=supportingFiles,models,apis
    
    if ($LASTEXITCODE -ne 0) {
        throw "OpenAPI code generation failed"
    }

    # Copy the REST PKI Core client files to the generated client
    Write-Host "Adding REST PKI Core client files..." -ForegroundColor Yellow
    
    # Copy TypeScript client file
    if (Test-Path "rest-pki-core-client.ts") {
        Copy-Item -Path "rest-pki-core-client.ts" -Destination "$OutputDir/rest-pki-core-client.ts"
        Write-Host "  TypeScript client file added: rest-pki-core-client.ts" -ForegroundColor Green
    } else {
        Write-Warning "TypeScript client file not found: rest-pki-core-client.ts"
    }
    
    # Copy JavaScript client file
    if (Test-Path "rest-pki-core-client.js") {
        Copy-Item -Path "rest-pki-core-client.js" -Destination "$OutputDir/rest-pki-core-client.js"
        Write-Host "  JavaScript client file added: rest-pki-core-client.js" -ForegroundColor Green
    } else {
        Write-Warning "JavaScript client file not found: rest-pki-core-client.js"
    }

  

    # Update the main API exports to include the client
    Write-Host "Updating main API exports to include client..." -ForegroundColor Yellow
    $apiIndexPath = Join-Path $OutputDir "api.ts"
    if (Test-Path $apiIndexPath) {
        $apiIndexContent = Get-Content $apiIndexPath -Raw
        $clientExport = "`n// REST PKI Core Client`nexport * from './rest-pki-core-client';`n"
        $updatedContent = $apiIndexContent + $clientExport
        Set-Content -Path $apiIndexPath -Value $updatedContent
        Write-Host "  Main API index updated to export the client" -ForegroundColor Green
    }
    
    # Update the JavaScript dist API exports if it exists
    $apiJsIndexPath = Join-Path $OutputDir "dist/api.js"
    if (Test-Path $apiJsIndexPath) {
        $apiJsContent = Get-Content $apiJsIndexPath -Raw
        $clientJsExport = "`n// REST PKI Core Client`nmodule.exports = { ...module.exports, ...require('./rest-pki-core-client') };`n"
        $updatedJsContent = $apiJsContent + $clientJsExport
        Set-Content -Path $apiJsIndexPath -Value $updatedJsContent
        Write-Host "  JavaScript API index updated to export the client" -ForegroundColor Green
    }

      # Install dependencies and compile TypeScript
      Write-Host "Installing dependencies and compiling TypeScript..." -ForegroundColor Yellow
      $originalLocation = Get-Location
      try {
          Set-Location $OutputDir
          if (Test-Path "package.json") {
              Write-Host "Installing npm dependencies..." -ForegroundColor Cyan
              npm install
              if ($LASTEXITCODE -ne 0) {
                  Write-Warning "Failed to install dependencies. You may need to run 'npm install' manually."
              } else {
                  Write-Host "Dependencies installed successfully!" -ForegroundColor Green
              }
              
              Write-Host "Compiling TypeScript..." -ForegroundColor Cyan
              npx tsc
              if ($LASTEXITCODE -eq 0) {
                  Write-Host "TypeScript compilation completed successfully!" -ForegroundColor Green
                  
                  # Ensure the client files are also compiled to the dist folder
                  if (Test-Path "rest-pki-core-client.js") {
                      if (Test-Path "dist") {
                          Copy-Item -Path "rest-pki-core-client.js" -Destination "dist/rest-pki-core-client.js" -Force
                          Write-Host "  Client JavaScript file copied to dist folder" -ForegroundColor Green
                      }
                  }
              } else {
                  Write-Warning "TypeScript compilation had issues. Check the output above for details."
              }
          } else {
              Write-Warning "No package.json found in generated client. Dependencies may need to be installed manually."
          }
      }
      finally {
          Set-Location $originalLocation
      }

    Write-Host "`n=== Generation Complete ===" -ForegroundColor Green
    Write-Host "Generated client location: $OutputDir" -ForegroundColor Cyan
    Write-Host "Package name: $PackageName" -ForegroundColor Cyan
    Write-Host "Package version: $PackageVersion" -ForegroundColor Cyan
    
    # Show generated structure overview
    Write-Host "`nGenerated structure overview:" -ForegroundColor Yellow
    if (Test-Path (Join-Path $OutputDir "api")) {
        $apiFiles = Get-ChildItem (Join-Path $OutputDir "api") -Filter "*.ts" | Measure-Object
        Write-Host "  API files: $($apiFiles.Count)" -ForegroundColor Gray
    }
    if (Test-Path (Join-Path $OutputDir "model")) {
        $modelFiles = Get-ChildItem (Join-Path $OutputDir "model") -Filter "*.ts" | Measure-Object
        Write-Host "  Model files: $($modelFiles.Count)" -ForegroundColor Gray
    }
    if (Test-Path (Join-Path $OutputDir "rest-pki-core-client.ts")) {
        Write-Host "  REST PKI Core Client: Available (TypeScript + JavaScript)" -ForegroundColor Green
    }
    if (Test-Path (Join-Path $OutputDir "dist")) {
        Write-Host "  Compiled JavaScript: Available" -ForegroundColor Green
    }
    if (Test-Path (Join-Path $OutputDir "package.json")) {
        Write-Host "  Package configuration: Available" -ForegroundColor Green
    }

    Write-Host "`nNext steps:" -ForegroundColor Yellow
    Write-Host "1. Review the generated client in: $OutputDir" -ForegroundColor White
    Write-Host "2. Use the RestPkiCoreClient for easier API access" -ForegroundColor White
    Write-Host "3. Import the client: import { RestPkiCoreClient } from 'your-package'" -ForegroundColor White
    Write-Host "4. Check the examples for usage patterns" -ForegroundColor White
}
catch {
    Write-Host "ERROR: $($_.Exception.Message)" -ForegroundColor Red
    exit 1
}

Write-Host "Script completed successfully!" -ForegroundColor Green 