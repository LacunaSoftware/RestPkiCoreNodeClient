#!/bin/bash
set -e

# Environment variables
SWAGGER_CODEGEN_CLI_VERSION=3.0.35

# Script folder
SCRIPT_DIR=$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )

echo "Creating temporary folder if don't exist"
tmp_dir=${SCRIPT_DIR}/../.temp
mkdir -p $tmp_dir

echo "Pulling swagger codegen's docker image if don't exist"
docker pull swaggerapi/swagger-codegen-cli-v3:${SWAGGER_CODEGEN_CLI_VERSION}

echo "Generating code"
docker run --rm -v ${tmp_dir}:/local swaggerapi/swagger-codegen-cli-v3:${SWAGGER_CODEGEN_CLI_VERSION} generate \
    -i https://core.pki.rest/swagger/api/swagger.json \
    -l typescript-axios \
    -o /local/out/node

echo "Copying models to the project"
cp ${tmp_dir}/out/node/models/* ${SCRIPT_DIR}/../lib/models

echo "Removing temporary files"
rm -rfv ${tmp_dir}
