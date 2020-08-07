#!/bin/sh

if [ "$*" != '' ];then
	if [ "$*" = "geddy" ];then
		cp /tmp/asound.conf /etc/asound.conf \
		&& rc-service alsa zap && rc-service alsa start
		/usr/bin/nc -l -p 30230 -q 15 -4 | aplay -Dplug:default
        fi
	if [ "$*" = "munk" ];then
		cp /tmp/asound.munk /etc/asound.conf \
		&& rc-service alsa zap && rc-service alsa start
		/usr/bin/nc -l -p 30230 -q 20 -4 | aplay -Dplug:default
	else
		echo "UNRECOGNIZED COMMAND!!! EXITING!"
		sleep 4
		exit 2
	fi
else
	echo "NO HOST ARGUMENT PROVIDED! Commencing with default settings..."
	/usr/bin/nc -l -p 30230 -q 10 -4 | aplay -Ddefault
fi
