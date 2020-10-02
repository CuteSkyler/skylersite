var express = require('express');
const { Socket } = require('dgram');
var http = require('http');
var app = express();
var serv = require('http').Server(app);
var connect=require('connect');
var serveStatic = require('serve-static');

app.get('/',function(req, res) {
	res.sendFile(__dirname + '/client/index.html');
});
app.use('/client',express.static(__dirname + '/client'));

serv.listen(8080);
console.log("Server started.");