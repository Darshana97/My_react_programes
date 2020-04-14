import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import ClickCoounter from "./components/ClickCoounter";
import HoverCounter from "./components/HoverCounter";
import User from "./components/User";
import Counter from "./components/Counter";

function App() {
  return (
    <div className="App">
      {/* <ClickCoounter />
      <HoverCounter />
      <User render={(isLoggedin) => (isLoggedin ? "Senevirathna" : "Guest")} /> */}

      {/* <Counter
        render={(count, incrementcounter) => (
          <ClickCoounter count={count} incrementcounter={incrementcounter} />
        )}
      /> */}

      {/* <Counter
        render={(count, incrementCounter) => (
          <HoverCounter count={count} incrementCounter={incrementCounter} />
        )}
      /> */}

      <Counter>
        {(count, incrementcounter) => (
          <ClickCoounter count={count} incrementcounter={incrementcounter} />
        )}
      </Counter>

      <Counter>
        {(count, incrementCounter) => (
          <HoverCounter count={count} incrementCounter={incrementCounter} />
        )}
      </Counter>
    </div>
  );
}

export default App;
