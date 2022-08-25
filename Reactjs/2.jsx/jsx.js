//jsx
//javascript xml
//babel will convert jsx to browser understandable code
console.log("started");
const element = <h1>Hell World</h1>//jsx way of creating an element
console.log(element);

const names = "Nuthana";
const h1Element = <h1>Hello {names}</h1>;//hello nuthana//using curly braces because it's a javascript code

const mobiles = ["one+", "apple", "samsung", "realme","redmi"];
const loopingData = mobiles.map((value) => {
    return <h1>{value}</h1>;//React.createElement("p",null,"")
});

const ulElement = (
    <ul>
        {mobiles.map((value) => {
            return <li>{value}</li>; //jsx method of looping//jsx is easier to loop than react
        })}
    </ul>
);
const allItems = React.createElement(
    "div",null,ulElement,loopingData,h1Element
);

ReactDOM.render(allItems, document.getElementById("container"));