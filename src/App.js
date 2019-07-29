import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
    state = {
      persons: [
          { name: 'Name1', age: 10 },
          { name: 'Name2', age: 13 },
          { name: 'Name3', age: 16 }
      ]
    };

    switchNameHandler = () => {
          console.log("was clicked");
    };

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1>React App</h1>
                    <p>It is working</p>
                    <button onClick={this.switchNameHandler}>Switch Name</button>
                    <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
                    <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My hobbies: Racing</Person>
                    <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
                </header>
            </div>
        );
    }
}

export default App;
