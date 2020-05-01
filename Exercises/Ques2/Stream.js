const fs=require('fs');
const readableStream=fs.createReadStream('sample.txt');
let data='';

readableStream.on('data',(chunk)=>{
    console.log("------------------A Chunk-----------------\n\n\n\n"+chunk)
    data+=chunk;
});

readableStream.on('end',()=>{
    console.log(data);
});