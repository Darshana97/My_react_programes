import React, { Component } from "react";

class PropsClass extends Component {
  render() {
    return <h2>My pet name is {this.props.petName} </h2>;
  }
}

export default PropsClass;
