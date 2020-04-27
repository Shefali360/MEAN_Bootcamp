let fs = require('fs');
let filedata = fs.readFile('./data.txt','utf8', function(err,filedata){
   console.log(filedata);
});
console.log("Asynchronous File Read operation\n");
 
