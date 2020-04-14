import React, { Component } from "react";
import { UserConsumer } from "./userContex";
import ComponentE from "./ComponentE";

class ComponentC extends Component {
  render() {
    return (
      //   <UserConsumer>
      //     {(username) => {
      //       return <div>Hello {username}</div>;
      //     }}
      //   </UserConsumer>
      <ComponentE />
    );
  }
}

export default ComponentC;
