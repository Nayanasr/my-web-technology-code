console.log("outside the function a", a);
var a = 20;
var b = 30;

console.log("outside the function b", b);

//variable hoisting inside the function
function test() {
    console.log("b inside the function", b);
    var b = 10; //inside the function local varable will get highest priority
    console.log("a inside the function", a);
    console.log(b);
}
test();

//hoisting:= hoisting is a technique which moves variables and function declarations to the top of
// there scope before code execution begins

//function hoisting is posiible only for named functions
add(2, 4);

var name = "nayana";
function add(a, b) {
    console.log(a + b);
}

greet(); // error //in this case it behaves like variable hoisting
var greet = function () {
    console.log("good morning");
};
