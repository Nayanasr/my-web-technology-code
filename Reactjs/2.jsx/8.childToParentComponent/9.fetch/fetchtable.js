class FetchData extends React.Component {
    state = {
      data: [],
    };
    fetchedDataFun() {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => {
          return res.json();
        })
        .then((fetchedData) => {
          this.setState({
            data: fetchedData,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
    render() {
      return (
        <div>
          <button
            onClick={() => {
              this.fetchedDataFun();
            }}
          >
            click
          </button>
          {this.state.data.map((value, ind, arr) => {
            return (
              <p>
                {value.id}
                {value.name}
                {value.username}
                {value.email}
              </p>
            );
          })}
        </div>
      );
    }
  }
  ReactDOM.render(<FetchData />, document.getElementById("container"));