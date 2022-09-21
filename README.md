[![platform](https://img.shields.io/node/v/express/latest.svg)](https://nodejs.org/en/)
[![License](https://img.shields.io/badge/license-Apache%202-4EB1BA.svg?style=flat-square)](https://www.apache.org/licenses/LICENSE-2.0.html)
# docker-grunt-nodejs
Project creates a docker image for nodejs project with grunt.

Blog to go throught the steps:
https://www.coderconsole.com/2019/06/how-to-create-docker-image-with-nodejs.html

### Create docker image 
`docker build -t docker-node-grunt:1.0.0 -f Dockerfile .`

### Run Docker Image
`docker run -p 9000:9000 docker-node-grunt:1.0.0`

### Access the Docker Image
*http://localhost:9000/*

### Screenshots
<img width="544" alt="ui-nodejs-docker-grunt" src="https://user-images.githubusercontent.com/10304040/59710916-a28c6300-9227-11e9-822c-ed99ab71a4d5.png">

<img width="598" alt="docker-nodejs-grunt" src="https://user-images.githubusercontent.com/10304040/59710915-a1f3cc80-9227-11e9-8d21-21f4a6f206cb.png">

Bingo! We're done.
