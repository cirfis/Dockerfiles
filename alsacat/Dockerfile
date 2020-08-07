FROM alpine
MAINTAINER cirfis

COPY asound.* /tmp/

RUN apk add --upgrade --no-cache netcat-openbsd  sox gstreamer alsa-utils  alsa-lib alsaconf openrc \
	&& sed 's/audio:x:18:/audio:x:18:root/gi' /etc/group \
	&& rc-update add alsa

ADD launch.sh /

EXPOSE 30230

WORKDIR /tmp

ENTRYPOINT ["/launch.sh"]
