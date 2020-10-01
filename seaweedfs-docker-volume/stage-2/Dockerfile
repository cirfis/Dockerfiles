FROM node:10-alpine as builder
WORKDIR /work/
RUN  mkdir -p ./plugin/rootfs && docker create --name tmp cirfis/docker-seaweedfs-volume:rootfs && docker export tmp | tar -x -C ./plugin/rootfs
COPY config.json ./
RUN docker plugin create ./plugin && docker plugin push cirfis/docker-seaweedfs-volume:latest
RUN docker rm -vf tmp && rm -rf /tmp/*
