#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🔧 Setting up video-worker-app dependencies...');

const mainAppPath = path.join(__dirname, '../../');
const videoWorkerPath = __dirname.replace('/scripts', '');

// 1. Copy generated Prisma client
console.log('📦 Copying Prisma client...');
const prismaSource = path.join(mainAppPath, 'generated');
const prismaDest = path.join(videoWorkerPath, 'generated');

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

// 2. Copy ffmpeg binary
console.log('🎬 Copying ffmpeg binary...');
const ffmpegSource = path.join(mainAppPath, 'node_modules/ffmpeg-static/ffmpeg');
const ffmpegDest = path.join(videoWorkerPath, 'node_modules/ffmpeg-static/ffmpeg');

if (fs.existsSync(ffmpegSource)) {
  fs.copyFileSync(ffmpegSource, ffmpegDest);
  fs.chmodSync(ffmpegDest, '755');
  console.log('✅ FFmpeg binary copied successfully');
} else {
  console.log('⚠️  FFmpeg binary not found in main app');
}

// 3. Copy ffprobe binaries
console.log('🔍 Copying ffprobe binaries...');
const ffprobeSource = path.join(mainAppPath, 'node_modules/ffprobe-static/bin');
const ffprobeDest = path.join(videoWorkerPath, 'node_modules/ffprobe-static/bin');

if (fs.existsSync(ffprobeSource)) {
  if (fs.existsSync(ffprobeDest)) {
    fs.rmSync(ffprobeDest, { recursive: true, force: true });
  }
  execSync(`cp -r "${ffprobeSource}" "${ffprobeDest}"`, { stdio: 'inherit' });
  
  // Make ffprobe executable
  const platform = process.platform;
  const arch = process.arch;
  let ffprobePath;
  
  if (platform === 'darwin') {
    ffprobePath = path.join(ffprobeDest, 'darwin', arch === 'arm64' ? 'arm64' : 'x64', 'ffprobe');
  } else if (platform === 'linux') {
    ffprobePath = path.join(ffprobeDest, 'linux', arch === 'arm64' ? 'arm64' : 'x64', 'ffprobe');
  } else if (platform === 'win32') {
    ffprobePath = path.join(ffprobeDest, 'win32', arch === 'arm64' ? 'arm64' : 'x64', 'ffprobe.exe');
  }
  
  if (ffprobePath && fs.existsSync(ffprobePath)) {
    fs.chmodSync(ffprobePath, '755');
    console.log('✅ FFprobe binaries copied successfully');
  } else {
    console.log('⚠️  FFprobe binary not found for current platform');
  }
} else {
  console.log('⚠️  FFprobe binaries not found in main app');
}

// 4. Copy generated Prisma client to dist directory for runtime
console.log('📁 Setting up dist directory...');
const distDir = path.join(videoWorkerPath, 'dist');
const distGeneratedDest = path.join(distDir, 'generated');

// Create dist directory if it doesn't exist
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

// Create logs directory if it doesn't exist
const logsDir = path.join(videoWorkerPath, 'logs');
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
