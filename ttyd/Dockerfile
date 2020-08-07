FROM tsl0922/musl-cross
RUN git clone --depth=1 https://github.com/tsl0922/ttyd.git /ttyd \
    && cd /ttyd && ./scripts/cross-build.sh x86_64

FROM krallin/ubuntu-tini
LABEL maintainer "cirfis"
COPY --from=0 /ttyd/build/ttyd /usr/bin/ttyd

RUN yes | unminimize \
    && apt-get install -y --no-install-recommends \
      apt-utils \
      ca-certificates \
      iproute2 \
      libjson-c3 \
      libwebsockets8 \
      openssl \
      openssh-client \
      nano \
      sudo \
      git \
      httpie \
      wget \
      nmap \
      netcat-openbsd \
      socat \
      netrw \
      rsync \
      netdiag \
      htop \
      curl \
      git \
      iputils-ping \
      tcptraceroute \
      inetutils-telnet \
      zsh \
      dnsutils \
      lolcat \
      mtr \
      iftop \
      && apt-get clean && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/* 

RUN sed 's/root:\/bin\/bash/root:\/usr\/sbin\/nologin/' /etc/passwd \
    && printf '\ncirfis   ALL=(ALL) NOPASSWD: ALL\n' >> /etc/sudoers && printf '\nPermitRootLogin no\n' >> /etc/ssh/sshd_config \
    && useradd -d /home/cirfis -m -G adm,sys,users,sudo,dialout,disk,sys,operator,floppy,lp,syslog -s /bin/zsh --password "\$1\$LzzT28gv\$lsEtHA4uW7XgDZJp2gKVW1" cirfis

#COPY ./zsh /home/cirfis/
#RUN su cirfis && curl https://github.com/cirfis.keys >> /home/cirfis/.ssh/authorized_keys && /bin/sh -c "$(curl -fsSL https://raw.githubusercontent.com/loket/oh-my-zsh/feature/batch-mode/tools/install.sh)" -s --batch

EXPOSE 7681
CMD ["ttyd","login"]
