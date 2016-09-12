FROM nginx:latest
COPY dist /usr/share/nginx/html
ENTRYPOINT ["nginx", "-g", "daemon off;"]