import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import Hero from "./components/Hero";
import ErrorBoundary from "./components/ErrorBoundary";

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <Hero heroname="Batman" />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroname="Heman" />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroname="joker" />
      </ErrorBoundary>
    </div>
  );
}

export default App;
