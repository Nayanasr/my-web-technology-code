
console.log("start");
function add() {
    console.log("i am inside the function");
    setTimeout(() => {
        console.log("set time out");
    }, 20000);
    setTimeout(() => {
        console.log("set time out 2");
    }, 10000);
}
add();
setTimeout(() => {
    console.log("set time out 3");
}, 0);
console.log("hello");
console.log("end");