import React, {useContext} from 'react';
import styles from "./Cockpit.module.css";
import AuthContext from '../../context/auth-context';

const Cockpit = (props) => {
    const authContext = useContext(AuthContext);
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
            <h1>{props.title}</h1>
            <p className={classes.join(' ')}>It is working</p>
            <button
                className={buttonClasses}
                onClick={props.clicked}>Show Persons</button>
            <button onClick={authContext.login}>Log in</button>
        </div>
    );
};

export default Cockpit;
