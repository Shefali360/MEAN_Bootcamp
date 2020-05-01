const buffer1=Buffer.alloc(10);
const buffer2=Buffer.from("My very first buffer.")
console.log(buffer1);
console.log(buffer2);
console.log(buffer1.length);
console.log(buffer2.length);

buffer1.write("Writing into my first buffer.");
const buf=buffer1.toString();
console.log(buf);//Only prints data upto 10 bytes because buffer1 is allocated 10 bytes.