class Greet extends React.Component {
    state = {
        firstName: "Prajwal",
        age: 22,
    };
    changeName = () => {
        console.log("before setState:", this.state.firstName);//prajwal
        this.setState(
            {
                firstName: "Himagirisha",
                age: 21,
            },
            () => {console.log("after setState", this.state.firstName);}//himagirisha

        );
    };

    changeProp = () => {
        this.props.lName = "Ramana";//props are immutable
    }
    render() {
        console.log(this.props.lName);
        return (
            <div>
            <h1>firstName: {this.state.firstName}, age: {this.state.age}</h1>
            <h2>{this.props.lName}</h2>

            <button onClick = {() =>
            this.changeProp}>Changeprop</button>

            <button onClick = {() => {
                this.changeName();
            }}>Click To Change Name</button>
            </div>
        );
    }
}
ReactDOM.render(<Greet lName= "Avi"/>, document.getElementById("container"));