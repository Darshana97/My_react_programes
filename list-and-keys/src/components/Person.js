import React from "react";

function Person({ person1, key }) {
  return (
    <div>
      <h1>
        {key} My name is {person1.name} , my age is {person1.age}{" "}
      </h1>
    </div>
  );
}

export default Person;
