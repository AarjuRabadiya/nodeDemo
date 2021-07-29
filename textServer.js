var fs = require("fs");

var data = fs.readFileSync("test.txt", "utf8");
console.log(data);
