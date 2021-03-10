import React, { useState } from "react";
import "./App.css";
import Test from "./components/customHooks/Test";
import BasicForm from "./components/Forms/BasicForm";
import UnControlled from "./components/Forms/UnControlled";
import HookRules from "./components/HookRules";
import ShortCircuit from "./components/ShortCircuit";
import CompA from "./components/useContext/CompA";
import UseEffect1 from "./components/useEffectHooks/UseEffect1";
import UseEffect2 from "./components/useEffectHooks/UseEffect2";
import UseEffectAPI from "./components/useEffectHooks/UseEffectAPI";
import UseReducer from "./components/useReducer/useReducer";
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
      <UseStateObject />
      <UseStateArray />
      <ShortCircuit />]
      <BasicForm />
      <UseEffect1 />
      <UseEffect2 />
      <UseEffectAPI />
      <UnControlled />
      <UseReducer />
      <CompA />*/}
      <Test />
    </div>
  );
}

export default App;
