let myArray = [20, 30, 2, 4, 6, 7, 8];
//push method
//push method will add an element at the end
//it will take a value
//it will return a new array if we pushed any value
//else it will return length of array
//it will change the length of an array

myArray.push(50); //one element at the end
console.log(myArray);
myArray.push(60, 70, 80, 90);
console.log(myArray);
console.log(myArray.push());//12 length of an array

//pop method don't take anything as an argument
//pop method will remove the last element of an array
//pop method will return the removed items
console.log(myArray.pop());
console.log(myArray);
console.log(myArray.pop());

//unshift is used to add an element in the beginning
//it will take an element to add to the array as an argument
//unshift method will return the length of an array
let fruits = ["Apple","grape","mango","banana"];
fruits.unshift("Orange");
console.log(fruits);

//shift is used to remove an element at the beginning
//it will not take any arguments
//it will return the removed elements
console.log(fruits.shift());
console.log(fruits.shift());
console.log(fruits);

//concat method will join two or more arrays
//it will return a joined new array
//concat method will not change your original array
let a = [20 , 30, 40];
let b = [1 , 2, 3];
let c = [4 , 5, 6];
let res = a.concat(b,c);
console.log(res, "array");

const arr1 = [1, 2, [7, 8]];
const arr2 = [[4, 5], 6, 8, 9];
const arr3 = arr1.concat(arr2);
console.log(arr3, "nested array");

//flat
//flat method will make nested array as single array
console.log(arr1.flat());

//join method will convert array to string
const citys = ["Banglore", "Kolar", "Tumkur", "Hubli"];

let string = citys.join(" ");
console.log(string);

//findIndex and indexOf
//findIndex method will take a callback function and find the particular index of the element
let arrayData = [3, 10, 18, 20, 20];

function votingEligibility(age) {
    return age > 18;
}
let x = arrayData.findIndex(votingEligibility);
console.log(x);

//indexOf
//the indexOf method will return the first index position of specified value
//indexOf method return if your array does not have the specified value -1
console.log(arrayData.indexOf(70)); //not found
console.log(arrayData.indexOf(20, 1)); //returns the index position
console.log(typeof arrayData);
let e = 60;
console.log(Array.isArray(arrayData)); //false//array method will returns in boolian type

// to convert string to an array
let data = "hello java script";
let arrData = data.split(" ");
console.log(arrData);

//print the words in reverse order
let lamda = "Before a good leader be a good human";
let arrData1 = lamda.split(" ");
console.log(arrData1.reverse(arrData1));
 
//map();
//forEach();
//filter();
let lamArray = lamda.split(" ");
console.log(lamArray);

//map method takes a call back function(value,index,original,array)
//we use map method to loop an array
let reverse = "";
for (let i = lamArray.length - 1; i--;) {
    reverse += lamArray[i];
}
console.log(reverse);

lamArray.map((value, index, arr) => {
  console.log(value,index);
});

lamArray.filter((value, index, arr) => {
    console.log(value, "filter");
  });
  
let filterArr = [20, 30, 50, 60, 80, 12, 17];
// same output
filterArr.filter((value, ind, arr) => {
    if (value > 20) {
        console.log(value);
    }
});

let filtered = filterArr.filter((value) => {
    return value + 10;
}); //no change in the output

let mapped = filterArr.map((value) => {
    return value + 10;
});//10 extra will be added to the values
console.log(filtered);
console.log(mapped);

//forEach
let hobbies = ["cricket", "batmidton", "carrom", "cooking", "gardening", "shuttle"];
hobbies.forEach(function(val, ind, arr) {
    console.log(`${val}-${ind}`);
});

//includes
console.log(hobbies.includes("cricket")); //true//it returns boolian
console.log(hobbies.includes("kabaddi")); //false//it returns boolian