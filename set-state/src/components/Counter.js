import React, { Component } from "react";

class MyCounter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  AddCount() {
    this.setState({
      count: this.state.count + 1,
      
      
    });
    console.log(this.state.count)
  }

  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>

        <button className="btn btn-primary" onClick={() => this.AddCount()}>Add</button>
      </div>
    );
  }
}

export default MyCounter;
