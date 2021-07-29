// var myLogModule = require("./Log.js");

// myLogModule.info("Node.js started");
// var msg = require("./Log.js");

// msg.log("Hello World");
// var msg = require("./Messages.js");

// console.log(msg);
// var person = require("./data.js");
// console.log(person.firstName + " " + person.lastName);
const http = require("http");

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello, World!\n");
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
