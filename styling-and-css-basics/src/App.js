import React from "react";
import logo from "./logo.svg";
import "./App.css";
import StyleSheet from "./components/Stylesheet";
import Inline from "./components/Inline";
import "./appStyle.css";
import MyStyles from "./appStyle.module.css";

function App() {
  return (
    <div className="App">
      <h1 className={MyStyles.mySuccess}>Success </h1>
      <h1 className="mydanger">Error</h1>
      {/* <StyleSheet /> */}
      <Inline />
    </div>
  );
}

export default App;
