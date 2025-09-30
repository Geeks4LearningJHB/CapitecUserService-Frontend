#!/bin/bash
set -e  # Exit immediately if a command exits with a non-zero status
# Step 1: Run the Maven build (clean and package)
##mvn clean package -DskipTests
# Step 2: Build the Docker image (if not already handled by docker-compose)
##Build and publish ARM image
##docker buildx build --platform linux/arm64 -t capitec-user-service-frontend:arm64 --load .

##docker tag capitec-user-service-frontend:arm64 thapeloseema/capitec-user-service:frontend-arm64

##docker push thapeloseema/capitec-user-service:frontend-arm64

##Build and publish AMD image

docker buildx build --platform linux/amd64 -t capitec-user-service-frontend:amd64 --load .

docker tag capitec-user-service-frontend:amd64 thapeloseema/capitec-user-service:frontend-amd64v1.0.6

docker push thapeloseema/capitec-user-service:frontend-amd64v1.0.6
# Step 3: Start the Docker Compose services
##docker-compose up
