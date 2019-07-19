import React from "react";
import "./Person.css";

// functional component: Use as much as possible. Components should be
// as stateless as possible! So, only a JS-function
const person = props => {

  return (
    // Note: When using class-based components, use this.props
    <div className="Person">
      <p onClick={props.click}>
        I&#39m {props.name} and I&#39m {props.years} old
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  );
};

export default (person);
