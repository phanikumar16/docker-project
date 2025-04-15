# Base image: Uses lightweight Nginx image
FROM nginx:alpine

# Copies all local files to Nginx's default directory
COPY . /usr/share/nginx/html

#  Exposes port 80 for web traffic
EXPOSE 80
