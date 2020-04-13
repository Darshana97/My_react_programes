import React, { Component } from "react";

class Welcome extends Component {
  constructor() {
    super();
    this.state = {
      message: "Click here to login",
    };
  }

  logIn() {
    this.setState({
      message: "You succefully logged in",
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={() => this.logIn()}>Login</button>
      </div>
    );
  }
}

export default Welcome;
