import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [apiRes, setApiRes] = useState("");
  
  const callAPI = function() {
    fetch("http://localhost:9000/testAPI")
    .then(res => res.text())
    .then(res => setApiRes(res));
  };

  useEffect(() => {
    callAPI();
  }); 

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p className="App-intro">{apiRes}</p>
      </header>
    </div>
  );
}

export default App;
