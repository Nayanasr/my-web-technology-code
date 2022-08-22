// assignment 2 javascript
// using ternary operator
let BMI = 30;
console.log(BMI >= 25? "Overweight":BMI >= 18? "Normal" : "Underweight");

// using if else statement
let BMI1 = 20;
if(BMI1>=25){
    console.log("overweight");
}
else if(BMI1>18){
    console.log("Normal");
}
if(BMI1<18){
    console.log("Underweight");
}

//examples for primitive
//examples for each primitive type using typeof operator
//1.Number
let num = 1;
let num1 = 6985436;
console.log(typeof num);
console.log(typeof num1);

//2.string
const name = "Nayana";
const age = "8";
console.log(typeof name);
console.log(typeof age);

//3.boolean
let x = true;
const y = false;
console.log(typeof x);
console.log(typeof y);

//4.undefined
let a;
let b;
console.log(typeof a);
console.log(typeof b);

//5.null
const d = null;
let e = null;
console.log(typeof d);
console.log(typeof e);


//7.create 5 arrays with using new keyword with all primitive types and object and loop using for loop
//1.number
const newArr = new Array(4, 8, 9, 98, 56);
for (let value of newArr) {
  console.log(value);
}
//2.string
let newarr2 = new Array("nayana", "ramesh", "jayanth", "shashikala", "sarojamma");
for (let value of newarr2) {
  console.log(value);
}
//3.object
let obj1 = new Object(); //creating an object using new key world
obj1.name = "nayana";
obj1.phNo = 9876543333345;
obj1.age = 20;
obj1.address = "tumkur";
obj1.gender = "f";
for (let key in obj1) {
  console.log(`${key}-${obj1[key]}`);
}

//8.display day
const date1 = new Date("sept/12/2020");
const fullDate = date1.toLocaleDateString("eng", {
  //kan,en-in
  weekday: "long",
  month: "long",
  year: "numeric",
  day: "2-digit",
});
console.log(fullDate);

//5 examples using for in loop ,for of loop
let colors = ["yellow", "violet", "red", "black", "brown"];
for (let i of colors) {
  console.log(i);
}

let obj2 = new Object();
obj2.firstName = "nayana";
obj2.lastName = "S R";
obj2.gender = "female";
obj2.phNo = 76522876543;
obj2.age = 22;

for (let key in obj2) {
  console.log(`${key}-${obj2[key]}`);
}

let numbers = [49.7, 65.6, 87.0, 654, 9];
for (let key in numbers) {
  console.log(numbers[key]);
}

//ASSIGNMENT 4, JAVASCRIPT
//7.Examples for array methods
//a.forEach 1st example
let lamArray = "My name is Nayana";
let reverse = "";
for (let i = lamArray.length; i--;) {
    reverse += lamArray[i];
}
console.log(reverse);

//2nd example
let everyele = "thoughtfocus bengaluru";
let reverse1 = "";
for (let i = everyele.length; i-- ;) {
    reverse1 += everyele[i];
}
console.log(reverse1);

//3rd example
let minimum = "dell laptop";
let reverse2 = "";
for (let i = minimum.length; i--;) {
    reverse2 += minimum[i];
}
console.log(reverse2);

//7b. push 1st example
let myArray = [1,2,3,4,5,6, ,7];
myArray.push(50); //one element at the end
console.log(myArray);

//2nd example
let pageno = [78,12,51,5,6];
pageno.push(1);
console.log(pageno);

//3dr example
let keypad = [1,2,3,99,7,5];
keypad.push(0);
console.log(keypad);

//7c. pop 1st example
let fruits = ["Apple","grape","mango","banana"];
fruits.pop("Orange");
console.log(fruits);
//2nd example
let channels = ["colors","zee","star","tv9","discovery","bbc"];
channels.pop("bbc");
console.log(channels);
//3rd example
let face = ["nose","tongue","head","eyes"];
face.pop("tongue");
console.log(face);

//7d. shift 1st example
let channels1 = ["colors","zee","star","tv9","discovery","bbc"];
channels1.shift();
console.log(channels1);
//2nd example
let  face1 = ["nose","tongue","head","eyes"];
face1.shift("nose");
console.log(face1);
//3rd example
let keypad1 = [1,2,3,99,7,5];
keypad1.shift();
console.log(keypad1);


//7e. unshift 1st example
let keypad2 = [1,2,3,99,7,5];
keypad2.unshift(0);
console.log(keypad2);
//2nd example
let  face2 = ["nose","tongue","head","eyes"];
face2.unshift("nose");
console.log(face2);
//3rd example
let channels2 = ["colors","zee","star","tv9","discovery","bbc"];
channels2.unshift("national geography");
console.log(channels2);

//7f. includes 1st example
let hobbies = ["cricket", "batmidton", "carrom", "cooking", "gardening", "shuttle"];
hobbies.forEach(function(val, ind, arr) {
    console.log(`${val}-${ind}`);
});
console.log(hobbies.includes("cricket")); 
console.log(hobbies.includes("kabaddi")); 
//2nd example
let channels3 = ["colors","zee","star","tv9","discovery","bbc"]
console.log(hobbies.includes("comedy"));
//3rd example
let fruits3 = ["Apple","grape","mango","banana"];
console.log(fruits3.includes("Apple"));

//12. find() example
const arr1 = [1, 2, [7, 8]];
const arr2 = [[4, 5], 6, 8, 9];
const arr3 = arr1.concat(arr2);
console.log(arr3, "nested array");
console.log(arr1.flat());
//2nd example
const arr8 = [4,6,8,7,9,0];
const arr9 = [0,9,[8,7,1]];
const arr10 = arr8.concat(arr9);
console.log(arr10,"nested array");
console.log(arr9.flat());

//findIndex() 1st example
let arrayData = [3, 10, 18, 20, 20];

function votingEligibility(age) {
    return age > 18;
}
let z = arrayData.findIndex(votingEligibility);
console.log(z);
//2nd example
let arrayData1 = [20,25,28,30,18,14,12];
function marriageEligibility(age) {
    return age > 18;
}
let q = arrayData1.findIndex(marriageEligibility);
console.log(q);

//reverse()  1st example
let lamArray9 = "My name is Nayana";
let reverse4 = "";
for (let i = lamArray9.length; i--;) {
    reverse4 += lamArray9[i];
}
console.log(reverse4);

//2nd example
let everyele1 = "thoughtfocus bengaluru";
let reverse5 = "";
for (let i = everyele1.length; i-- ;) {
    reverse5 += everyele1[i];
}
console.log(reverse5);

















 
