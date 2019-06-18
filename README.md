[![platform](https://img.shields.io/node/v/express/latest.svg)](https://nodejs.org/en/)
[![License](https://img.shields.io/badge/license-Apache%202-4EB1BA.svg?style=flat-square)](https://www.apache.org/licenses/LICENSE-2.0.html)
# docker-grunt-nodejs
Project creates a docker image for nodejs project with grunt.

### Create docker image 
`docker build -t docker-node-grunt:1.0.0 -f Dockerfile .`

### Run Docker Image
`docker run -p 9000:9000 docker-node-grunt:1.0.0`

### Access the Docker Image
*http://localhost:9000/*

Bingo! We're done.
