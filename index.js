//Import Express
var express = require('express')
var app = express()

//Import Path
var path = require('path')

//Mounting our .js from build folder.
app.use("/build", express.static(__dirname + "/build"))

//Capture the base url
app.get('/', function(req, res){
	res.sendFile(__dirname + "/index.html")
})

//Listen on port 9000
app.listen(9000, function(){
	console.log('Listening on port 9000')
})
