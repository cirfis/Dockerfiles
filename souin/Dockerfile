FROM golang:alpine AS builder

ENV VERSION_TAG v1.5.9

ENV GOPATH /app
ENV GOOS linux
ENV GOARCH arm64

RUN apk add --no-cache bash git openssh gcc libc-dev \
    && mkdir -p /app/src/github.com/darkweak/cmd \
    && git clone https://github.com/darkweak/souin.git /app/src/github.com/darkweak/souin \
    && export ARCH=$(uname -m);if [[ $ARCH == "x86_64" ]]; then export GOARCH=amd64;elif [[ "$ARCH" == "aarch64" ]];then export GOARCH=arm64;fi

WORKDIR /app/src/github.com/darkweak/souin

RUN git checkout $VERSION_TAG \
    && go mod download \
    && CGO_ENABLED=0 GOOS=linux go build -a -tags netgo -ldflags '-w -extldflags "-static"' -o /app/cmd/souin ./plugins/souin


###############################
FROM alpine:latest AS souin

WORKDIR /

RUN mkdir -p /ssl /configuration /default

COPY --from=builder /app/cmd/souin /sbin/ 
COPY --from=builder /app/src/github.com/darkweak/souin/configuration .
COPY --from=builder /app/src/github.com/darkweak/souin/default .

RUN mv *.yml /configuration/ && mv server.* default/ && chmod +x /sbin/souin

EXPOSE 80

CMD ["souin"]
