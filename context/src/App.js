import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import { UserProvider } from "./components/userContex";
import ComponentC from "./components/ComponentC";

function App() {
  return (
    <div className="App">
      <UserProvider value="Darshana">
        <ComponentC />
      </UserProvider>
    </div>
  );
}

export default App;
