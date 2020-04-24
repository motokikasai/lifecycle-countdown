import React from "react";
// import PropTypes from "prop-types";
import moment from "moment";

class Countdown extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 10,
      bg: this.props.backgroundImage,
    };
  }

  componentDidMount() {
    this.counterInterval = setInterval(() => {
      if (this.state.count > 0) {
        this.setState((state) => {
          return {
            count: state.count - 1,
          };
        });
      } else {
        return this.props.counter(true);
      }

      // return moment().format("MMMM Do YYYY, h:mm:ss a");
    }, 1000);
  }

  componentWillUnmount() {
    console.log("INTERVAL CLEARED!!🌞");
    clearInterval(this.counterInterval);
  }

  render() {
    return (
      <div className="container">
        <section
          className={`counter ${this.props.theme} ${
            this.state.bg && "bg-image"
          }`}
        >
          {this.state.count}
          {/* <div className="days">155 days</div>
          <div className="hours">1 days</div>
          <div className="minutes">9 days</div>
          <div className="seconds">2 days</div> */}
        </section>
        <section className="content">
          <div className="main-header">{this.props.header}</div>
          <div className="subheader">{this.props.subheader}</div>
        </section>
      </div>
    );
  }
}

Countdown.defaultProps = {
  header: "Coming soon...",
  subheader: "Stick around and be one of the first",
};

export default Countdown;

// CountDown.defaultProps = {}
// CountDown.defaultProps = {title: ‘Coming soon’}
