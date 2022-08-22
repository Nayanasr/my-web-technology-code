//DOM
//It is a tree structure of HTML element
//1>create a elements dynamically
//2>delete an element dynamically
//3>we can render the dom elements into the browser by do methods
//dom methods.
//getElementById(), getElementByClassName(),querySelector()
const element = document.getElementById("demo");
console.log(element);
element.innerText = "DOM";

//query selector method will return first tag comes in the tree structure
const tagElement = document.querySelector("h1");
console.log(tagElement);

//class selecting by query selector
const classElement = document.querySelector(".firsth1");
console.log(classElement);

//class selector
//this will return multiple elements in an array
const classSelector1 = document.getElementsByClassName("test");
console.log(classSelector1);

const elements = document.getElementsByClassName("data");
console.log(elements.length);

for (let i = 0; i < elements.length; i++) {
    if(i === 0) {
        elements[i].innerText = "Nayana";
    }else if (i === 1) {
        elements[i].innerText = "S R";
    }else {
        elements[i].innerText = "Bengaluru";
    }
}

//getElement by tag name
//it will return an array
const tagElements = document.getElementsByTagName("p");
console.log(tagElements);

//it will return an array of elements
const dataElements = document.querySelectorAll(".data");
console.log(dataElements);

for (let i = 0; i < dataElements.length; i++) {
    dataElements[i].style.fontSize = "100px";
    dataElements[i].style.backgroundColor = "brown";
    dataElements[i].style.color = "blue";
}
//creating an element in js
const h1Element = document.createElement("h1");
h1Element.innerText = "This is my h1 tag";
console.log(h1Element);



document.body.appendChild(h1Element);
h1Element.style.fontSize = "20px";
h1Element.style.backgroundColor = "violet";
h1Element.style.color = "pink";

