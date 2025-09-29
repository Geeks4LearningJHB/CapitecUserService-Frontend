#!/bin/sh
cat <<EOF > /usr/share/nginx/html/assets/config.json
{
  "rootUrl": "${ROOT_URL}"
}
EOF

exec nginx -g "daemon off;"
