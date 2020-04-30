const fs = require("fs");
try {
  let fileData = fs.readFileSync(`${__dirname}/data.txt`, "utf8");
  console.log(fileData);
} catch (error) {
  console.error(`Error during reading file data ${error}`);
}
console.log("Synchronous File Reading Operation\n");
