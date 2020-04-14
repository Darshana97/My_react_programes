import React, { Component } from "react";
import UpdatedCounter from "./withCounter";

class ClickCounter extends Component {
  render() {
    const { count, increCount } = this.props;
    return (
      <div>
        <button className="btn btn-success" onClick={increCount}>
          {" "}
          Count {count}
        </button>
      </div>
    );
  }
}

export default UpdatedCounter(ClickCounter);
