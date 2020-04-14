import React from "react";

const withCounter = (WrappedCounter, IncrementNumber) => {
  class WithCounter extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        count: 0,
      };
    }

    increCount = () => {
      this.setState((prevState) => {
        return { count: prevState.count + IncrementNumber };
      });
    };

    render() {
      return (
        <WrappedCounter
          count={this.state.count}
          increCount={this.increCount}
          {...this.props}
        />
      );
    }
  }
  return WithCounter;
};

export default withCounter;
