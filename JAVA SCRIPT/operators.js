console.log(30 + 30); // arithmetic operators
console.log(20 - 10); // arithmetic operators
let a = 20;
let b = a++; // the increment operator increments and written the value before incremening
let c = ++a; // it increments the vale and return the incremented value
console.log(b);
console.log(a);

// comparison operators
// >=,<=,>,<,!=,==
// == and ===

let num = 10;
let num2 = "10";
console.log(num == num2); // true because it will check only the value
console.log(num === num2); // false because it will check along with the data types

let str = "true"; //
let str1 = true; //

let num3 = 20;
let num4 = "50";
console.log(num3 == num4, "this is boolian");

let x = 40;
let y = "40";

console.log(x < y, "this is less than operator"); //
console.log(x !== y);

//turnery operator

let age = 12;

console.log(age >= 18? "eligible for voting and dating" : "not eligible");

// turnery operator

let marks = 80;
console.log(marks > 80? "distinction":marks > 70? "first class" : 
marks > 35? "second class" : "fail");

// creating object using new keyword
var object = new Object
object.name = "Nayana"
object.address = "Tumkur"
object.age = 22
console.log(object);
