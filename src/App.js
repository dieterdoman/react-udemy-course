import React, {Component} from 'react';
import styles from './App.module.css';
import Person from './Person/Person'

class App extends Component {
    state = {
        persons: [
            {id: '1', name: 'Name1', age: 10},
            {id: '2', name: 'Name2', age: 13},
            {id: '3', name: 'Name3', age: 16}
        ],
        showPersons: false
    };

    deletePersonHandler = (personIndex) => {
        const persons = [...this.state.persons];
        persons.splice(personIndex, 1);
        this.setState({persons: persons});
    };

    nameChangedHandler = (event, id) => {
        const newName = event.target.value;
        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id
        });
        const updatedPerson = {
            ...this.state.persons[personIndex]
        };
        updatedPerson.name = newName;
        const persons = [...this.state.persons];
        persons[personIndex] = updatedPerson;
        this.setState({persons: persons});
    };

    togglePersonsHandler = () => {
        const currentState = this.state.showPersons;
        this.setState({showPersons: !currentState})
    };

    render() {
        const style = {
            backgroundColor: 'green',
            color: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
        };

        let persons = null;

        if (this.state.showPersons) {
            persons = (
                <div>
                    {this.state.persons.map((person, index) => {
                        return <Person
                            key={person.id}
                            name={person.name}
                            age={person.age}
                            changed={(event) => this.nameChangedHandler(event, person.id)}
                            click={() => this.deletePersonHandler(index)}/>
                    })}
                </div>
            );

            style.backgroundColor = 'red';
        }

        const classes = [];
        if (this.state.persons.length <= 2) {
            classes.push(styles.red);
        }
        if (this.state.persons.length <= 1) {
            classes.push(styles.bold);
        }

        return (
            <div className={styles.App}>
                <h1>React App</h1>
                <p className={classes.join(' ')}>It is working</p>
                <button
                    onClick={this.togglePersonsHandler}
                    style={style}>Show Persons
                </button>
                {persons}
            </div>
        );
    }
}

export default App;
