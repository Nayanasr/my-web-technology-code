//Math object
// min method will accept the list of values as argument and returns the minimum value among the list
let minNumber = Math.min(12, 20, 1, 3, 8, 4, 100, 1, 89);
console.log(minNumber);

// max method
let maxNumber = Math.max(2, 8, 13, 55, 87, 99, 100);
console.log(maxNumber);

//to find the power
let powOfNumber = Math.pow(2, 3);
console.log(powOfNumber);

//floor and ceil
let floorValue = Math.floor(20.1);
console.log(floorValue);

let ceilValue = Math.ceil(20.4);
console.log(ceilValue);

//random
let names =  ["Avi", "Akshata", "Namana", "Nayana", "Nuthana", "Prajwal", "Vaibhav", "Himagirish",];
let randomIndex = Math.floor(Math.random(names) * names.length);
console.log(names[randomIndex]);

