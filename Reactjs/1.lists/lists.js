const listElement = React.createElement(
    "ul",
     null,
    React.createElement("li", {className: "car", style: {color: "pink"}}, "car"),//second argument is the attribute
    React.createElement("li", {className: "jeep"}, "jeep")
);

//looping by map method
const mobiles = ["one+", "apple", "samsung", "realme","redmi"]
const mobileLoop = mobiles.map((mobile, index) => {
    return React.createElement("li",{key:mobile + index},mobile);
});
const allItems = React.createElement("div", null,listElement,mobileLoop);

ReactDOM.render(allItems,document.getElementById("container"))