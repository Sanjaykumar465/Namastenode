const fs = require("fs");
const http = require("http");

console.log("Hello World");
var a = 1078698;
var b = 20986;

http.get("http://dummyjson.com/api/courses", (res) => {
  console.log("Response received");
});

setTimeout(() => {
  console.log("Timeout");
});

fs.readFile("./file.txt", "utf-8", (err, data) => {
  console.log("File read:" + data);
});

function multiplyFn(a, b) {
  const result = a * b;
  return result;
}   
var c = multiplyFn(a, b);
console.log(c);