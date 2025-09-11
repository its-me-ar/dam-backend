# DAM Backend - Digital Asset Management System

A comprehensive Digital Asset Management backend built with Node.js, Express.js, TypeScript, Prisma, and PostgreSQL. This system provides secure asset upload, processing, sharing, and management capabilities.

## 🏗️ Architecture

![DAM Backend Architecture](docs/architecture-diagram.png)

### System Design Document
For detailed system design and architecture decisions, see our comprehensive [System Design Document](https://docs.google.com/document/d/1L-u9C3ScYQHpBmluERlxPWECqu_KuoC6nQgvIEyYEgw/edit?tab=t.0).

## 🚀 Features

### Core Features
- **Asset Upload & Management**: Secure file uploads with presigned URLs
- **Multi-format Support**: Images, videos, and documents
- **Asset Processing**: Automatic video transcoding and thumbnail generation
- **User Management**: Role-based access control (ADMIN, MANAGER, USER)
- **Invitation System**: Secure user registration via email invitations
- **Asset Sharing**: Public and restricted sharing capabilities
- **Real-time Processing**: Background job processing with Redis queues
- **Comprehensive API**: RESTful API with OpenAPI documentation

### Sharing Features
- **Public Sharing**: Share assets with anyone via public links
- **Restricted Sharing**: Share assets with specific users
- **Visibility Control**: Check asset visibility status
- **Multi-user Access**: Share restricted assets with multiple users
- **Access Control**: Owner, admin, and shared access permissions

### Asset Processing
- **Video Transcoding**: Automatic conversion to multiple resolutions (480p, 720p)
- **Thumbnail Generation**: Automatic thumbnail creation for videos and images
- **Metadata Extraction**: Comprehensive asset metadata collection
- **Storage Optimization**: Efficient S3/MinIO storage management

## 🛠️ Tech Stack

- **Runtime**: Node.js with TypeScript
- **Framework**: Express.js
- **Database**: PostgreSQL with Prisma ORM
- **Storage**: S3-compatible storage (MinIO)
- **Queue**: Redis for background job processing
- **Authentication**: JWT (JSON Web Tokens)
- **Validation**: Zod schema validation
- **Documentation**: OpenAPI/Swagger
- **Containerization**: Docker support

## 📋 Prerequisites

- Node.js (v18 or higher)
- PostgreSQL (v13 or higher)
- Redis (v6 or higher)
- S3-compatible storage (MinIO/AWS S3)

## 🚀 Quick Start

### 1. Clone the Repository
```bash
git clone <repository-url>
cd dam-backend
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Environment Setup
Create a `.env` file in the root directory:

```env
# Database
DATABASE_URL="postgresql://username:password@localhost:5432/dam_db"

# Redis
REDIS_URL="redis://localhost:6379"

# JWT
JWT_SECRET="your-super-secret-jwt-key"
JWT_EXPIRES_IN="7d"

# S3/MinIO Storage
S3_ENDPOINT="http://localhost:9000"
S3_ACCESS_KEY="your-access-key"
S3_SECRET_KEY="your-secret-key"
S3_BUCKET="dam-assets"
S3_REGION="us-east-1"


# Server
PORT=4000
NODE_ENV="development"
```

### 4. Database Setup
```bash
# Generate Prisma client
npx prisma generate

# Run database migrations
npx prisma migrate deploy

# (Optional) Seed the database
npx prisma db seed
```

### 5. Start the Application
```bash
# Development mode
npm run dev

# Production mode
npm run build
npm start
```

## 📚 API Documentation

The API is fully documented with OpenAPI/Swagger. Once the server is running, visit:
- **Swagger UI**: `http://localhost:4000/api-docs`
- **OpenAPI JSON**: `http://localhost:4000/api-docs.json`

## 🔐 Authentication

The API uses JWT-based authentication. Include the token in the Authorization header:

```bash
Authorization: Bearer <your-jwt-token>
```

### Getting Started with Authentication

1. **Create an Admin User** (First time setup):
```bash
npm run create-admin
```

2. **Login** to get your JWT token:
```bash
curl -X POST http://localhost:4000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email": "admin@example.com", "password": "your-password"}'
```

3. **Invite Users** (Admin/Manager only):
```bash
curl -X POST http://localhost:4000/api/invitations \
  -H "Authorization: Bearer <your-token>" \
  -H "Content-Type: application/json" \
  -d '{"email": "user@example.com", "role": "USER"}'
```

## 📁 API Endpoints

### Authentication
- `POST /api/auth/login` - User login
- `POST /api/auth/register` - User registration via invitation

### User Management
- `GET /api/users` - Get all users (authenticated)

### Invitations
- `POST /api/invitations` - Create invitation (ADMIN/MANAGER only)
- `GET /api/invitations` - Get all invitations (ADMIN/MANAGER only)
- `PUT /api/invitations/{id}/reinvite` - Resend invitation (ADMIN/MANAGER only)

### Asset Management
- `POST /api/assets/uploads/presign` - Generate presigned upload URL
- `POST /api/assets/uploads/complete` - Complete asset upload
- `GET /api/assets` - List user assets
- `GET /api/assets/{id}` - Get asset by ID
- `GET /api/assets/jobs` - Get processing jobs
- `GET /api/assets/metrics` - Get asset metrics

### Asset Sharing
- `POST /api/assets/share` - Create asset share
- `DELETE /api/assets/share/{share_id}` - Delete share
- `GET /api/assets/share/visibility/{asset_id}` - Get asset visibility (public)
- `GET /api/assets/public/{asset_id}` - Access public shared asset
- `GET /api/assets/restricted/{asset_id}` - Access restricted asset (authenticated)
- `GET /api/assets/shared` - Get shared assets for current user

## 🔄 Asset Upload Workflow

### 1. Get Presigned Upload URL
```bash
curl -X POST http://localhost:4000/api/assets/uploads/presign \
  -H "Authorization: Bearer <your-token>" \
  -H "Content-Type: application/json" \
  -d '{"filename": "video.mp4"}'
```

### 2. Upload File to S3
Use the presigned URL returned from step 1 to upload your file directly to S3.

### 3. Complete Upload
```bash
curl -X POST http://localhost:4000/api/assets/uploads/complete \
  -H "Authorization: Bearer <your-token>" \
  -H "Content-Type: application/json" \
  -d '{"asset_id": "your-asset-id"}'
```

### 4. Background Processing
The system automatically:
- Generates video thumbnails
- Creates multiple video resolutions (480p, 720p)
- Extracts metadata
- Updates asset status to COMPLETED

## 🔗 Asset Sharing

### Public Sharing
```bash
curl -X POST http://localhost:4000/api/assets/share \
  -H "Authorization: Bearer <your-token>" \
  -H "Content-Type: application/json" \
  -d '{
    "asset_id": "your-asset-id",
    "share_type": "PUBLIC"
  }'
```

### Restricted Sharing
```bash
curl -X POST http://localhost:4000/api/assets/share \
  -H "Authorization: Bearer <your-token>" \
  -H "Content-Type: application/json" \
  -d '{
    "asset_id": "your-asset-id",
    "share_type": "RESTRICTED",
    "user_ids": ["user-id-1", "user-id-2"]
  }'
```

### Accessing Shared Assets

**Public Asset (No Authentication Required):**
```bash
curl -X GET http://localhost:4000/api/assets/public/{asset_id}
```

**Restricted Asset (Authentication Required):**
```bash
curl -X GET http://localhost:4000/api/assets/restricted/{asset_id} \
  -H "Authorization: Bearer <your-token>"
```

## 🏗️ Project Structure

```
dam-backend/
├── src/
│   ├── controllers/          # API route handlers
│   ├── middlewares/          # Express middlewares
│   ├── routes/              # API route definitions
│   ├── schemas/             # Zod validation schemas
│   ├── services/            # Business logic services
│   ├── types/               # TypeScript type definitions
│   ├── utils/               # Utility functions
│   ├── workers/             # Background job workers
│   ├── config/              # Configuration files
│   ├── db/                  # Database connection
│   └── app.ts               # Express app setup
├── prisma/
│   ├── migrations/          # Database migrations
│   └── schema.prisma        # Database schema
├── docker/                  # Docker configuration
├── k8s/                     # Kubernetes manifests
├── scripts/                 # Utility scripts
├── swagger.yaml             # OpenAPI documentation
└── package.json
```

## 🐳 Docker Support

### Development
```bash
docker-compose up -d
```

### Production
```bash
docker build -f docker/Dockerfile.prod -t dam-backend .
docker run -p 4000:4000 dam-backend
```

## ☸️ Kubernetes Deployment

Deploy to Kubernetes using the provided manifests:

```bash
kubectl apply -f k8s/
```

## 🔧 Configuration

### Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `DATABASE_URL` | PostgreSQL connection string | Required |
| `REDIS_URL` | Redis connection string | Required |
| `JWT_SECRET` | JWT signing secret | Required |
| `S3_ENDPOINT` | S3-compatible storage endpoint | Required |
| `S3_ACCESS_KEY` | S3 access key | Required |
| `S3_SECRET_KEY` | S3 secret key | Required |
| `S3_BUCKET` | S3 bucket name | Required |
| `PORT` | Server port | 4000 |
| `NODE_ENV` | Environment mode | development |

## 📊 Monitoring & Logging

- **Structured Logging**: Winston-based logging with multiple levels
- **Health Checks**: `/api/health` endpoint for monitoring
- **Job Processing**: Redis-based background job processing
- **Error Tracking**: Comprehensive error handling and logging

## 🧪 Testing

```bash
# Run tests
npm test

# Run tests with coverage
npm run test:coverage

# Run tests in watch mode
npm run test:watch
```

## 📈 Performance

- **Presigned URLs**: Direct S3 uploads for better performance
- **Background Processing**: Non-blocking asset processing
- **Database Indexing**: Optimized database queries
- **Caching**: Redis-based caching for improved response times

## 🔒 Security

- **JWT Authentication**: Secure token-based authentication
- **Role-based Access**: Granular permission system
- **Input Validation**: Comprehensive request validation
- **SQL Injection Protection**: Prisma ORM protection
- **CORS Configuration**: Configurable cross-origin policies

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

For support and questions:
- Create an issue in the repository
- Check the API documentation at `/api-docs`
- Review the logs for debugging information

## 🚀 Deployment

### Production Checklist

- [ ] Set up PostgreSQL database
- [ ] Configure Redis instance
- [ ] Set up S3-compatible storage
- [ ] Configure environment variables
- [ ] Run database migrations
- [ ] Set up monitoring and logging
- [ ] Configure reverse proxy (nginx)
- [ ] Set up SSL certificates
- [ ] Configure backup strategy

---

**Built with ❤️ for efficient digital asset management**
