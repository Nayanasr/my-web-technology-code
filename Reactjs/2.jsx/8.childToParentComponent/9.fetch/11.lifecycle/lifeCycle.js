class Parent extends React.Component {
    componentDidMount() {
    //this method will be executed for the first time mounting to real DOM
    //it is used to make side effects to the component
    //you can make api calls in this method
    console.log("parent componentDidMount executed");
}
constructor() {
    super();
    this.state = {
            text: "mounting phase",
            show: true,
        };
        console.log("parent constructor executed");
        }
        static getDerivedStateFromProps(props,state) {
          //it returns the state or if there is no change in the state then it will return null
          console.log("parent getDerivedStateFromProps executed");
          return state;
        }
        render() {
        //in render method we should update anything or we should not perform any side effects
        //because if try to update anything render method will go to infinite loop
        console.log("render method executed");
        return (
            <div>
                {this.props.age}
                <h1>{this.state.text}</h1>
                <button onClick= {() => {
                    this.updateText("updating phase")
                }}>click</button>
                
                {this.state.show ? <child /> : null}
            </div>
        );
    }
    updateText(text) {
        this.setState({
            text: text,
            show: false,
        });
    }
    shouldComponentUpdate() {
        console.log("parent shouldComponentUpdate executed");
        return true;
    }
    getSnapshotBeforeUpdate(prevProp,prevState) {
        console.log("parent getSnapshotBeforeUpdate executed");
        return "scrolling position";
    }
    componentDidUpdate(prevProp,prevState,snapShot) {
        console.log("parent componentDidUpdate executed");

        console.log("previous prop", prevProp);
        console.log("previous state", prevState);
        console.log("snapshot", snapShot);

    }
}

class Child extends React.Component {
    render() {
        return <div>child component</div>;
    }
    componentWillUnmount() {
        console.log("child componentWillUnmount executed");
    }
}

ReactDOM.render(<Parent age="23" />,document.getElementById("container"));