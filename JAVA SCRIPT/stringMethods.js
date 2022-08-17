//string methods
var str="Test yantra"
str.toUpperCase();
console.log(str); //Test yantra: string is immutable

var str="Test yantra";
var upper=str.toUpperCase();
console.log(upper); //TEST YANTRA 

var greet="Good Morning";
var greet=greet.toLowerCase();
console.log(greet);

console.log(greet.charAt(5)); //this method will accept index

//find indexOf
console.log(greet.indexOf("o"));//1

//includes
var wishing="Good Afternoon";
console.log(wishing.includes("noon"));
//replace
console.log(wishing.replace("Afternoon","morning"));
console.log(wishing);//Good Afternoon

//sub str
//01234567890
var data="Welcome to javascript world";
const substr=data.substr(9,5);
console.log(substr);//0 jav

//sub string

var substring=data.substring(9,4);
console.log(substring);

var email="                                 megha@gmail.com                               "
console.log(email);
console.log(email.trim());
