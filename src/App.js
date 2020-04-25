import React from "react";
import "./App.css";
import Countdown from "./components/Countdown";
import styled, { keyframes } from "styled-components";
import { zoomInDown } from "react-animations";

const ZoomInDown = styled.div`
  animation: 2s ${keyframes`${zoomInDown}`};
`;

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      timeout: false,
    };

    this.counter = this.counter.bind(this);
  }

  counter(data) {
    this.setState({
      timeout: data,
    });
  }

  render() {
    return (
      <div className="App">
        {!this.state.timeout ? (
          <Countdown
            counter={this.counter}
            header="Confucius says..."
            subheader="Choose a Job You Love, and You Will Never Have To Work a Day in Your Life"
            theme="light"
            backgroundImage={true}
          />
        ) : (
          <div className="awesome-page">
            <ZoomInDown>
              AWESOME!
              <span role="img" aria-label="fireworks">
                🎉
              </span>
            </ZoomInDown>
          </div>
        )}
      </div>
    );
  }
}

export default App;
