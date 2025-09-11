#!/bin/bash

# Docker Production Setup Script for DAM Backend
# This script sets up the production environment with Docker

set -e

echo "🚀 Setting up DAM Backend Production Environment"

# Check if .env.prod exists
if [ ! -f .env.prod ]; then
    echo "📝 Creating .env.prod from template..."
    cp env.prod.example .env.prod
    echo "⚠️  Please edit .env.prod with your production values before continuing"
    echo "   Important: Change JWT_SECRET, MINIO_ROOT_PASSWORD, and S3 keys"
    exit 1
fi

echo "🔧 Building production Docker images..."

# Build main application
echo "📦 Building main application image..."
docker build -f docker/Dockerfile.prod -t dam-backend:latest .

# Build workers
echo "👷 Building workers image..."
docker build -f docker/Dockerfile.workers -t dam-workers:latest .

echo "✅ Docker images built successfully!"

echo "🐳 Starting production services..."
docker-compose -f docker-compose.prod.yml up -d

echo "⏳ Waiting for services to start..."
sleep 10

echo "🔍 Checking service status..."
docker-compose -f docker-compose.prod.yml ps

echo "📊 Running database migrations..."
docker-compose -f docker-compose.prod.yml exec dam-backend npx prisma migrate deploy

echo "👤 Creating admin user..."
docker-compose -f docker-compose.prod.yml exec dam-backend npm run create-admin

echo "✅ Production setup complete!"
echo ""
echo "🌐 Services available at:"
echo "   - API: http://localhost:4000"
echo "   - MinIO Console: http://localhost:9001"
echo "   - API Docs: http://localhost:4000/api-docs"
echo ""
echo "📋 Useful commands:"
echo "   - View logs: npm run prod:logs"
echo "   - Stop services: npm run prod:down"
echo "   - Restart services: npm run prod:restart"
echo ""
echo "🔧 To manage the application:"
echo "   - Check status: docker-compose -f docker-compose.prod.yml ps"
echo "   - View logs: docker-compose -f docker-compose.prod.yml logs -f [service]"
echo "   - Access container: docker-compose -f docker-compose.prod.yml exec [service] sh"
