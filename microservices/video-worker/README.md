# Video Worker App

A standalone video processing worker application for the DAM backend system.

## Features

- Video transcoding to multiple resolutions (720p, 480p)
- Thumbnail generation
- Metadata extraction using ffprobe
- S3 integration for file upload/download
- BullMQ job queue processing
- Prisma database integration

## Prerequisites

- Node.js 20+
- Access to the main DAM backend project (for dependency copying)
- Redis server running
- PostgreSQL database
- AWS S3 credentials

## Setup

The application automatically copies required dependencies from the main app:

- **Prisma Client**: Generated database client
- **FFmpeg Binary**: Video processing binary
- **FFprobe Binary**: Video metadata extraction binary

### Manual Setup

```bash
npm run setup
```

### Development

```bash
npm run dev
```

The `predev` script automatically runs setup before starting development.

### Build

```bash
npm run build
```

The `prebuild` script automatically runs setup before building.

### Production

```bash
npm start
```

The `prestart` script automatically runs setup before starting.

### Docker

The application includes Docker-specific scripts that skip the dependency copying setup:

```bash
# Build Docker image
docker build -t video-worker-app .

# Run container
docker run -d --name video-worker video-worker-app
```

**Docker Scripts:**
- `npm run build:docker` - Build without dependency copying
- `npm run start:docker` - Start without setup script

## Scripts

- `npm run setup` - Copy dependencies from main app
- `npm run dev` - Start development server with hot reload
- `npm run build` - Build TypeScript to JavaScript
- `npm run build:docker` - Build for Docker (skips dependency copying)
- `npm start` - Start production server (logs to logs/worker.log)
- `npm run start:docker` - Start production server in Docker
- `npm run start:dev` - Start production server in foreground
- `npm run start:foreground` - Start production server in foreground
- `npm run logs` - Follow worker logs in real-time
- `npm run logs:error` - Follow error logs in real-time
- `npm run clean` - Clean dist, generated, and logs directories

## Environment Variables

Create a `.env` file with the following variables:

```env
# Database
DATABASE_URL="postgresql://user:password@localhost:5432/dam_db"

# Redis
REDIS_URL="redis://localhost:6379"

# AWS S3
AWS_ACCESS_KEY_ID="your_access_key"
AWS_SECRET_ACCESS_KEY="your_secret_key"
AWS_REGION="us-east-1"
S3_BUCKET_NAME="your_bucket_name"

# Logging
LOG_LEVEL="info"
```

## Logging

The application uses Winston for logging with the following setup:

- **Console**: Colored output for development
- **logs/combined.log**: All log levels in JSON format
- **logs/error.log**: Error logs only in JSON format
- **logs/worker.log**: Production output (when using `npm start`)

### Log Commands

```bash
# Follow all logs in real-time
npm run logs

# Follow only error logs
npm run logs:error

# View logs directory
ls -la logs/
```

## Architecture

The worker processes the following job types:

1. **video-processing**: Main video transcoding job
2. **video-thumbnail**: Thumbnail generation job
3. **video-upload**: File upload to S3 job

## Dependencies

The application automatically copies these dependencies from the main app:

- `generated/prisma` - Prisma client
- `node_modules/ffmpeg-static/ffmpeg` - FFmpeg binary
- `node_modules/ffprobe-static/bin/` - FFprobe binaries

## Troubleshooting

If you encounter issues:

1. Make sure the main DAM backend project is built and has generated Prisma client
2. Run `npm run setup` manually to copy dependencies
3. Check that Redis and PostgreSQL are running
4. Verify AWS S3 credentials are correct

## Development Notes

- The setup script runs automatically before dev, build, and start commands
- Dependencies are copied from the main app, not installed locally
- The generated Prisma client is copied to both root and dist directories
- FFmpeg/FFprobe binaries are made executable automatically