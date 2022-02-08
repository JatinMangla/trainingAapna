
var fs = require('fs');

fs.appendFile('writeFile.js',"added by appendFile",function(err){
    console.log("append file is not working");
})