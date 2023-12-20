# Stage 1 - Build the React App
FROM node:14 AS builder

# Create app directory
WORKDIR /app

# Install app dependencies
COPY package.json yarn.lock ./
RUN yarn install

# Bundle app source
COPY . .

# Build the application
RUN yarn build

# Stage 2 - Serve the React App
FROM nginx:alpine

# Copy the build output to replace the default nginx contents.
COPY --from=builder /app/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
