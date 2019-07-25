import React, { Component } from "react";
import classes from "./Person.css";
import Aux from "../../../hoc/Aux";

// functional component: Use as much as possible. Components should be
// as stateless as possible! So, only a JS-function
class Person extends Component {
  render()
  {
  /* eslint-disable*/
    return (
      //         Note: When using class-based components, use this.props
      // Aux here is a simple "wrapping component which does nothing. But react requires a single root component, therefore this trick."
      // Aux is the same is built in "React.Fragment"
      <Aux>
        <div className={classes.Person} onClick={this.props.click}>
          <p>
            I&#39m {this.props.name} and I&#39m {this.props.years} old
          </p>
          <p>{this.props.children}</p>
          <input type="text" onChange={this.props.changed} value={this.props.name} />
        </div>
      </Aux>
    );
  }
};

export default (Person);
