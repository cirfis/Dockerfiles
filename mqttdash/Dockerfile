FROM ubuntu as builder
ARG DEBIAN_FRONTEND=noninteractive \
    MQTTDASH_RELEASE=1.0.0

RUN apt-get update && apt-get install -y \
	curl \
        nginx-extras \
	luarocks \
	libssl-dev \
	unzip \
    && rm -rf /var/lib/apt/lists/*

RUN curl -sSL -o /mo https://git.io/get-mo && chmod a+x /mo &&\
	curl -sSL -o /mqtt-admin.zip "https://github.com/hobbyquaker/mqtt-admin/releases/download/v${MQTTDASH_RELEASE}/mqtt-admin_${MQTTDASH_RELEASE}.zip" &&\
	unzip /mqtt-admin.zip && mv mqtt-admin /www &&\ 
	chown -R www-data:www-data /www

from nginx:alpine
COPY --from=builder /www /www
COPY --from=builder /mo /usr/local/bin/mo

COPY nginx.template /nginx.template
COPY run.bash /run.bash

# ensure www-data user exists
RUN set -x ; \
  apk add --no-cache nginx bash ; \
  addgroup -g 82 -S www-data ; \
  adduser -u 82 -D -S -G www-data www-data ; \
  chown -R www-data:www-data /www ; \
  chmod a+x /run.bash && exit 0 ; exit 1

EXPOSE 80
EXPOSE 443

CMD ["/bin/bash", "-c", "/run.bash"]
