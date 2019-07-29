import React from 'react';
import './App.css';
import  Person from './Person/Person'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React App</h1>
        <p>It is working</p>
        <Person />
        <Person />
        <Person />
      </header>
    </div>
  );
}

export default App;
