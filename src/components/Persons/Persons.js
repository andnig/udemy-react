import React from "react";
import Person from "./Person/Person";

const persons = props =>
  props.persons.map((person, index) => {
    return (
      <Person
        // Add a key to tell react, which components to rerender if the list is mutated. If no key is given, the whole list is rerendered.
        // Key needs to be unique
        key={person.id}
        name={person.name}
        age={person.age}
        // use the arrow function here to have no problem with this keyword.
        // Alternative: this.deletePersonHandler().bind(this, index)
        click={() => props.clicked(index)}
        changed={event => props.changed(event, person.id)}
      />
    );
  });

export default (persons);