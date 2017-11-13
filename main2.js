var fs = require("fs");
var data = fs.readFileSync('datarep.txt');
console.log(data.toString());
console.log("Program Ended");