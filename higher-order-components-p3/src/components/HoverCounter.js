import React, { Component } from "react";
import withCounter from "./withCounter";

class HoverCounter extends Component {
  render() {
    const { count, increCount } = this.props;

    return <h1 onMouseOver={increCount}>HoverCounter {count} </h1>;
  }
}

export default withCounter(HoverCounter, 10);
