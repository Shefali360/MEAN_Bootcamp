const fs = require("fs");
fs.readFile("./data.txt", "utf8", (err, data) => {
  console.log(data);
});
console.log("Asynchronous File Read operation\n");
