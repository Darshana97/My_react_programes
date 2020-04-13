import React, { PureComponent } from "react";
import PureComp from "./PureComp";
import RegComp from "./RegComp";

class ParentComp extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      name: "Darshana",
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: "Senevirathna",
      });
    }, 2000);
  }

  render() {
    console.log(
      "**************************Parent component****************************"
    );

    return (
      <div>
        <h2>Parent Component</h2>
        <PureComp name={this.state.name} />
        <RegComp name={this.state.name} />
      </div>
    );
  }
}

export default ParentComp;
