import React from "react";
import "./App.css";
import Countdown from "./components/Countdown";
import moment from "moment";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: moment().format("MMMM Do YYYY, h:mm:ss a"),
    };

    // this.counter = this.counter.bind(this);
  }

  componentDidMount() {
    this.counterInterval = setInterval(() => {
      this.setState((state) => {
        return {
          count: state.count,
        };
      });

      // return moment().format("MMMM Do YYYY, h:mm:ss a");
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.counterInterval);
  }

  render() {
    return (
      <div className="App">
        <Countdown counter={this.state.count} />
      </div>
    );
  }
}

export default App;
