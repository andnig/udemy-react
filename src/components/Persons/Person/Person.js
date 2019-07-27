/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { Component } from "react";
import classes from "./Person.css";
import WithClass from '../../../hoc/WithClass';
import PropTypes from 'prop-types';
import AuthContext from '../../../context/auth-context';

// functional component: Use as much as possible. Components should be
// as stateless as possible! So, only a JS-function
class Person extends Component {
  constructor(props){
    super(props);
    this.inElement = React.createRef();
  }

  componentDidMount(){
    // this.inElement.focus();
    this.inElement.current.focus();
  }

  render()
  {
    return (
      //         Note: When using class-based components, use this.props
      <WithClass classes={classes.Person}>
        <AuthContext.Consumer>
          {context =>
            context.authenticated ? (
              <p>Authenticated!</p>
            ) : (
              <p>please log in</p>
            )
          }
        </AuthContext.Consumer>

        <p onClick={this.props.click}>
          I&#39m {this.props.name} and I&#39m {this.props.age} old
        </p>
        <p>{this.props.children}</p>
        <input
          type="text"
          ref={this.inElement}
          // alternative: ref={(inputElement) => {this.inElement = inputElement}}
          onChange={this.props.changed}
          value={this.props.name}
        />
      </WithClass>
    );
  }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func,
  children: PropTypes.string,
  isAuthenticated: PropTypes.bool,
};

export default (Person);
