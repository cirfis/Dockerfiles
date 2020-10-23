
create_pid_dir() {
  mkdir -p /run/apt-cacher-ng /run/keepalived
  chmod -R 0755 /run/apt-cacher-ng /run/keepalived
}


create_log_dir() {
  mkdir -p /var/log/apt-cacher-ng /var/log/keepalived
  chmod -R 0755 /var/log/apt-cacher-ng/ /var/log/keepalived
}

update_keepalived_config() {
  INTERFACE=$(ip -o addr show scope global | awk '{split($4, a, "/"); print $2}')
  /bin/sed -i "s/{{INTERFACE}}/${INTERFACE}/g" /etc/keepalived/keepalived.conf
}

update_keepalived_config
create_pid_dir
create_log_dir

trap "stop_acng;exit 0;" SIGTERM SIGINT

stop_acng() {
  # We're here because we've seen SIGTERM, likely via a Docker stop command or similar
  # Let's shutdown cleanly
  echo "SIGTERM caught, terminating ACNG & Keepalived processes..."
  # Record PIDs
  pid=$(pidof keepalived apt-cacher-ng)
  # Kill them
  kill -TERM $pid > /dev/null 2>&1
  # Wait until processes have been killed.
  # Use 'wait $pid' instead if you dislike using sleep (the wait command has less OS support)
  wait $pid
  echo "Terminated."
  exit 0
}  

while true; do
  # Check if Keepalived is running by recording it's PID (if it's not running $pid will be null):
  pid=$(pidof keepalived)
  # If $pid is null, do this to start or restart Keepalived:
  while [ -z "$pid" ]; do
    echo "Displaying resulting /etc/keepalived/keepalived.conf contents..."
    cat /etc/keepalived/keepalived.conf
    echo "Starting Keepalived in the background..."
    /usr/sbin/keepalived --dont-fork --dump-conf --log-console --log-detail --vrrp &
    # Check if Keepalived is now running by recording it's PID (if it's not running $pid will be null):
    pid=$(pidof keepalived)
    # If $pid is null, startup failed; log the fact and sleep for 2s
    # We'll then automatically loop through and try again
    if [ -z "$pid" ]; then
      echo "Startup of Keepalived failed, sleeping for 2s, then retrying..."
      sleep 2
    fi
  done

break
while true; do
  pid2=$(pidof apt-cacher-ng)
  while [ -z "$pid2" ]; do
    start-stop-daemon --start \
        --exec "$(command -v apt-cacher-ng)" -- -c /etc/apt-cacher-ng
    pid2=$(pidof apt-cacher-ng)
    # If $pid is null, startup failed; log the fact and sleep for 2s
    # We'll then automatically loop through and try again
    if [ -z "$pid2" ]; then
      echo "Startup of Apt-Cacher-NG failed, sleeping for 2s, then retrying..."
      sleep 2
    fi
  done

break

tail -f /var/log/apt-cacher-ng/*
