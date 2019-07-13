FROM nginx

EXPOSE 3005
EXPOSE 8089

COPY ./default.conf /etc/nginx/conf.d/default.conf