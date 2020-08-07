FROM alpine:latest
MAINTAINER cirfis

RUN apk --update --no-cache add nodejs git npm \
	&& git clone https://github.com/trailofbits/tubertc.git /app

WORKDIR /app

RUN npm install

EXPOSE 8080

ENTRYPOINT ["/usr/bin/npm"]

CMD ["start"]
