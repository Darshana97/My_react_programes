import React, { Component } from "react";
import withCounter from "./withCounter";

class ClickCounter extends Component {
  render() {
    const { count, increCount } = this.props;

    return (
      <div>
        <button className="btn btn-success" onClick={increCount}>
          {this.props.name} Count {count}
        </button>
      </div>
    );
  }
}

export default withCounter(ClickCounter, 5);
