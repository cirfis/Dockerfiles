from alpine
ARG IVATAR_TAG=master \
    DATABASE_URL=''

RUN apk add --no-cache --update-cache --virtual build-dep cmd:pip3 build-base linux-headers gcc g++ make libtool git autoconf musl-dev libffi-dev cmd:mysql_config rust cargo \
    && apk add --no-cache bash curl python3-dev linux-pam shadow jpeg-dev zlib-dev postgresql-dev memcached libmemcached-dev postgresql-client imagemagick imagemagick-dev openldap-dev

WORKDIR /opt/ivatar
RUN git clone https://git.linux-kernel.at/oliver/ivatar.git /opt/ivatar && git checkout ${IVATAR_TAG} \
    && pip3 install --no-cache --upgrade pip setuptools wheel pillow \
    && pip3 install -r requirements.txt 
    && ln -s /usr/local/bin/python3 /usr/bin/python \
    && ./manage.py check
    

COPY config.py		/opt/ivatar/config.py
COPY entrypoint.sh	/entrypoint.sh

RUN python manage.py collectstatic -l --no-input \
    && mkdir -p /var/tmp/ivatar_cache \
    && apk del build-dep \
    && pip cache purge \
    && chmod +x /entrypoint.sh

VOLUME /var/tmp/ivatar_cache
EXPOSE 8080

ENTRYPOINT ['bash', '-c', '/entrypoint.sh']
