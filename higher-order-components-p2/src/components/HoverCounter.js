import React, { Component } from "react";
import UpdatedCounter from "./withCounter";

class HoverCounter extends Component {
  render() {
    const { count, increCount } = this.props;
    return <h1 onMouseOver={increCount}> Hover {count} </h1>;
  }
}

export default UpdatedCounter(HoverCounter);
