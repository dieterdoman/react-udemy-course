import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
    state = {
        persons: [
            {name: 'Name1', age: 10},
            {name: 'Name2', age: 13},
            {name: 'Name3', age: 16}
        ]
    };

    switchNameHandler = (newName) => {
        this.setState({
            persons: [
                {name: newName, age: 10},
                {name: 'Name2', age: 13},
                {name: 'Name3', age: 20}
            ]
        });
    };

    nameChangedHandler = (event) => {
        const newName = event.target.value;
        this.setState({
            persons: [
                {name: 'Name1', age: 10},
                {name: newName, age: 13},
                {name: 'Name3', age: 20}
            ]
        });
    };

    render() {
        const style = {
            backgroundColor: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px'
        };

        return (
            <div className="App">
                <header className="App-header">
                    <h1>React App</h1>
                    <p>It is working</p>
                    <button
                        onClick={this.switchNameHandler.bind(this, 'New name')}
                        style={style}>Switch Name
                    </button>
                    <Person
                        name={this.state.persons[0].name}
                        age={this.state.persons[0].age}
                        click={this.switchNameHandler.bind(this, 'NEW NAME')}
                    />
                    <Person
                        name={this.state.persons[1].name}
                        age={this.state.persons[1].age}
                        changed={this.nameChangedHandler}>My hobbies: Racing
                    </Person>
                    <Person name={this.state.persons[2].name}
                            age={this.state.persons[2].age}
                    />
                </header>
            </div>
        );
    }
}

export default App;
