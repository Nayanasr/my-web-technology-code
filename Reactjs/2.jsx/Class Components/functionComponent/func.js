//functional component

function Header (props) {
    return (
        <div>
    <h1>header {props.logo}-{props.brand}</h1>
    <img src = {props.logo}/>
    </div>
    );
}

function Content ({fName, lName}) {
    return( <div>
        <h1>Content</h1>
        <p>{fName} {lName}</p>
    </div>
    );
}

function Footer(props) {
    let { name, age} = props;
    return (
        <h1>footer {name} {age}</h1>
    );
}

ReactDOM.render(
    <div>
        <Header logo = "image.jpg" brand = "Lambhorgini"/>
    <Content fName="Nayana" lName="S R"/><Footer name="Avi" age="22"/></div>,document.getElementById("container")
);



