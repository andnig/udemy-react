import React from "react";
import classes from "./Person.css";

// functional component: Use as much as possible. Components should be
// as stateless as possible! So, only a JS-function
const person = props => {

  return (
    // Note: When using class-based components, use this.props
    <div className={classes.Person} onClick={props.click}>
      <p>
        I&#39m {props.name} and I&#39m {props.years} old
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  );
};

export default (person);
