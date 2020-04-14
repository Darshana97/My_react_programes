import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  incrementcounter = () => {
    this.setState((prevstate) => {
      return { count: prevstate.count + 1 };
    });
  };

  render() {
    return (
    //   <div>{this.props.render(this.state.count, this.incrementcounter)}</div>
    <div>{this.props.children(this.state.count, this.incrementcounter)}</div>
    );
  }
}

export default Counter;
