import React, { Component } from "react";

import LifecycleB from "./LifecycleB";

class LifecycleA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Darshana",
    };

    console.log("Contructor A");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("Lifecycle A  getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("Lifecycle A componentDidMount");
  }

  render() {
    console.log("Lifecycle A render");
    return (
      <div>
        LifecycleA
        <div>
          <LifecycleB />
        </div>
      </div>
    );
  }
}

export default LifecycleA;
