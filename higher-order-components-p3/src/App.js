import React from "react";
// import logo from "./logo.svg";
import "./App.css";
// import { ClickCounter } from "./components/ClickCounter";
import HoverCounter from "./components/HoverCounter";
import ClickCounter from "./components/ClickCounter";

function App() {
  return (
    <div className="App">
      <ClickCounter name="Achi" />
      <HoverCounter />
    </div>
  );
}

export default App;
