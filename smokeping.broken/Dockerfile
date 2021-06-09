FROM debian:testing-slim  as builder
ARG DEBIAN_FRONTEND=noninteractive

RUN apt update \
    && apt install -y build-essential autoconf automake gcc make rpcbind libgrpc-dev libtirpc-common libtirpc-dev git libnfs-utils libnfs-dev ronn \
    && git clone https://github.com/mprovost/NFStash.git /opt/nfstash && cd /opt/nfstash \
    && make

FROM ghcr.io/linuxserver/smokeping as base
COPY --from=builder /opt/nfstash/bin/. /usr/local/bin

RUN chmod -R a+rx /usr/local/bin \
    && apk add --no-cache libgcc lld elfutils libelf \
    && nfsping --version 

# ports and volumes
EXPOSE 80
VOLUME /config /data
