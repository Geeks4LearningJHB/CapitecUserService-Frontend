# Stage 1: Build the Angular app
FROM node:14 AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build --prod

# Stage 2: Serve the Angular app with Nginx
FROM nginx:alpine

# Copy built Angular app
COPY --from=build /app/dist/capitec-user-service-frontend /usr/share/nginx/html

# Copy custom Nginx config
# COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy and set up entrypoint script
COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

# Use entrypoint instead of CMD
ENTRYPOINT ["/entrypoint.sh"]
