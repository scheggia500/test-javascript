import { useState } from 'react';
import logo from './sonic.png';
import './App.css';
import { division } from './Calculator';
import { addition } from './Calculator';

function App() {
  const [number1, setNumber1] = useState();
  const [number2, setNumber2] = useState();
  const result = division(number1, number2);
  const result2 = addition(number1, number2);
  
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <input id="n1" name="fname" onInput={e => setNumber1(parseInt(e.target.value))} />
        <br />
        <input id="n2" name="fname" onInput={e => setNumber2(parseInt(e.target.value))} />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>number1: {number1}</p>
        <p>number2: {number2}</p>
        <p>division: {result || 'error'}</p>
        <p>addition: {result2 || '0'}</p>
        
      </header>
    </div>
  );
}

export default App;
