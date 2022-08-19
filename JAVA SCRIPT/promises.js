//PROMISES::There are asynchronous and web APIs
//3 STATES OF PROMISES
//1)PENDING
//2)RESOLVE
//3)REJECT
console.log("start");

new Promise(function(resolve, reject){
    if (10 > 4) {
        resolve("success");
    } else {
        reject("error");
    }
})
 .then((data) => {
    console.log(data);
 })
 .catch((err) => {
    console.log(err);
 });
 console.log("ended");

const myPromis = new Promise(function (res, rej) {
    setTimeout(() => {
        res("successfully done");
    },4000);
});

myPromis
 .then((data) => {
    console.log(data);
 })
 .catch((err) => {
    console.log(err);
 });

 Promise.all([firstProm, myPromis])
  .then(() => {})
  .catch(() => {});