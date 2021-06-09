FROM alpine

#Base settings
ENV HOME /root
ENV PYTHONUNBUFFERED=1

COPY requirements.txt /root/requirements.txt

#Install ZeroNet
RUN apk --update --no-cache --update-cache --no-progress add python3 tor openssl \
 && echo "ControlPort 9051" >> /etc/tor/torrc \
 && echo "CookieAuthentication 1" >> /etc/tor/torrc

RUN apk add --no-cache --update-cache --virtual build-dependencies \
	build-base alpine-sdk gcc libffi-dev musl-dev python3-dev make g++ automake autoconf libtool cmd:pip3 \
 && pip3 install --no-cache --upgrade pip setuptools wheel \
 && pip3 install -r /root/requirements.txt \
 && apk del build-dependencies
 
RUN python3 -V \
 && tor --version \
 && openssl version

#Add Zeronet source
COPY . /root
VOLUME /root/data

#Expose ports
EXPOSE 43110 26552

#Control if Tor proxy is started
ENV ENABLE_TOR false

WORKDIR /root

#Set upstart command
CMD (! ${ENABLE_TOR} || tor&) && python3 zeronet.py --ui_ip 0.0.0.0 --fileserver_port 26552

