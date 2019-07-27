import React, { Component } from "react";
import classes from "./App.css";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";
import WithClass from '../hoc/WithClass';
import AuthContext from '../context/auth-context';

import uuidv4 from "uuid/v4";

// class-based component (stateful component). Don't use if not necessary
class App extends Component {
  state = {
    persons: [
      { id: uuidv4(), name: "Andi", age: 23 },
      { id: uuidv4(), name: "Peter", age: 25 },
      { id: uuidv4(), name: "John", age: 27 },
      { id: uuidv4(), name: "Moni", age: 21 }
    ],
    otherState: 'some other value',
    showPersons: false,
    changeCounter: 0,
    authenticated: false,
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    // with {...xxx} create a new object and spread all the properties of the old object
    const person = {...this.state.persons[personIndex]};
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    // setState does not immediately trigger a rerender, it is scheduled
    // therefore, if a dependency to the current state is needed, we need to use
    // prevState syntax, to not rely on the "current state" which might be changed
    // by another scheduled setState und results in undesired behavior.
    this.setState((prevState) => {
      return { 
        persons: persons,
        changeCounter: prevState.changeCounter + 1,
      };
    });
  };

  deletePersonHandler = personIndex => {
    let { persons } = this.state;

    //Note: Always update the state in an immutable fashion. So no state mangling outside setState. Create copy of the state props
    //create a copy of persons
    persons = persons.slice();
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  // Basically this is the same as creating a normal method (togglePersonHandler(){}).
  // But the old syntax seen above has problems with the this keywoard. The new syntax creates
  // What we are doing is creating an arrow function which calls a method. this always returns to the App class
  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;

    // Inside the method call: This is a deconstructing thingy. Acutally you are asked to set the state, however here you set the property showPersons of the state
    // because of the curly braces
    this.setState({ showPersons: !doesShow });
  };

  loginHandler = () => {
    this.setState({authenticated: true});
  };

  // use .bind() to pass parameters to a handler
  // alternative: "use () => functionCall(param)" (but bind is more optimized)
  render() {
    let personJsx = null;

    if (this.state.showPersons) {
      personJsx = (
        <div>
          <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler}
            isAuthenticated={this.state.authenticated}
          />
        </div>
      );
    }

    return (
      // StyleRoot is a Radium Component, required to parse Radium media queries
      <WithClass classes={classes.App}>
        <AuthContext.Provider
          value={{
            authenticated: this.state.authenticated,
            login: this.loginHandler
          }}
        >
          <Cockpit
            showPersons={this.state.showPersons}
            personsLength={this.state.persons.length}
            clicked={this.togglePersonsHandler}
          />
          {personJsx}
        </AuthContext.Provider>
      </WithClass>
    );
  }
}

// Radium is a higher order component
export default App;
