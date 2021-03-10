import React, { useState } from "react";
import useCustomHook from "./CustomHook";

const Test = () => {
  const [count, setCount] = useState(0);

  //custom Hook
  useCustomHook(count);
  console.log("hello outside");

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Click</button>
    </div>
  );
};

export default Test;
