import React from "react";

function EFunc() {
  function Fun1() {
    console.log("Function Button Clicked");
  }

  return (
    <div>
      <button onClick={Fun1}>Click Func</button>
    </div>
  );
}

export default EFunc;
