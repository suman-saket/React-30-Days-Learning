import React, { useState } from "react";
import "./App.css";
import HookRules from "./components/HookRules";
import UseStateArray from "./components/UseStateArray";
import UseStateObject from "./components/UseStateObject";

function App() {
  {
    /*
 
  const [myName, setmyName] = useState("Saket Suman");

  const changeName = () => {
    let value = myName;

    //conditional Rendering using Ternary operator

    value === "Saket Suman"
      ? setmyName("Ramu Naam hai mera")
      : setmyName("Saket Suman");

    //conditional rendering using if-else

    // if (value === "Saket Suman") {
    //   setmyName("Ramu Naam hai mera");
    // } else {
    //   setmyName("Saket Suman");
    // }
  };
  console.log(myName);

*/
  }

  return (
    <div>
      {/* <h1>{myName}</h1>
      <button className="btn" onDoubleClick onClick={changeName}>
        Click here
      </button> 
      <HookRules />
      <UseStateObject />*/}
      <UseStateArray />
    </div>
  );
}

export default App;
