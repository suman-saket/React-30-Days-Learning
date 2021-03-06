import React, { useState } from "react";

const UseStateArray = () => {
  let bioData = [
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

  const [myArray, setmyArray] = useState(bioData);

  const clearArray = () => {
    setmyArray([]);
  };

  const removeElement = (id) => {
    const myNewArray = myArray.filter((person) => {
      return person.id !== id;
    });
    setmyArray(myNewArray);
  };

  return (
    <>
      {myArray.map((person) => {
        return (
          <h1 className="h1style" key={person.id}>
            Name:{person.name} & Age:{person.age}
            <button onClick={() => removeElement(person.id)}>remove</button>
          </h1>
        );
      })}
      <button className="btn" onClick={clearArray}>
        clear
      </button>
    </>
  );
};

export default UseStateArray;
