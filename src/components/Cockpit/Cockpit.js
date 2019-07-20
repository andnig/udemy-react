import React from 'react';
import classes from "./Cockpit.css";
import PropTypes from 'prop-types';
  
const cockpit = (props) => {
    const appClasses = [];
    let btnClass = '';

    if(props.showPersons)
    {
        btnClass = classes.Red;
    }


    if (props.persons.length <= 2)
    {
      appClasses.push(classes.red);
    }
    if (props.persons.length <= 1) {
      appClasses.push(classes.bold);
    }

    return (
        <div className={classes.Cockpit}>
            <p className={appClasses.join(" ")}>This is a test paragraph.</p>
            <p className="App-intro">
            Hello. To get started, edit
            <code>src/App.js</code>
            and save to reload.
            </p>

            <button
            className = { btnClass }
            onClick={props.clicked}
            >
            Hide/Unhide cards
            </button>
        </div>
    );
}

// Props validation; Used in development mode to catch errors if wrong types are added to props
cockpit.propTypes = {
    showPersons: PropTypes.bool.isRequired,
    persons: PropTypes.array.isRequired,
    clicked: PropTypes.func.isRequired,
  }

export default (cockpit);