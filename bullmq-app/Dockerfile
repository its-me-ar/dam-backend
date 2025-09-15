FROM node:20-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install --omit=dev

# Copy source code
COPY . .

# Build the application
RUN npm run build

# Expose port (if needed for health checks)
EXPOSE 3001

# Start the application
CMD ["npm", "start"]
