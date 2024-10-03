# Stage 1: Build the app
FROM node:20 as build

WORKDIR /app

# Copy package.json and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the rest of the code
COPY . .

# Set production environment variable for build time
ARG REACT_APP_APP_URL
ENV REACT_APP_APP_URL=${REACT_APP_APP_URL}

# Build the project
RUN npm run build

# Stage 2: Serve the built app using a lightweight server
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html

# Expose the port the app runs on
EXPOSE 80