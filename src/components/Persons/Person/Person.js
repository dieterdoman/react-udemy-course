import React, {useRef, useEffect, useContext} from 'react';
import styles from './Person.module.css'
import WithClass from "../../../hoc/WithClass";
import PropTypes from 'prop-types';
import AuthContext from '../../../context/auth-context';

const Person = (props) => {
    const inputFocusRef = useRef(null);
    const authContext = useContext(AuthContext);

    useEffect(() => {
        inputFocusRef.current.focus();
    });

    return (
        <WithClass classes={styles.Person}>
            {authContext.authenticated ? <p>Authenticated</p> : <p>Please log in</p>}
            <p onClick={props.click}>I'm a {props.name} and I am {props.age} years old</p>
            <p>{props.children}</p>
            <input ref={inputFocusRef} type="text" onChange={props.changed} value={props.name}/>
        </WithClass>
    );
};

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};

export default Person;
