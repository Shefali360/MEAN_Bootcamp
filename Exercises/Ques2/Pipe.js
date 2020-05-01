const fs=require('fs');
const zip=require('zlib');

const gzip=zip.createGzip();

const readStream=fs.createReadStream('sample.txt');
const writeStream=fs.createWriteStream('sampleoutput.txt.gz');
const write=fs.createWriteStream('output.txt');


readStream.pipe(gzip).pipe(writeStream);
readStream.pipe(write);
