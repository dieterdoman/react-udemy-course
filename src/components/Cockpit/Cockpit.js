import React from 'react';
import styles from "./Cockpit.module.css";

const Cockpit = (props) => {
    const classes = [];
    let buttonClasses = "";
    if (props.showPersons) {
        buttonClasses = styles.Red;
    }
    if (props.persons.length <= 2) {
        classes.push(styles.red);
    }
    if (props.persons.length <= 1) {
        classes.push(styles.bold);
    }

    return (
        <div className={styles.Cockpit}>
            <h1>React App</h1>
            <p className={classes.join(' ')}>It is working</p>
            <button
                className={buttonClasses}
                onClick={props.clicked}>Show Persons</button>
        </div>
    );
};

export default Cockpit;
