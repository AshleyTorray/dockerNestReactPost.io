# Backend/Dockerfile

# Build stage
FROM node:14 as build

WORKDIR /usr/src/app
COPY package*.json ./
COPY .base.env ./ 
RUN npm install

COPY . .
RUN npm run build

# Run stage

EXPOSE 7072
CMD ["npm", "run", "start:prod"]
