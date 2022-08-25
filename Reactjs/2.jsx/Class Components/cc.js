//to create a component you should follow the pascle case

//jsx riles
//if we have more than two elements we have to wrap it inside the paranthesis
//if we have more than one element is there in the component then we have to wrap it
// inside the parent element like inside the div
class Header extends React.Component {
    render() {
        console.log(this.props.firstName);
        console.log(this.props.lastName);

        return (
            <div>
                <div>
                   <h1> I am a new Header</h1>
                   <p>dfghjjuyudhhjhheuhjfkjks</p>
                   <h1>hello {this.props.firstName}</h1>
                 </div>
                 <div></div>
            </div>
        );
    }
}

class Content extends React.Component {
    render() {
        console.log(this.props.firstName);

        return ( <div><h1>Hello I am content page</h1>
        <h>about page: {this.props.firstName}</h>
        </div>
        );
    }
}

class Footer extends React.Component {
    render() {
        return (
            <div>
             <h>I am Footer page</h>
             <p>2nd page</p>
            </div>
        );
    }
}

ReactDOM.render(<div><Header firstName="Megha" lastName="Gowda" /> 
<Content firstName="content page details"/></div>, document.getElementById("container"));