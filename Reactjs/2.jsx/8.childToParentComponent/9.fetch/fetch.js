class Home extends React.Component {
    state = {
        data: [],
    };

    fetchData = () => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((res) => {
                console.log(res);
                return res.json();
            })
            .then((fetchedData) => {
                this.setState({ data: fetchedData });
                console.log(this.state.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }
    render() {
        return (
            <div>
                <h1>Home Page</h1>
                <button onClick={this.fetchData}>click</button>
                {this.state.data.map((value) => {
                    return <p>{value.title}</p>
                })}

            </div>
        );
    }
}
ReactDOM.render(<Home />, document.getElementById("container"));