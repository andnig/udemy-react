import React from "react";
import "./Person.css";
import Radium from 'radium';

// functional component: Use as much as possible. Components should be
// as stateless as possible! So, only a JS-function
const person = props => {
  const style = {
    '@media (min-width: 500px)':{
      width: '450px'
    }
  };

  return (
    // Note: When using class-based components, use this.props
    <div className="Person" style={style}>
      <p onClick={props.click}>
        I&#39m {props.name} and I&#39m {props.years} old
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  );
};

export default Radium(person);
