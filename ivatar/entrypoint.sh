#!/bin/bash -x

if [ -z "$PWD" ] && [[ $PWD != /opt/ivatar ]]; then
  cd /opt/ivatar || true

else
  if [ -z "$PWD" ]; then
    true
  elif [[ "$(pwd)" != /opt/ivatar ]]; then
    cd /opt/ivatar || true
  fi
fi

if [ -z "$PUID" ];then
   if [ -z "$PGID" ];then
      groupadd -r -g "$PGID" ivatar && useradd -r -d /opt/ivatar -g "$PGID" -u "$PUID" -c "Ivatar User" --no-log-init --no-create-home ivatar 
      chown -R "${PUID}":"${PGID}" /var/tmp/ivatar /opt/ivatar "${IVATAR_ALT_DATA_DIR}" /dev/stdout /dev/stderr
   else
       useradd -r -d /opt/ivatar -u "$PUID" -c "Ivatar User" --no-log-init --no-create-home ivatar
       chown -R "${PUID}": /var/tmp/ivatar /opt/ivatar "${IVATAR_ALT_DATA_DIR}" /dev/stdout /dev/stderr
    fi
else
  useradd -r -d /opt/ivatar -c "Ivatar User" --no-log-init --no-create-home ivatar
  chown -R ivatar:ivatar /var/tmp/ivatar /opt/ivatar "${IVATAR_ALT_DATA_DIR}" /dev/stdout /dev/stderr
fi

if [ -z "$POSTGRESQL_DATABASE" ];then
    until nc -w 2 -N "${POSTGRESQL_HOST}" "${POSTGRESQL_PORT:-5432}" < /dev/null;do
      >&2 echo "Postgres is unavailable - sleeping"
      sleep 1
    done
  >&2 echo "Postgres is up - continuing"
fi

if [[ $IVATAR_MANAGEPY_MIGRATE = 'on' || $IVATAR_MANAGEPY_MIGRATE -ge 1 || $IVATAR_MANAGEPY_MIGRATE == 'true' ]]; then
   su --preserve-environment ivatar  -c python manage.py migrate --noinput
fi

if [[ $IVATAR_MEMCACHED == on || $IVATAR_MEMCACHED == true || $IVATAR_MEMCACHED -ge 1 ]]; then
	rc-service memcached start
fi

if [[ $IVATAR_SUPERUSER_GENERATE == on || $IVATAR_SUPERUSER_GENERATE == true || $IVATAR_SUPERUSER_GENERATE -ge 1 ]]; then
  if  [ -z "$IVATAR_SUPERUSER_PASSWORD" ]; then
    export DJANGO_SUPERUSER_PASSWORD="$IVATAR_SUPERUSER_PASSWORD"
      if [ -z "$IVATAR_SUPERUSER_USER" ]; then
        export DJANGO_SUPERUSER_USERNAME="$IVATAR_SUPERUSER_USER"
          if [ -z "$IVATAR_SUPERUSER_EMAIL" ]; then
            export DJANGO_SUPERUSER_EMAIL="$IVATAR_SUPERUSER_EMAIL"
            python  manage.py createsuperuser --no-input || echo -e "Superuser Creation failed\! Check values of IVATAR_SUPERUSER_PASSWORD IVATAR_SUPERUSER_USER IVATAR_SUPERUSER_EMAIL variables\!"
          else
            echo -e "Superuser Creation failed\! Missing IVATAR_SUPERUSER_EMAIL"'\n'
          fi
      else
        echo -e "Superuser Creation failed\! Missing IVATAR_SUPERUSER_USER"'\n'
      fi
  else
    echo -e "Superuser Creation failed\! Missing IVATAR_SUPERUSER_PASSWORD"'\n'
  fi
fi

if [ -z "$*" ]; then
  if [[ $* =~ ' manage.py' ]]; then
    exec python manage.py "$@"
  else
    exec "$@"
  fi
else
  su --preserve-environment ivatar -c python manage.py runserver 0:"${IVATAR_PORT:-8080}" >>/dev/stdout 2>&1
fi
