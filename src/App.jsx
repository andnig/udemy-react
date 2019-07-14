import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";



// class-based component (stateful component). Don't use if not necessary
class App extends Component {
  state = {
    persons: [
      { name: "Andi", age: 23 },
      { name: "Peter", age: 25 },
      { name: "John", age: 27 },
      { name: "Moni", age: 21 }
    ],
    showPersons: false
  };

  switchNameHandler = name => {
    // DON'T do this: this.state.persons[0].name="Andreas";
    this.setState({
      persons: [
        { name: name, age: 23 },
        { name: "Peter", age: 25 },
        { name: "John", age: 27 },
        { name: "Moni", age: 22 }
      ]
    });
  };

  nameChangedHandler = event => {
    this.setState({
      persons: [
        { name: "Andi", age: 23 },
        { name: event.target.value, age: 25 },
        { name: "John", age: 27 },
        { name: "Moni", age: 22 }
      ]
    });
  };

  // Basically this is the same as creating a normal method (togglePersonHandler(){}).
  // But the old syntax seen above has problems with the this keywoard. The new syntax creates
  // What we are doing is creating an arrow function which calls a method. this always returns to the App class
  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;

    // Inside the method call: This is a deconstructing thingy. Acutally you are asked to set the state, however here you set the property showPersons of the state
    // because of the curly braces
    this.setState({showPersons: !doesShow})
  };

  // use .bind() to pass parameters to a handler
  // alternative: "use () => functionCall(param)" (but bind is more optimized)
  render() {
    // inline css styling
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1x solid blue",
      padding: "8px",
      cursor: "pointer"
    };

    const { persons } = this.state;

    return (
      <div className="App">
        <p className="App-intro">
          Hello. To get started, edit
          <code>src/App.js</code>
          and save to reload.
        </p>

        <button type="submit" onClick={this.togglePersonsHandler} style={style}>
          Hide/Unhide cards
        </button>
        {this.state.showPersons ? (
          <div>
            <Person
              name={persons[0].name}
              years={persons[0].age}
              click={() => this.switchNameHandler("Andi!?!")}
            />
            <Person
              name={persons[1].name}
              years={persons[1].age}
              changed={this.nameChangedHandler}
            />
            <Person name={persons[2].name} years={persons[2].age}>
              Nice children!
            </Person>
            <Person name={persons[3].name} years={persons[3].age} />
          </div>
        ) : null}
      </div>
    );
  }
}

export default App;
