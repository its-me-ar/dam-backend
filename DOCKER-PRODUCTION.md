# Docker Production Setup

This guide explains how to deploy the DAM Backend application using Docker in production.

## 🏗️ Architecture

The production setup includes:
- **Main API Service**: Handles HTTP requests and API endpoints
- **Workers Service**: Background processing for asset transcoding and thumbnails
- **PostgreSQL**: Primary database
- **Redis**: Cache and job queue management
- **MinIO**: S3-compatible object storage

## 📋 Prerequisites

- Docker and Docker Compose installed
- At least 4GB RAM available
- Ports 4000, 5432, 6379, 9000, 9001 available

## 🚀 Quick Start

### 1. Setup Environment

```bash
# Copy environment template
cp env.prod.example .env.prod

# Edit production environment variables
nano .env.prod
```

**Important**: Update these values in `.env.prod`:
- `JWT_SECRET`: Generate a secure random string
- `MINIO_ROOT_PASSWORD`: Set a strong password
- `MINIO_ACCESS_KEY` and `MINIO_SECRET_KEY`: MinIO credentials

### 2. Run Setup Script

```bash
# Run the automated setup script
./scripts/docker-prod-setup.sh
```

This will:
- Build production Docker images
- Start all services
- Run database migrations
- Create admin user

### 3. Manual Setup (Alternative)

```bash
# Build images
npm run prod:build
npm run prod:workers

# Start services
npm run prod:up

# Run migrations
docker-compose -f docker-compose.prod.yml exec dam-backend npx prisma migrate deploy

# Create admin user
docker-compose -f docker-compose.prod.yml exec dam-backend npm run create-admin
```

## 📦 Available Commands

### Docker Commands
```bash
# Build images
npm run prod:build          # Build main API image
npm run prod:workers        # Build workers image

# Service management
npm run prod:up             # Start all services
npm run prod:down           # Stop all services
npm run prod:restart        # Restart all services
npm run prod:logs           # View all logs
```

### Docker Compose Commands
```bash
# Start specific service
docker-compose -f docker-compose.prod.yml up -d dam-backend

# View logs for specific service
docker-compose -f docker-compose.prod.yml logs -f dam-backend

# Execute commands in container
docker-compose -f docker-compose.prod.yml exec dam-backend sh
docker-compose -f docker-compose.prod.yml exec dam-workers sh

# Scale workers
docker-compose -f docker-compose.prod.yml up -d --scale dam-workers=3
```

## 🔧 Configuration

### Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `NODE_ENV` | Environment mode | `production` |
| `PORT` | API server port | `4000` |
| `JWT_SECRET` | JWT signing secret | **Required** |
| `DATABASE_URL` | PostgreSQL connection | Auto-configured |
| `REDIS_URL` | Redis connection | Auto-configured |
| `MINIO_ENDPOINT` | MinIO endpoint | `http://minio:9000` |
| `MINIO_ACCESS_KEY` | MinIO access key | **Required** |
| `MINIO_SECRET_KEY` | MinIO secret key | **Required** |
| `MINIO_BUCKET` | Storage bucket name | `dam-assets` |
| `MINIO_REGION` | Storage region | `us-east-1` |

### Service Ports

| Service | Port | Description |
|---------|------|-------------|
| dam-backend | 4000 | Main API server |
| postgres | 5432 | PostgreSQL database |
| redis | 6379 | Redis cache/queue |
| minio | 9000 | MinIO S3 API |
| minio | 9001 | MinIO web console |

## 📊 Monitoring

### Health Checks

All services include health checks:
- **API**: `GET /api/health`
- **Workers**: Process-based health check
- **Database**: PostgreSQL readiness probe
- **Redis**: Built-in health check

### Logs

```bash
# View all logs
npm run prod:logs

# View specific service logs
docker-compose -f docker-compose.prod.yml logs -f dam-backend
docker-compose -f docker-compose.prod.yml logs -f dam-workers

# View logs with timestamps
docker-compose -f docker-compose.prod.yml logs -f -t dam-backend
```

### Resource Monitoring

```bash
# Check container resource usage
docker stats

# Check service status
docker-compose -f docker-compose.prod.yml ps

# Check service health
docker-compose -f docker-compose.prod.yml exec dam-backend curl -f http://localhost:4000/api/health
```

## 🔒 Security

### Production Security Features

- **Non-root user**: All containers run as non-root user
- **Signal handling**: Proper signal handling with dumb-init
- **Health checks**: Automatic health monitoring
- **Network isolation**: Services communicate through internal network
- **Resource limits**: Configurable resource constraints

### Security Recommendations

1. **Change default passwords** in `.env.prod`
2. **Use secrets management** for sensitive data
3. **Enable HTTPS** with reverse proxy (nginx/traefik)
4. **Regular updates** of base images
5. **Monitor logs** for suspicious activity

## 📈 Scaling

### Horizontal Scaling

```bash
# Scale workers
docker-compose -f docker-compose.prod.yml up -d --scale dam-workers=5

# Scale API (with load balancer)
docker-compose -f docker-compose.prod.yml up -d --scale dam-backend=3
```

### Resource Limits

Add to `docker-compose.prod.yml`:

```yaml
services:
  dam-backend:
    deploy:
      resources:
        limits:
          memory: 1G
          cpus: '0.5'
        reservations:
          memory: 512M
          cpus: '0.25'
```

## 🗄️ Data Persistence

### Volumes

- `postgres_data`: PostgreSQL database files
- `redis_data`: Redis persistence data
- `minio_data`: MinIO object storage

### Backup

```bash
# Backup database
docker-compose -f docker-compose.prod.yml exec postgres pg_dump -U user dam_backend > backup.sql

# Backup MinIO data
docker cp dam-minio-prod:/data ./minio-backup
```

## 🚨 Troubleshooting

### Common Issues

1. **Services not starting**
   ```bash
   # Check logs
   docker-compose -f docker-compose.prod.yml logs
   
   # Check resource usage
   docker stats
   ```

2. **Database connection issues**
   ```bash
   # Check database status
   docker-compose -f docker-compose.prod.yml exec postgres pg_isready
   
   # Check network connectivity
   docker-compose -f docker-compose.prod.yml exec dam-backend ping postgres
   ```

3. **Workers not processing jobs**
   ```bash
   # Check Redis connection
   docker-compose -f docker-compose.prod.yml exec redis redis-cli ping
   
   # Check worker logs
   docker-compose -f docker-compose.prod.yml logs -f dam-workers
   ```

### Debug Commands

```bash
# Access container shell
docker-compose -f docker-compose.prod.yml exec dam-backend sh
docker-compose -f docker-compose.prod.yml exec dam-workers sh

# Check environment variables
docker-compose -f docker-compose.prod.yml exec dam-backend env

# Test database connection
docker-compose -f docker-compose.prod.yml exec dam-backend npx prisma db pull
```

## 🔄 Updates

### Updating Application

```bash
# Pull latest code
git pull

# Rebuild and restart
npm run prod:build
npm run prod:workers
npm run prod:restart
```

### Database Migrations

```bash
# Run migrations
docker-compose -f docker-compose.prod.yml exec dam-backend npx prisma migrate deploy

# Check migration status
docker-compose -f docker-compose.prod.yml exec dam-backend npx prisma migrate status
```

## 📞 Support

For issues and questions:
1. Check the logs: `npm run prod:logs`
2. Verify service status: `docker-compose -f docker-compose.prod.yml ps`
3. Check resource usage: `docker stats`
4. Review this documentation
