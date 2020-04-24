import React from "react";
// import PropTypes from "prop-types";
// import moment from "moment";

class Countdown extends React.Component {
  constructor(props) {
    super(props);

    const difference = new Date("2020-04-26T00:00:00") - new Date();

    this.state = {
      count: 10, //-> for testing purpose
      bg: this.props.backgroundImage,
      remaining: {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      },
    };

    this.timer = this.timer.bind(this);
  }

  timer() {
    const difference = new Date("2020-04-24T23:35:50") - new Date();

    this.setState({
      remaining: {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      },
    });
  }

  componentDidMount() {
    this.counterInterval = setInterval(() => {
      // LOGIC FOR TEXT (10s) -----------------
      if (this.state.count > 0) {
        this.setState((state) => {
          return {
            count: state.count - 1,
          };
        });
      } else {
        return this.props.counter(true);
      }

      // LOGIC FOR REAL-TIME (new Date()) ----

      // Object.values(this.state.remaining).toString() !== [0, 0, 0, 0].toString()
      //   ? this.timer()
      //   : this.props.counter(true);
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
          <div className="days">
            <span className="time-counted">{this.state.remaining.days}</span>{" "}
            days
          </div>
          <div className="hours">
            <span className="time-counted">{this.state.remaining.hours}</span>{" "}
            hours
          </div>
          <div className="minutes">
            <span className="time-counted">{this.state.remaining.minutes}</span>{" "}
            minutes
          </div>
          <div className="seconds">
            <span className="time-counted">{this.state.remaining.seconds}</span>{" "}
            seconds
          </div>
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
