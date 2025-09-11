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
  // Fix paths in root level files
  execSync('find dist -maxdepth 1 -name "*.js" -exec sed -i "" "s/require(\\"generated\\/prisma\\")/require(\\".\\/generated\\/prisma\\")/g" {} \\;', { stdio: 'inherit' });
  // Fix paths in subdirectories (need ../generated/prisma)
  execSync('find dist -mindepth 2 -name "*.js" -exec sed -i "" "s/require(\\"generated\\/prisma\\")/require(\\"..\\/generated\\/prisma\\")/g" {} \\;', { stdio: 'inherit' });
  console.log('✅ Fixed generated/prisma paths');
} catch (error) {
  console.error('❌ Failed to fix paths:', error.message);
}

console.log('✅ Post-build tasks completed');
console.log('📦 Production package.json created in dist/');
