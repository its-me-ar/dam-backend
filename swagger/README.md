# Swagger Documentation Structure

This directory contains modular Swagger/OpenAPI documentation files for the DAM Backend API.

## 📁 Directory Structure

```
swagger/
├── main.yaml                 # Main swagger file (references all modules)
├── schemas/                  # Schema definitions by category
│   ├── common.yaml          # Common schemas (Health, Error, Success)
│   ├── auth.yaml            # Authentication schemas
│   ├── user.yaml            # User management schemas
│   ├── asset.yaml           # Asset management schemas
│   ├── sharing.yaml         # Asset sharing schemas
│   └── invitation.yaml      # User invitation schemas
├── paths/                   # API endpoint definitions by controller
│   ├── health.yaml          # Health check endpoints
│   ├── auth.yaml            # Authentication endpoints
│   ├── user.yaml            # User management endpoints
│   ├── asset.yaml           # Asset management endpoints
│   ├── sharing.yaml         # Asset sharing endpoints
│   └── invitation.yaml      # User invitation endpoints
└── README.md               # This file
```

## 🚀 Usage

### Building the Complete Swagger File

To build a single `swagger.yaml` file from all modular files:

```bash
# Using npm script
npm run build:swagger

# Or directly with node
node scripts/build-swagger.js
```

### Viewing Documentation

1. **Swagger UI**: Open `swagger.yaml` in Swagger Editor or any OpenAPI viewer
2. **Local Development**: Use tools like `swagger-ui-serve` or `redoc-cli`

## 📝 File Organization

### Schemas (`schemas/`)

Each schema file contains related data models:

- **`common.yaml`**: Base response schemas (Health, Error, Success)
- **`auth.yaml`**: Login, registration, and authentication schemas
- **`user.yaml`**: User listing and management schemas
- **`asset.yaml`**: Asset upload, download, and management schemas
- **`sharing.yaml`**: Asset sharing and access control schemas
- **`invitation.yaml`**: User invitation and management schemas

### Paths (`paths/`)

Each path file contains API endpoints for a specific controller:

- **`health.yaml`**: System health check endpoints
- **`auth.yaml`**: Authentication and registration endpoints
- **`user.yaml`**: User management endpoints
- **`asset.yaml`**: Asset upload, download, and management endpoints
- **`sharing.yaml`**: Asset sharing and access control endpoints
- **`invitation.yaml`**: User invitation management endpoints

## 🔧 Maintenance

### Adding New Endpoints

1. **Identify the appropriate path file** (e.g., `paths/asset.yaml` for asset-related endpoints)
2. **Add the endpoint definition** with proper request/response schemas
3. **Create or update schemas** in the appropriate schema file if needed
4. **Run the build script** to regenerate `swagger.yaml`

### Adding New Schemas

1. **Identify the appropriate schema file** (e.g., `schemas/asset.yaml` for asset-related schemas)
2. **Add the schema definition** with proper properties and examples
3. **Reference the schema** in the appropriate path file
4. **Run the build script** to regenerate `swagger.yaml`

### Modifying Existing Endpoints

1. **Locate the endpoint** in the appropriate path file
2. **Update the endpoint definition** (parameters, responses, etc.)
3. **Update related schemas** if needed
4. **Run the build script** to regenerate `swagger.yaml`

## 📋 Best Practices

### Schema Organization

- **Group related schemas** in the same file
- **Use descriptive names** for schemas and properties
- **Include examples** for all properties
- **Add descriptions** for complex fields
- **Use consistent naming conventions**

### Path Organization

- **Group endpoints by controller** or functionality
- **Use consistent HTTP methods** and status codes
- **Include comprehensive error responses**
- **Add security requirements** where needed
- **Use descriptive summaries and descriptions**

### File Maintenance

- **Keep files focused** on a single domain/controller
- **Avoid circular references** between files
- **Use relative references** for cross-file references
- **Maintain consistent formatting** and indentation
- **Update this README** when adding new files

## 🔍 Validation

### Schema Validation

```bash
# Validate individual schema files
swagger-codegen validate -i schemas/asset.yaml

# Validate the complete swagger file
swagger-codegen validate -i swagger.yaml
```

### Build Validation

The build script automatically validates:
- ✅ All referenced files exist
- ✅ YAML syntax is valid
- ✅ Schema references are correct
- ✅ Path references are valid

## 📚 Resources

- [OpenAPI Specification](https://swagger.io/specification/)
- [Swagger Editor](https://editor.swagger.io/)
- [OpenAPI Tools](https://openapi.tools/)
- [YAML Syntax Guide](https://yaml.org/spec/1.2/spec.html)

---

**Happy Documenting! 📚✨**
