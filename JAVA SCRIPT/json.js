//JSON JAVASCRIPT OBJECT NOTATION
let person = {
    name: "megha",
    ph: 456787654,
    sal: 70000,
};
const jsonObje = JSON.stringify(person);
//it will convert java script objects to json objects
console.log(jsonObje);

const javascriptObj = JSON.parse(jsonObje);
console.log(javascriptObj);
//json.parse() will convert json objects to java script objects