FROM    ubuntu:focal

VOLUME  ["/var/cache/apt-cacher-ng"]

RUN     apt-get update && DEBIAN_FRONTEND=noninteractive apt-get install -y apt-cacher-ng iproute2 grep bash tcpdump sed ca-certificates wget \
	&& rm -rf /var/lib/apt/lists/*

COPY	acng.conf /etc/apt-cacher-ng/acng.conf

EXPOSE  9999/tcp

HEALTHCHECK --interval=30s --timeout=10s --retries=3 \
    CMD wget -q -t1 -O /dev/null  http://localhost:9999/acng-report.html || exit 1

CMD     mkdir -p /var/cache/apt-cacher-ng /run/apt-cacher-ng && chmod 777 /var/cache/apt-cacher-ng /run/apt-cacher-ng && start-stop-daemon --start --exec "$(command -v apt-cacher-ng)" -- -c /etc/apt-cacher-ng/ && tail -f /var/log/apt-cacher-ng/*
