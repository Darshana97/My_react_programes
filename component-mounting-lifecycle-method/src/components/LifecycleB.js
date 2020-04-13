import React, { Component } from "react";

class LifecycleB extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Darshana",
    };

    console.log("Contructor B");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("Lifecycle B  getDerivedStateFromProps");
    return null
  }

  componentDidMount() {
    console.log("Lifecycle B componentDidMount");
  }

  render() {
    console.log("Lifecycle B render");
    return <div>Lifecycle B</div>;
  }
}

export default LifecycleB;
