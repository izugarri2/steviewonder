FROM nginx:alpine
COPY ./ /usr/share/nginx/html
EXPOSE 8080
USER 101
