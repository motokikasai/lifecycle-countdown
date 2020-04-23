import React from "react";

class Counter extends React.Component {
  render() {
    return (
      <div className="container">
        <section className="counter">{this.props.counter}</section>
        <section className="content">
          <div className="main-header">Coming soon...</div>
          <div className="subheader">Stick around and be one of the first</div>
        </section>
      </div>
    );
  }
}

export default Counter;
