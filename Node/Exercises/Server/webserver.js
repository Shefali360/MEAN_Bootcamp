var http = require("http");
var server = http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write("<!DOCTYPE html>");
  response.write("<html>");
  response.write("<head>");
  response.write("<title>First Node Page</title>");
  response.write("</head>");
  response.write("<body>");
  response.write("Hey!My first node session.");
  response.write("</body>");
  response.write("</html>");
  response.end();
});

server.listen(3000);
console.log("Server is listening");