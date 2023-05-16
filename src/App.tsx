import React from 'react';
import logo from './logo.svg';
import './App.css';
import SystemList from './components/SystemList';

function App() {
  return (
    <div className="App">
      {/* <h1>Thank You Hashem!!!!!</h1>
      <h1>So Much.............</h1> */}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <SystemList/>
    </div>
  );
}

export default App;
