import React, { Component } from "react";

class MemoComp extends Component {
  render() {
    console.log("memo components");
    return <div>{this.props.fname}</div>;
  }
}

export default React.memo(MemoComp);
