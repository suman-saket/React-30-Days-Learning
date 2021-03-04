import React, { useState } from "react";

const UseStateObject = () => {
  const [myObject, setmyObject] = useState({
    myName: "Saket",
    myAge: 24,
    degree: "B.Tech",
  });

  const changeObject = () => {
    //setmyObject({ myName: "Suman", myAge: 25, degree: "M.Tech" });  //But this is not the right way to chnage the data of object .If there are lot of fileds in object then it will be tough TO CHANGE.
    setmyObject({ ...myObject, myAge: 21 }); // here, spread opeartor(...myObject) is holding old data of myObject and the field of object(eg. myAge:21 ) that we want to modify is written after spread operator.
  };

  return (
    <div>
      <h1 className="h1style">
        Name:{myObject.myName} & Age:{myObject.myAge} & Degree:{myObject.degree}
      </h1>
      <button className="btn" onClick={changeObject}>
        Update
      </button>
    </div>
  );
};

export default UseStateObject;
