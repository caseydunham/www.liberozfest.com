# Create image based on the official Node 6 image from the dockerhub
FROM node:6

# Create a directory where our app will be placed
RUN mkdir -p /usr/share/nginx/html

# Change directory so that our commands run inside this new directory
WORKDIR /usr/share/nginx/html

# Copy dependency definitions
COPY package.json /usr/share/nginx/html

# Install dependecies
RUN npm install

# Get all the code needed to run the app
COPY . /usr/share/nginx/html

# Expose the port the app runs in
#EXPOSE 3000

# Serve the app
#CMD ["npm", "start"]
