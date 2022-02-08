var fs = require('fs');

fs.writeFile("write.js","written",function(error){
    console.log("didnt work");
})