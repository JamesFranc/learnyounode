var fs = require('fs');

var buf = fs.readFileSync(process.argv[2]);

var arr = buf.toString().split('\n');

var result = arr.length-1;

console.log(result);