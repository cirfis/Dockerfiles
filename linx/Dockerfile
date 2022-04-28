FROM golang:alpine AS build

ENV LINX_VER master

RUN set -x  \
        && apk add --no-cache --virtual .build-deps git \
        && git clone https://github.com/ZizzyDizzyMC/linx-server /go/src/github.com/ZizzyDizzyMC/linx-server \
        && cd /go/src/github.com/ZizzyDizzyMC/linx-server && git checkout $LINX_VER
        
WORKDIR /go/src/github.com/ZizzyDizzyMC/linx-server
RUN set -ex \
    && go get -v . \
    && apk del .build-deps

FROM alpine AS linx

COPY --from=build /go/bin/linx-server /usr/local/bin/linx-server

ENV GOPATH /go
ENV SSL_CERT_FILE /etc/ssl/cert.pem

COPY --from=build /go/src/github.com/ZizzyDizzyMC/linx-server/static /go/src/github.com/ZizzyDizzyMC/linx-server/static/
COPY --from=build /go/src/github.com/ZizzyDizzyMC/linx-server/templates /go/src/github.com/ZizzyDizzyMC/linx-server/templates/

RUN mkdir -p /data/files && mkdir -p /data/meta && chown -R 65534:65534 /data \
    && mkdir -p /go/src/github.com/andreimarcu/ && ln -sv /go/src/github.com/ZizzyDizzyMC/linx-server /go/src/github.com/andreimarcu/linx-server

VOLUME ["/data/files", "/data/meta"]

EXPOSE 8080
USER nobody
ENTRYPOINT ["/usr/local/bin/linx-server", "-filespath=/data/files/", "-metapath=/data/meta/", "-bind=0.0.0.0:8080", "-config=/data/linx-server.conf"]
CMD ["-sitename=linx", "-allowhotlink"]
