FROM node:20-alpine

# Install FFmpeg and FFprobe
RUN apk add --no-cache ffmpeg

WORKDIR /app

# Copy shared Prisma schema and generated client
COPY prisma ./prisma
COPY generated ./generated

# Copy video worker app package files
COPY microservices/video-worker/package*.json ./

# Install dependencies (including dev dependencies for TypeScript compilation)
RUN npm install

# Copy video worker app source code
COPY microservices/video-worker/src ./src
COPY microservices/video-worker/scripts ./scripts
COPY microservices/video-worker/tsconfig.json ./

# Create logs directory
RUN mkdir -p logs

# Build the application (skip setup script in Docker)
RUN npx tsc -p tsconfig.json && npx tsc-alias -p tsconfig.json

# Remove dev dependencies to reduce image size
RUN npm prune --omit=dev

# Create temp directory for video processing
RUN mkdir -p /tmp

# Expose port (if needed for health checks)
EXPOSE 3002

# Start the application
CMD ["npm", "run", "start:docker"]
