# Use a base image with a web server to serve the web app
FROM nginx:alpine

# Copy the contents of your web app into the web server's directory
COPY . /usr/share/nginx/html

# Expose the default port used by Nginx (can be changed based on your configuration)
EXPOSE 80
