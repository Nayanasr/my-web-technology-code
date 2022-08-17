// Global level this refers to window object
console.log(this);
console.log(window);

console.log(this === window);

// Inside the object this refers to current object
const personObj = {
    firstName: "Akshata",
    lastName: "Nayak",
    getFullName: function () {
        console.log(this);
        return this.firstName + this.lastName;
    },
};

console.log(personObj.getFullName());

console.log("===============Array==============");
let arr = [1, 2, 3];
let arr2 = [1, 2, 3];
console.log(arr == arr2); //false
console.log(arr === arr2); //false

console.log(null == 0);//false
console.log(null > 0); //false
console.log(null >= 0); //true

console.log(1 < 2 < 3);//true
            true<3
console.log(3 > 2 > 1);//false
            true>1