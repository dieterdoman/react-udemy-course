import React from 'react';
import styles from './Person.module.css'
import WithClass from "../../../hoc/WithClass";
import PropTypes from 'prop-types';

const person = (props) => {
    return (
        <WithClass classes={styles.Person}>
            <p onClick={props.click}>I'm a {props.name} and I am {props.age} years old</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </WithClass>
    );
};

person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};

export default person;
