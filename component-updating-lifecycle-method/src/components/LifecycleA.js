import React, { Component } from "react";
import LifecycleB from "./LifecycleB";

class LifecycleA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Darshana",
    };

    console.log("Constructor A");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("Lifecycle A  getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("Lifecycle A componentDidMount");
  }

  shouldComponentUpdate() {
    console.log("Lifecycle A shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("Lifecycle A getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate() {
    console.log("Lifecycle A componentDidUpdate");
  }

  changeState = () => {
    this.setState({
      name: "Hello Achi",
    });
  };

  render() {
    console.log("Lifecycle A render");
    return (
      <div>
        LifecycleA
        <div>
          <button onChange={this.changeState}>Change State</button>
          <LifecycleB />
        </div>
      </div>
    );
  }
}

export default LifecycleA;
