import React, { Component } from "react";

class EventBind extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Hello",
    };

    this.clickMe = this.clickMe.bind(this);
  }

  clickMe() {
    this.setState({
      message: "Darshana Senevirathna",
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        {/* <button onClick={this.clickMe.bind(this)}>Click1</button> */}
        {/* <button onClick={() => this.clickMe()}>Click2</button> */}
        <button onClick={this.clickMe}>Click3</button>
      </div>
    );
  }
}

export default EventBind;
