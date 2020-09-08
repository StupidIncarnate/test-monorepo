import React from 'react';
import logo from './logo.svg';
import styled from 'styled-components';
import './App.css';

const Info = styled.div`
  color: darkred;
  font-size: 1.5rem;
`

function App() {
  return (
    <div className="App">
      <Info>Hi there!!!!</Info>
      {Object.keys({})}
      <header className="App-header">
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
      </header>
    </div>
  );
}

export default App;
