FROM alpine:latest AS build

RUN apk add --no-cache rust cargo fontconfig-dev freetype-dev cmake make pkgconf gcc g++ git && \
    git clone https://github.com/koto-bank/kocaptcha /kocaptcha

WORKDIR /kocaptcha

RUN     cargo build --release

FROM alpine:latest

COPY --from=build /kocaptcha/target/release/kocaptcha /kocaptcha/kocaptcha

RUN apk add --no-cache fontconfig freetype libgcc font-overpass ttf-ubuntu-font-family

WORKDIR /kocaptcha

EXPOSE 9093

ENV KOCAPTCHA_FONT_FAMILY=overpass

ENV RUST_BACKTRACE=full
#ENV RUST_BACKTRACE=1

CMD ./kocaptcha
