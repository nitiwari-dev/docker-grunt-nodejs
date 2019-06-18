# Select the Node Module
FROM node:11

# Add the working Directory
WORKDIR /app

# COPY out package.json to our working directory /app
COPY package*.json /app/

# RUN npm install which will download all the dependencies from package.json
RUN npm install

# COPY the current content to /app folder structure
COPY . /app/

# UGLIGY the src/*.js
RUN npm run build

# EXPOSE our port
EXPOSE 9000

# Create EntryPoint of index.js file
ENTRYPOINT ["node", "index.js"]



