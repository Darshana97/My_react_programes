import React, { Component } from "react";

class HoverCounter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  incrementCounter = () => {
    this.setState((preState) => {
      return { count: preState.count + 1 };
    });
  };

  render() {
    const { count } = this.state;
    return <h1 onMouseOver={this.incrementCounter}>Hoverd {count} Times</h1>;
  }
}

export default HoverCounter;
