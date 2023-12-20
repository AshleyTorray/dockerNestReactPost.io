# Use a Node base image
FROM node:14 as builder

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies by copying
# package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Bundle app source
COPY . .

# Build the application
RUN npm run build

# Production image
FROM node:14

# Set working directory
WORKDIR /usr/src/app

# Copy built assets from the builder stage
COPY --from=builder /usr/src/app/dist ./dist
COPY --from=builder /usr/src/app/node_modules ./node_modules

# Expose the port the app runs on
EXPOSE 7072

# Run the app
CMD ["node", "dist/main"]
