#!/bin/bash

# Make directory
mkdir -p /config/flood \
	/config/rtorrent/{log,session} \
        /downloads/{Incomplete,Watch}

[[ ! -e /config/flood/config.js ]] && \
    mv /usr/lib/flood/config.js /config/flood/config.js

ln -fs /config/flood/config.js /usr/lib/flood/config.js
sed -e "s#dbPath: .*#dbPath: '/config/flood',#" -i /config/flood/config.js


# NPM
[[ ! -d /config/flood/.npm ]] && \
  mkdir /config/flood/.npm && \
  npm config set prefix '/config/flood/.npm'
