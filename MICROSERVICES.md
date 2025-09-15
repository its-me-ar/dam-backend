# DAM Backend Microservices

This project consists of multiple microservices that work together to provide a complete Digital Asset Management (DAM) solution.

## 🏗️ Architecture

```
dam-backend/
├── src/                    # Main API service
├── microservices/
│   ├── bullmq-app/        # Queue management service
│   ├── image-worker/      # Image processing worker
│   └── video-worker/      # Video processing worker
└── package.json           # Root package.json with management scripts
```

## 📦 Services Overview

### 1. **Main API Service** (`src/`)
- **Purpose**: REST API endpoints, authentication, asset management
- **Port**: 4000
- **Dependencies**: Express, Prisma, Redis, S3

### 2. **BullMQ App** (`microservices/bullmq-app/`)
- **Purpose**: Queue management and job distribution
- **Port**: 3001
- **Dependencies**: BullMQ, Redis, IORedis

### 3. **Image Worker App** (`microservices/image-worker/`)
- **Purpose**: Image processing, thumbnails, metadata extraction
- **Port**: 3003
- **Dependencies**: Sharp, BullMQ, S3, Prisma

### 4. **Video Worker App** (`microservices/video-worker/`)
- **Purpose**: Video processing, transcoding, thumbnails
- **Port**: 3002
- **Dependencies**: FFmpeg, BullMQ, S3, Prisma

## 🚀 Quick Start Commands

### Install All Dependencies
```bash
npm run microservices:install
```

### Development Mode (All Services)
```bash
npm run microservices:dev
```

### Build All Services
```bash
npm run microservices:build
```

### Clean All Builds
```bash
npm run microservices:clean
```

## 🔧 Individual Service Commands

### Main API Service
```bash
npm run dev                    # Development
npm run build                  # Build
npm run start                  # Production
```

### BullMQ App
```bash
npm run bullmq:dev             # Development
npm run bullmq:build           # Build
npm run bullmq:start           # Production
```

### Image Worker App
```bash
npm run image-worker:dev       # Development
npm run image-worker:build     # Build
npm run image-worker:start     # Production
```

### Video Worker App
```bash
npm run video-worker:dev       # Development
npm run video-worker:build     # Build
npm run video-worker:start     # Production
```

## 🐳 Docker Commands

### Production Environment
```bash
# Start all services
npm run prod:up

# Rebuild and start
npm run prod:rebuild

# View logs
npm run prod:logs

# Stop all services
npm run prod:down
```

### Development Environment
```bash
# Start with main app
npm run local
```

## 📁 Project Structure

Each microservice follows a consistent structure:

```
service-name/
├── src/
│   ├── config/           # Configuration files
│   ├── services/         # Business logic
│   ├── workers/          # Job processors (worker apps)
│   ├── queues/           # Queue definitions (BullMQ app)
│   ├── utils/            # Utility functions
│   ├── types/            # TypeScript types
│   └── index.ts          # Main entry point
├── package.json          # Service dependencies
├── tsconfig.json         # TypeScript config
├── Dockerfile            # Docker configuration
└── README.md             # Service documentation
```

## 🔄 Service Communication

1. **Main API** → **BullMQ App**: Publishes jobs via Redis pub/sub
2. **BullMQ App** → **Worker Apps**: Distributes jobs to appropriate workers
3. **Worker Apps** → **Main API**: Updates job status via Redis events

## 🛠️ Development Workflow

1. **Start Infrastructure**: `npm run prod:up` (PostgreSQL, Redis, MinIO)
2. **Start Services**: `npm run microservices:dev`
3. **Make Changes**: Edit code in respective service directories
4. **Test**: Services auto-reload on changes
5. **Build**: `npm run microservices:build` before deployment

## 📊 Monitoring

- **Main API**: http://localhost:4000
- **API Docs**: http://localhost:4000/api-docs
- **MinIO Console**: http://localhost:9001
- **PostgreSQL**: localhost:5433
- **Redis**: localhost:6379

## 🐛 Troubleshooting

### Service Won't Start
```bash
# Check logs
npm run prod:logs

# Rebuild specific service
cd service-name && npm run build
```

### Database Issues
```bash
# Run migrations
npm run prisma:deploy

# Reset database
docker-compose -f docker-compose.prod.yml down -v
npm run prod:up
```

### Redis Connection Issues
```bash
# Check Redis status
docker-compose -f docker-compose.prod.yml ps redis

# Restart Redis
docker-compose -f docker-compose.prod.yml restart redis
```

## 📝 Adding New Services

1. Create service directory: `mkdir new-service`
2. Add `package.json` with appropriate dependencies
3. Add service to root `package.json` scripts
4. Update `docker-compose.prod.yml` if needed
5. Add service to `.gitignore` patterns

## 🔐 Environment Variables

Each service uses its own `.env` file or inherits from the root `.env.prod`:

- **Main API**: Uses root `.env.prod`
- **BullMQ App**: Uses root `.env.prod`
- **Worker Apps**: Use root `.env.prod` + service-specific overrides
