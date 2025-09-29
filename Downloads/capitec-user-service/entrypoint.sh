#!/bin/sh

# Generate config.json
cat <<EOF > /usr/share/nginx/html/assets/config.json
{
  "rootUrl": "${ROOT_URL}"
}
EOF

# Generate nginx.conf dynamically
cat <<EOF > /etc/nginx/conf.d/default.conf
server {
  listen 80;

  location / {
    root /usr/share/nginx/html;
    index index.html;
    try_files \$uri \$uri/ /index.html;
  }

  location /api/ {
    proxy_pass ${BACKEND_URL}/;
    proxy_http_version 1.1;
    proxy_set_header Host \$host;
    proxy_set_header X-Real-IP \$remote_addr;
    proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
  }
}
EOF

exec nginx -g "daemon off;"
