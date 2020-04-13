import React from "react";

const Jsx = () => {
  //With JSX
  //   return (
  //     <div>
  //       <h1>With JSX</h1>
  //     </div>
  //   );

  //Without JSX
  //   return React.createElement('div',null,'Without JSX');
  return React.createElement(
    "div",
    null,
    React.createElement("h1", null, "Without JSX")
  );
};

export default Jsx;
