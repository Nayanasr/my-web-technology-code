//date object

const systemDate = new Date();
console.log(systemDate);
console.log(systemDate.getDay()); //2
console.log(systemDate.getMonth()); //7
console.log(systemDate.getTime()); // it will return the time
console.log(systemDate.getFullYear()); 
console.log(systemDate.getMinutes()); 

const dateString = new Date("dec/21/2021");
console.log(dateString);
console.log(dateString.getDay());

"tuesday" / 08 / 2022;

const date1 = new Date("dec/22/2021");

let month = date1.getMonth();
console.log(month);
let dateValue = date1.getDate();
console.log(dateValue);
let year = date1.getFullYear();
console.log(year);

const fullYear = `${month + 1}/${dateValue}/${year}`;
console.log(fullYear);

//"tuesday" / August / 2022;
const fullDate = systemDate.toLocaleDateString("en-in",{
    weekday: "long",
    month: "long",
    year: "numeric",
    day: "2-digit",
});
console.log(fullDate);

//looping for loop
let person = ["Avi", 90, "30/july/2000"];

for (let i = 0; i < person.length; i++) {
    console.log(person[i]);
    
}

