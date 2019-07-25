import React, { useEffect } from "react";
import classes from "./Cockpit.css";
import PropTypes from 'prop-types';
  
const cockpit = (props) => {

  // This method basically runs on every update cycle of cockpit component. 
  // The array parameter tells optionally, when it should be run based on which data changed
  // If the array is empty, the useEffect is only run on the first time
    useEffect(() => {
      // eslint-disable-next-line no-console
      console.log('Cockpit.js useEffect');
      return () => {
        // here some cleanup is done (optional return statement)
      }
    }, [])
    const appClasses = [];
    let btnClass = '';

    if(props.showPersons)
    {
        btnClass = classes.Red;
    }


    if (props.personsLength <= 2)
    {
      appClasses.push(classes.red);
    }
    if (props.personsLength <= 1) {
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
    personsLength: PropTypes.number.isRequired,
    clicked: PropTypes.func.isRequired,
  }

  // memo makes sure that it is only rerendered if the inputs (props in our case) changes
export default React.memo(cockpit);