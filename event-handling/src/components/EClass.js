import React, { Component } from "react";

class EClass extends Component {
  Fun2() {
    console.log("Class button clicked");
  }
  render() {
    return (
      <div>
        <button onClick={this.Fun2}>Click Class</button>
      </div>
    );
  }
}

export default EClass;
