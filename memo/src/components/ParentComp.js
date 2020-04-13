import React, { Component } from "react";
import MemoComp from "./MemoComp";

class ParentComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Achi",
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: "Brayan",
      });
    }, 2000);
  }

  render() {
      console.log("Parent component")
    return (
      <div>
        <MemoComp fname={this.state.name} />
      </div>
    );
  }
}

export default ParentComp;
