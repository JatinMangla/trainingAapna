//const express= require('express');
var http = require('http');
http.createServer(function(req, res){
    res.write("hello i m jatin ");
    res.end();
}).listen(8080);