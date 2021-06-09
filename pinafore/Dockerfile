# Using Alpine to keep the images smaller
# Change to using the official NodeJS Alpine container
FROM node:alpine
ARG PINAFORE_VER=v1.24.4

WORKDIR /app
RUN apk add --no-cache git \
    && git clone https://github.com/nolanlawson/pinafore /app \
    && git checkout "${PINAFORE_VER}"
    
# Install Pinafore
RUN yarn --production --pure-lockfile \
    && yarn build || true

# Pushing all files into image
COPY __sapper__		/app/__sapper__

RUN     yarn cache clean \
        && rm -rf ./src ./docs ./tests ./bin Dockerfile BREAKING_CHANGES.md CONTRIBUTING.md docker-compose.yml LICENSE README.md 

# Expose port 4002
EXPOSE 4002

# Setting run-command, using explicit `node` command
# rather than `yarn` or `npm` to use less memory
# https://github.com/nolanlawson/pinafore/issues/971
CMD PORT=4002 /usr/local/bin/node --trace-warnings ./server.js
