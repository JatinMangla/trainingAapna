var express = require('express');
var app = express();
var fs = require("fs");

var id = 2;

app.get('/deleteUser', function (req, res) {
   // First read existing users.
   fs.readFile("users.json", 'utf8', function (err, data) {
      data = JSON.parse( data );
      delete data["user" +4];
       
      console.log( data );
      res.end( JSON.stringify(data));
   });
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   console.log( host, port)
})