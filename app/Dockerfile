# Create image based on the official Node 6 image from the dockerhub
FROM node:6

# Create a directory where our app will be placed
RUN mkdir -p /srv/app

# Change directory so that our commands run inside this new directory
WORKDIR /srv/app

# Copy dependency definitions
COPY package*.json ./

# Install dependecies
RUN npm install

# Copy the rest of the source code
COPY . .

# Expose the port the app runs in
EXPOSE 3000

# Serve the app
CMD ["npm", "start"]
