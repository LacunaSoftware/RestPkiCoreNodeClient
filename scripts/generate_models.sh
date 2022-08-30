#!/bin/bash
set -e

SWAGGER_CODEGEN_CLI_VERSION=3.0.35

echo "Pulling swagger codegen's docker image if don't exist"
docker pull swaggerapi/swagger-codegen-cli-v3:${SWAGGER_CODEGEN_CLI_VERSION}

echo "Generating code"
docker run --rm -v ${PWD}:/local swaggerapi/swagger-codegen-cli-v3:${SWAGGER_CODEGEN_CLI_VERSION} generate \
    -i https://core.pki.rest/swagger/api/swagger.json \
    -l typescript-axios \
    -o /local/out/node

echo "Copying models to the project"
cp ${PWD}/out/node/models/* ${PWD}/lib/models

echo "Removing temporary folders"
rm -rf ${PWD}/out