//for loop
//does not work with objects
//does not ignore empty elements
//break statements is not supported

let arr = [20, "megha", " ", , 78, , 68, 90];

for  (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    
}

//for of loop
//does not work with objects
//does not ignore empty elements
//break statements is not supported
for (let i of arr) {
    console.log(i);
}

let names = ["Avi", "Akshata", "Namana", "Nayana", "Nayana", "Nuthana", "Prajwal", "Vaibhav", "Himagirish"];

for (let i of names) {
    console.log(i);
}

let pens = [
    {
        brand: "renaulds",
        color: "pink",
        price: 3,
        type: "gel",
    },
    {
        brand: "parker",
        color: "black",
        price: 500,
        type: "ball point",
    },
    {
        brand: "cello",
        color: "blue",
        price: 5,
        type: "ball point",
    },
    {
        brand: "bright",
        color: "red",
        price: 2,
        type: "ball point",
    },

];

// print the pens whose price > 5rs

for (let i = 0; i < pens.length; i++) {
    if (pens[i].price > 5) {
        console.log(pens[i]);
    }
}

// by using for of loop
for (let i of pens) {
    if (i.price < 5) {
    console.log(i);
    }
}

// type=ball point price greater than 5 rs

for (let i of pens) {
    if (i.price > 5 && i.type == "ball point") {
        console.log(i);
    }
}

// for in loop
// works with objects as wll as arrays
// it ignores empty elements
// it does not ignore extra properties which don't have index

let person = {
    firstName: "Megha",
    lastname: "Gowda",
    gender: "female",
    phNumbe: 3456879021,
};

for (let key in person) {
    console.log(key);
    console.log(`${key}-${person[key]}`);
}

for(let value in pens) {
    if(pens[value].type=== "ball point" && pens[value].price >  5){
    console.log(pens[value]);
    }
}

for (let value in arr) {
    console.log("this from for in loop", arr[value]); //ignore the empty space
}