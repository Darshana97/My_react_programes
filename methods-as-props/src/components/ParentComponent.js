import React, { Component } from "react";
import ChildComponent from "./ChildComponent";

class ParentComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      parentName: "Parent",
    };

    this.parentHandlar = this.parentHandlar.bind(this);
  }

  parentHandlar(childName) {
    alert(`Hello ${this.state.parentName} from ${childName}`);
  }

  render() {
    return (
      <div>
        <ChildComponent myHandler={this.parentHandlar} />
      </div>
    );
  }
}

export default ParentComponent;
