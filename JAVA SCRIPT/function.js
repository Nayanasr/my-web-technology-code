console.log(typeof NaN);// NUMBER
//named function
//named function syntax

//function funName(parameters){
//    statements}

function add(a, b) {
    return a + b;
}// function declaration

add(2, 7);// function call

// anonimous function
//syntax
// let x=function(){
//    statements}
let addAnoni = function (a) {
    return a * a;
}; // function expression

let x = addAnoni(3); //9
console.log(x);

// Arrow functions it is a ES6 feature
   let ArrowFun=(arguments)=>{
    //statements
   }
   ArrowFun()

//Immediately invoked function
//  (function (arguments){
//    statements
//  }
//  )();

function addition(a,b) {
    let sum = a + b;
    console.log(`sum of ${a} and ${b} is`, sum);
}
addition(4, 5);
addition(10, 15);
addition(6, 9);

// passing a function as an argument to another function also called as call back function

function findIsEligibleForVoting(age) {
    if (age >= 18) {
        return true;
    } else {
        return false;
    }
}
let result = findIsEligibleForVoting(14);

function printEligibleOrNot(arg) {
    if (arg === true) {
        console.log("eligible for voting");
    } else {
        console.log("not eligible for voting");
    }
}
printEligibleOrNot(result);

// immediately invoked functions
(function substration(a,b) {
    let sum = a - b;
    console.log(sum);
})(5, 3);

// when we have a single line in our function body no need of curly braces
let product = (a) => a * a;
console.log(product(4));

//if we have only one argument no need of paranthesis and curly braces
let square = (b) => b * b;
square();

// if we don't have parameter then paranthesis is mandatory
let names = () => console.log("data is safe in arrow function");
names();


