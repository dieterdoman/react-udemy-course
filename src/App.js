import React from 'react';
import './App.css';
import  Person from './Person/Person'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React App</h1>
        <p>It is working</p>
        <Person name="Name1" age="10" />
        <Person name="Name2" age="13" >My hobbies: Racing </Person>
        <Person name="Name3" age="16" />
      </header>
    </div>
  );
}

export default App;
