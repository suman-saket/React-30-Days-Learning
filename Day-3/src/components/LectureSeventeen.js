import React from "react";

function LectureSeventeen() {
  const persons = [
    {
      id: 1,
      name: "Bruce",
      age: 30,
      skill: "Batman",
    },
    {
      id: 2,
      name: "clark",
      age: 25,
      skill: "SuperMan",
    },
    {
      id: 3,
      name: "Diana",
      age: 80,
      skill: "Wonder Woman",
    },
  ];

  const personList = persons.map((person) => (
    <h3>
      I am{person.name},I am {person.age} yrs old.I am {person.skill}
    </h3>
  ));
  return <div>{personList}</div>;

  //   const names = ["Bruce", "Clark", "Diana"];
  //   const nameList = names.map((name) => <h2>{name}</h2>);
  //   return <div>{nameList}</div>;
}

export default LectureSeventeen;
