import React, { Component } from "react";

class ClickCoounter extends Component {
  render() {
    const { count, incrementcounter } = this.props;
    return (
      <div>
        <button className="btn btn-success" onClick={incrementcounter}>
          Clicked {count} Times
        </button>
      </div>
    );
  }
}

export default ClickCoounter;
