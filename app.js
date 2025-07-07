require("./xyz");
// const { x, calculateSum } = require("./calculate/sum");
var name = "Namaste NodeJS";
// const { calculateMultily } = require("./calculate/multiply.js");
 const { calculateSum,calculateMultily} = require("./calculate");

 const data  = require("./data.json");
 console.log(data);

var a = 10;
var b = 20;

console.log(name);
console.log(a + b);

calculateSum(a, b);
calculateMultily(a, b);
