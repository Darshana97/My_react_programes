// import React from "react";

// function NameList() {
//   const names = ["Achi", "Darshana", "Brayan"];

//   return (
//     // <div>
//     //   <h1>{names[0]}</h1>
//     //   <h1>{names[1]}</h1>
//     //   <h1>{names[2]}</h1>
//     // </div>
//     <div>
//       {names.map((name) => (
//         <h1>{name}</h1>
//       ))}
//     </div>
//   );
// }

// export default NameList;

import React from "react";
import Person from "./Person";

function NameList() {
  const persons = [
    {
      id: 1,
      name: "Darshana",
      age: 22,
    },
    {
      id: 2,
      name: "Pubudu",
      age: 23,
    },
    {
      id: 3,
      name: "Bandara",
      age: 24,
    },
  ];

  const personList = persons.map((person) => <div><Person person1={person}/></div>
    
  );

  return <div>{personList}</div>;
}

export default NameList;
