let fs = require('fs');
let filedata = fs.readFileSync('data.txt','utf8'); 
console.log(filedata);
console.log("Synchronous File Reading Operation\n");
