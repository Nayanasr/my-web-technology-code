debugger;
console.log(student); //Akshata

var student = "Akshata";
var stuent = 34;
console.log(student); //Akshata

// to avoid these conflicts we have let and key words are introduced in ES6
var d;
console.log(a); //undefined
console.log(b); //undefined
console.log(c); //undefined
console.log(d); //
var a = 10;
var b = 20;
var c = 30;
console.log(a); //10
console.log(b); //20
console.log(c); //30

//let and const
//console.log(sec);//ndefined

//temporal dead zone is a time between variable declaration and variable initialization
//you can not access the variables untill they are assigned with some values
let sec = "b";

//console.log(number2);
const number2 =56;
let x = 10;
console.log(x);
//let x=20;//redeclaring of variables is not possible if it is let keyword but reinitialization is possible 

let m=20;
x = m;
console.log(x);

//if it is  const key word redeclaration and reinitialization is not possible
const y = 50;

console.log(y);
//y = m;
console.log(y);

//console.log(num); //error
// const num = 20;//

const num = 30;
let num2 = 20; //

num = num2; //reinitialization
console.log(num2);