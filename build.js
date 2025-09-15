#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔨 Running post-build tasks...');

// Copy package.json to dist for production
const packageJson = require('./package.json');
const productionPackage = {
  name: packageJson.name,
  version: packageJson.version,
  main: packageJson.main,
  scripts: {
    start: packageJson.scripts.start
  },
  dependencies: packageJson.dependencies
};

fs.writeFileSync(
  path.join(__dirname, 'dist', 'package.json'),
  JSON.stringify(productionPackage, null, 2)
);

// Copy generated Prisma client to dist
if (fs.existsSync(path.join(__dirname, 'generated'))) {
  const { execSync } = require('child_process');
  try {
    execSync('cp -r generated dist/', { stdio: 'inherit' });
    console.log('📦 Generated Prisma client copied to dist/');
  } catch (error) {
    console.error('❌ Failed to copy generated Prisma client:', error.message);
  }
}

// Fix generated/prisma paths in compiled files
console.log('🔧 Fixing generated/prisma paths...');
const { execSync } = require('child_process');

try {
  // Use find command to locate all JS files and fix paths
  execSync('find dist -name "*.js" -exec node -e \'const fs=require("fs"); const path=require("path"); const file=process.argv[1]; const content=fs.readFileSync(file,"utf8"); const depth=file.split("/").length-2; const relativePath="../".repeat(depth)+"generated/prisma"; const newContent=content.replace(/require\\("generated\\/prisma"\\)/g, `require("${relativePath}")`); fs.writeFileSync(file,newContent);\' {} \\;', { stdio: 'inherit' });
  console.log('✅ Fixed generated/prisma paths');
} catch (error) {
  console.error('❌ Failed to fix paths:', error.message);
}

console.log('✅ Post-build tasks completed');
console.log('📦 Production package.json created in dist/');
