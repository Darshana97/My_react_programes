import React from "react";

const myStyles = {
  fontSize: "100px",
  color: "pink",
};

function Inline() {
  return (
    <div>
      <h1 style={myStyles}>Hello Inline</h1>
      <h1 className="mydanger">Error</h1>
      
    </div>
  );
}

export default Inline;
