# DAM Bull MQ Application

Standalone Bull MQ monitoring application for video processing queues.

## Features

- Redis connection monitoring
- Queue health monitoring
- Graceful shutdown handling
- Queue status reporting

## Environment Variables

Create a `.env` file with the following variables:

```env
REDIS_HOST=127.0.0.1
REDIS_PORT=6379
LOG_LEVEL=info
```

## Development

```bash
# Install dependencies
npm install

# Run in development mode
npm run dev

# Build the application
npm run build

# Start production build
npm start
```

## Docker

```bash
# Build Docker image
docker build -t dam-bullmq-app .

# Run container
docker run -d --name dam-bullmq-app \
  -e REDIS_HOST=redis \
  -e REDIS_PORT=6379 \
  dam-bullmq-app
```

## Usage

This application monitors the Bull MQ queues and Redis connection. It should be running alongside the main app and video worker application.

The application will:
1. Connect to Redis
2. Monitor queue health
3. Provide queue status information
4. Handle graceful shutdown on SIGINT/SIGTERM

**Note**: This app is optional and mainly for monitoring. The main app defines queues and the video worker app processes jobs.
