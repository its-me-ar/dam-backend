#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🔧 Setting up image-worker-app dependencies...');

const mainAppPath = path.join(__dirname, '../../');
const imageWorkerPath = __dirname.replace('/scripts', '');

// 1. Copy generated Prisma client
console.log('📦 Copying Prisma client...');
const prismaSource = path.join(mainAppPath, 'generated');
const prismaDest = path.join(imageWorkerPath, 'generated');

if (fs.existsSync(prismaSource)) {
  // Remove existing generated directory
  if (fs.existsSync(prismaDest)) {
    fs.rmSync(prismaDest, { recursive: true, force: true });
  }
  
  // Copy generated directory
  execSync(`cp -r "${prismaSource}" "${prismaDest}"`, { stdio: 'inherit' });
  console.log('✅ Prisma client copied successfully');
} else {
  console.log('⚠️  Prisma client not found in main app, generating...');
  try {
    execSync('npx prisma generate', { cwd: mainAppPath, stdio: 'inherit' });
    execSync(`cp -r "${prismaSource}" "${prismaDest}"`, { stdio: 'inherit' });
    console.log('✅ Prisma client generated and copied');
  } catch (error) {
    console.error('❌ Failed to generate Prisma client:', error.message);
    process.exit(1);
  }
}

// 2. Copy generated Prisma client to dist directory for runtime
console.log('📁 Setting up dist directory...');
const distDir = path.join(imageWorkerPath, 'dist');
const distGeneratedDest = path.join(distDir, 'generated');

// Create dist directory if it doesn't exist
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

// Create logs directory if it doesn't exist
const logsDir = path.join(imageWorkerPath, 'logs');
if (!fs.existsSync(logsDir)) {
  fs.mkdirSync(logsDir, { recursive: true });
  console.log('✅ Logs directory created');
}

if (fs.existsSync(prismaDest)) {
  if (fs.existsSync(distGeneratedDest)) {
    fs.rmSync(distGeneratedDest, { recursive: true, force: true });
  }
  execSync(`cp -r "${prismaDest}" "${distGeneratedDest}"`, { stdio: 'inherit' });
  console.log('✅ Prisma client copied to dist directory');
}

console.log('🎉 Setup completed successfully!');
