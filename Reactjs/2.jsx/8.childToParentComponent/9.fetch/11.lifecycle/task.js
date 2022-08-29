class Change extends React.Component {
    state = {
      name: "Anu",
      age: 21,
    };
    changeName = () => {
      console.log("before setState:", this.state.name);
      this.setState(
        {
          name: "nuthana",
        },
        () => {
          console.log("after setState", this.state.age);
        }
      );
    };
    changeage = () => {
      console.log("before setState:", this.state.age);
      this.setState(
        {
          age: 22,
        },
        () => {
          console.log("after setState", this.state.age);
        }
      );
    };
    render() {
      return (
        <div>
          <h1>
            name:{this.state.name} Age:{this.state.age}
          </h1>
          <button
            onClick={() => {
              this.changeName();
            }}
          >
            click to change name
          </button>
          <button
            onClick={() => {
              this.changeage();
            }}
          >
            click to change age
          </button>
        </div>
      );
    }
  }
  
  ReactDOM.render(<Change />, document.getElementById("container"));