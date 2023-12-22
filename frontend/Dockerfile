# Stage 1 - Build the React App
FROM node:14 as builder
WORKDIR /app
COPY package*.json ./
COPY . .
COPY .env ./ 
RUN npm install
RUN npm run build

# Stage 2 - Serve the React App
#FROM nginx:alpine

# Copy the build output to replace the default nginx contents.
#COPY --from=builder /app/build /usr/share/nginx/html

# Expose port 80
EXPOSE 3000

# Start nginx
#CMD ["nginx", "-g", "daemon off;"]
CMD ["npm", "run", "start"]