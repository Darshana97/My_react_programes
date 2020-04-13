import React, { Component } from "react";

class RegComp extends Component {
  render() {
    console.log("Regular render");
    return <div>Regular Component render {this.props.name}</div>;
  }
}

export default RegComp;
