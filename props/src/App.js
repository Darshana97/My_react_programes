import React from "react";
import logo from "./logo.svg";
import "./App.css";
import MyProp from "./components/Props";
import PropsClass from "./components/PropsClass";

function App() {
  return (
    <div className="App">
      <MyProp fname="Darshana" lname="Senevirathna" />
      <PropsClass petName="Brayan" />
    </div>
  );
}

export default App;
