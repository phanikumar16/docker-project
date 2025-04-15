# Use an official Nginx image to serve the static files
FROM nginx:alpine
# Copy the HTML, CSS, JS files into the Nginx container
COPY . /usr/share/nginx/html
# Expose port 80 to access the app
EXPOSE 80
