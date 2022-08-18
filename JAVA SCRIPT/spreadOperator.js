//...magical dots
// rest parameter
//it will allow us to add varying arguments to function
function add(...a) {
    let sum = 0;
    for (let i of a) {
        sum = sum + i;
    }
    console.log(sum);
    return sum;
}
add(20, 30); //
add(10, 40, 3, 1); //
add(1, 5, 6, 8, 9, 20, 30, 50,50, 77, 6, 6, 8, 4);
add(1, 2);

//primitive type copied by value
let x = 30;
let y = x + 10;
console.log(y); //40
console.log(x); //30

//reference types are copied by reference
let m = {
    name: "Avi",
    phnumber: 3456788890,
    age: 22,
};

//spread operator
let n = {...m};
m.name = "vaibhav";
n.age = 25;
console.log(n); //name: "avi", phno:345678, age:25
console.log(m); //name: "vaibhav" phno:345678,age:22

let person = {
    fName: "Nayana",
    lName: "S R",
    moreDetails: {
        bloodGroup: "A+",
        gender: "female",
    },
    dob: "2nd oct",
};

let personCopy = {...person}; //shallow copy will copy only the first layer
person.fName = "Nuthana";

person.moreDetails.bloodGroup = "AB+";
console.log(person); //fName: "nuthana" bloodgroup:AB+
console.log(personCopy); //fName:"nayana" bloodgroup: A+

let deepCopy = { ...person, moreDetails: { ...person.moreDetails } };

person.moreDetails.blodGroup = "AB+";
console.log(person); //fname:"nuthana" blodgroup:AB+
console.log(personCopy); //fname:"nayana" blod A+
