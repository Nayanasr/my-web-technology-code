//events are some actions example:click,onChange,onHover
//event listeners: javaScript functions

function changeName(user) {
    const element = document.getElementById("name");
    element.innerText = "Himagirish";
}

//hover experiment injs
let changeColor = () => {
    const element1 = document.getElementById("changeColor");
    element1.style.backgroundColor = "red";
};
let removeColor = () => {
    const element = document.getElementById("changeColor");
    element.style.backgroundColor = "white";
};
//for dropdown
function setBodyAttr(attr, value) {
    console.log(value);
    console.log(attr);
    if (document.body) {
        document.body[attr] = value;
    } else {
        throw new Error("no support");
    }
}
