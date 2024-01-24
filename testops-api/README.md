# Qase TestOps API specification

This project contains the necessary scripts to generate Software Development Kits (SDKs) for the Qase.io TestOps API 
using OpenAPI specifications.

## Prerequisites

- Docker
- Node.js and npm
- Go (including `goimports` for Go code formatting)
- Ensure Docker daemon is running.

## Usage

The Taskfile includes several functions to validate and generate SDKs for different programming languages: 
Go, PHP, Python, and TypeScript. Each function is tailored for the specific language requirements.

### Validate the OpenAPI Specification

To validate the OpenAPI specification:

```bash
./Taskfile.sh validate
```

This command uses npm to run the validation process on the OpenAPI spec file.

## Generate SDKs

To generate programming-language-specific SDK:

```bash
./Taskfile.sh go|php|typescript|python
```

This command cleans the existing Go/PHP/Typescript/Python SDK directory, generates a new Go SDK based on the OpenAPI spec, 
and (for Go!) formats the code using goimports.

### Install or update goimports for Go SDK generation

```bash
go install golang.org/x/tools/cmd/goimports@latest
```

## Custom OpenAPI Generator
The `openapi` function in the Taskfile uses Docker to run the `openapitools/openapi-generator-cli` tool, 
which is a versatile tool to generate client libraries, server stubs, and API documentation from 
OpenAPI Specification definitions.

## Notes

The Taskfile is a bash script; ensure it has executable permissions (chmod +x taskfile.sh).
Adjust the paths and configurations in the script according to your project structure and requirements.
The OpenAPI specification file is assumed to be in the ./src.yaml path relative to the Taskfile.
SDKs are generated into the sdk directory under language-specific subdirectories.

## Contributing

Contributions to improve the Taskfile or the SDK generation process are welcome. 
Please ensure to follow the project's contribution guidelines.
