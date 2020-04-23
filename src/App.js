import React from "react";
import "./App.css";
import Countdown from "./components/Countdown";

class App extends React.Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     count: moment().format("LTS"),
  //     timeout: true,
  //   };

  //   // this.counter = this.counter.bind(this);
  // }

  render() {
    return (
      <div className="App">
        <Countdown />

        <div className="awesome-page">AWESOME!!!</div>
      </div>
    );
  }
}

export default App;
