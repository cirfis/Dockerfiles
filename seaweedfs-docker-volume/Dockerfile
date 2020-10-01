FROM node:10-alpine
####
# Install SeaweedFS Client
####

ARG SEAWEEDFS_VERSION=1.87
ENV SEAWEEDFS_VERSION=$SEAWEEDFS_VERSION
ARG GOARCH=arm64
ENV GOARCH=$GOARCH

RUN apk update && \
apk add fuse3 && \
apk add --no-cache --virtual build-dependencies --update wget curl ca-certificates nodejs && \
wget -qO /tmp/linux_${GOARCH}.tar.gz https://github.com/chrislusf/seaweedfs/releases/download/${SEAWEEDFS_VERSION}/linux_${GOARCH}.tar.gz && \
tar -C /usr/bin/ -xzvf /tmp/linux_${GOARCH}.tar.gz && \
apk del build-dependencies && \
rm -rf /tmp/*

# Switch to the project directory
WORKDIR /project

# Copy in package.json
COPY package.json package-lock.json /project/

# Copy in source code
COPY index.js /project/

# Install project dependencies
RUN npm install


# Create directories for mounts
RUN mkdir -p /mnt/seaweedfs
RUN mkdir -p /mnt/docker-volumes

# Set Configuration Defaults
ENV HOST=swarm \
PORT=9333 \
ALIAS=seaweedfs \
ROOT_VOLUME_NAME="" \
MOUNT_OPTIONS="" \
REMOTE_PATH=/docker/volumes \
LOCAL_PATH="" \
CONNECT_TIMEOUT=10000 \
LOG_LEVEL=info

# Set the Docker entrypoint
ENTRYPOINT ["node", "index.js"]
