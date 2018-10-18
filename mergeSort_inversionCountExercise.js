var fs  = require("fs");
var path = "./mergeSort_inversionCountExercise_integerArr.txt"
var array = fs.readFileSync(path).toString().split('\r\n');
array.forEach((str, index) => array[index] = Number(str));

var inversionCount = require('./mergeSort_inversionCount.js').inversionCountClass;

var ic = new inversionCount ();

var sorted = ic.mergeSort(array);
console.log(ic.inversionCount);