import React from "react";

function Person({person1}) {
  return (
    <div>
      <h1>
        My name is {person1.name} , i am {person1.age} years old
      </h1>
    </div>
  );
}

export default Person;
