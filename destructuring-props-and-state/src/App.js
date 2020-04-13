import React from 'react';
import logo from './logo.svg';
import './App.css';
import DestructureClass from './components/DestrucClass';
import DestructureFun from './components/DestructureFun';


function App() {
  return (
    <div className="App">
      <DestructureClass cname="Darshana with class" />
      <DestructureFun fname="Achi with function" />
    </div>
  );
}

export default App;
