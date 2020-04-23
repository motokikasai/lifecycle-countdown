import React from "react";
import moment from "moment";

class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 10,
      timeout: true,
    };
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
    console.log(this.state.count);
    this.state.count && clearInterval(this.counterInterval);
  }

  render() {
    return (
      <div className="container">
        <section className="counter">
          {this.state.count}
          <div className="days">155 days</div>
          <div className="hours">1 days</div>
          <div className="minutes">9 days</div>
          <div className="seconds">2 days</div>
        </section>
        <section className="content">
          <div className="main-header">Coming soon...</div>
          <div className="subheader">Stick around and be one of the first</div>
        </section>
      </div>
    );
  }
}

export default Counter;

// CountDown.defaultProps = {}
// CountDown.defaultProps = {title: ‘Coming soon’}
