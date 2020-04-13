import React from "react";
import Person from "./Person";

function NameList() {
  const persons = [
    {
      id: 1,
      name: "darshana",
      age: 20,
    },
    {
      id: 2,
      name: "pubudu",
      age: 21,
    },
    {
      id: 1,
      name: "bandara",
      age: 22,
    }
  ];

  const personList = persons.map(person => {
    <Person key={person.name} person1={person} />
  });

  return <div>{personList}</div>;
}

export default NameList;
