#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

/**
 * Build a single swagger.yaml file from modular files
 */
function buildSwagger() {
  console.log('🔨 Building Swagger documentation...');
  
  const swaggerDir = path.join(__dirname, '..', 'swagger');
  const outputFile = path.join(__dirname, '..', 'swagger.yaml');
  
  // Read the main swagger file
  const mainFile = path.join(swaggerDir, 'main.yaml');
  const mainContent = fs.readFileSync(mainFile, 'utf8');
  const swagger = yaml.load(mainContent);
  
  // Merge all schemas
  const schemaFiles = [
    'schemas/common.yaml',
    'schemas/auth.yaml',
    'schemas/user.yaml',
    'schemas/asset.yaml',
    'schemas/sharing.yaml',
    'schemas/invitation.yaml'
  ];
  
  swagger.components = swagger.components || {};
  swagger.components.schemas = {};
  
  schemaFiles.forEach(file => {
    const filePath = path.join(swaggerDir, file);
    if (fs.existsSync(filePath)) {
      const content = fs.readFileSync(filePath, 'utf8');
      const data = yaml.load(content);
      if (data.components && data.components.schemas) {
        Object.assign(swagger.components.schemas, data.components.schemas);
        console.log(`✅ Merged schemas from ${file}`);
      }
    }
  });
  
  // Merge all paths
  const pathFiles = [
    'paths/health.yaml',
    'paths/auth.yaml',
    'paths/user.yaml',
    'paths/asset.yaml',
    'paths/sharing.yaml',
    'paths/invitation.yaml'
  ];
  
  swagger.paths = {};
  
  pathFiles.forEach(file => {
    const filePath = path.join(swaggerDir, file);
    if (fs.existsSync(filePath)) {
      const content = fs.readFileSync(filePath, 'utf8');
      const data = yaml.load(content);
      if (data.paths) {
        Object.assign(swagger.paths, data.paths);
        console.log(`✅ Merged paths from ${file}`);
      }
    }
  });
  
  // Add security schemes
  swagger.components.securitySchemes = {
    BearerAuth: {
      type: 'http',
      scheme: 'bearer',
      bearerFormat: 'JWT'
    }
  };
  
  // Write the merged swagger file
  const yamlContent = yaml.dump(swagger, {
    indent: 2,
    lineWidth: 120,
    noRefs: true
  });
  
  fs.writeFileSync(outputFile, yamlContent);
  console.log(`✅ Swagger documentation built successfully: ${outputFile}`);
  console.log(`📊 Total endpoints: ${Object.keys(swagger.paths).length}`);
  console.log(`📊 Total schemas: ${Object.keys(swagger.components.schemas).length}`);
}

// Run the build
if (require.main === module) {
  try {
    buildSwagger();
  } catch (error) {
    console.error('❌ Error building Swagger documentation:', error.message);
    process.exit(1);
  }
}

module.exports = { buildSwagger };
