import React, { PureComponent } from "react";

class PureComp extends PureComponent {
  render() {
      console.log("Pure component")
    return <div>Pure Component render {this.props.name}</div>;
  }
}

export default PureComp;
