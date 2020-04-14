import React, { Component } from "react";

class HoverCounter extends Component {
  render() {
    const { count, incrementCounter } = this.props;
    return <h1 onMouseOver={incrementCounter}>Hovered {count} Times </h1>;
  }
}

export default HoverCounter;
