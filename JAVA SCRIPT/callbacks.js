//call back function is  a function which take function as a argument
//why callback function?//we need callback function to handle the asynchronous behaviour of java script
function first(callback) {
    setTimeout(() => {
        console.log("first executed");
        callback();
    },6000);
}
function second() {
    setTimeout(() => {
        console.log("hello");
    },2000);
}
first(second);

//callback hell

// const animateAll = (animate) => {
 //   setTimeout(() => {
//     animate();
//      setTimeout();
//      animate();
//      setTimeout(() => {});
//  },2000);
 //callback inside a callback will lead to callback hell or pyramid of doom