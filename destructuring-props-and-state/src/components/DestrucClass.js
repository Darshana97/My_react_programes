import React, { Component } from "react";

class DestructureClass extends Component {
  render() {
    const { cname } = this.props;
    return (
      <div>
        <h1>{cname}</h1>
      </div>
    );
  }
}

export default DestructureClass;
