FROM node:20-alpine

# Install Sharp dependencies
RUN apk add --no-cache \
    vips-dev \
    python3 \
    make \
    g++

WORKDIR /app

# Copy shared Prisma schema and generated client
COPY prisma ./prisma
COPY generated ./generated

# Copy image worker app package files
COPY image-worker-app/package*.json ./

# Install dependencies (including dev dependencies for TypeScript compilation)
RUN npm install

# Copy image worker app source code
COPY image-worker-app/src ./src
COPY image-worker-app/tsconfig.json ./

# Create logs directory
RUN mkdir -p logs

# Build the application (skip setup script in Docker)
RUN npx tsc -p tsconfig.json && npx tsc-alias -p tsconfig.json

# Remove dev dependencies to reduce image size
RUN npm prune --omit=dev

# Create temp directory for image processing
RUN mkdir -p /tmp

# Expose port (if needed for health checks)
EXPOSE 3003

# Start the application
CMD ["npm", "run", "start:docker"]
