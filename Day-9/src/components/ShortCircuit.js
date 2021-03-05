import React, { useState } from "react";

//ShortCircuit Evaluation is one of the way to conditionally Render in React(Multiple rendering is possible)
const ShortCircuit = () => {
  const [demo, setdemo] = useState("");
  //const [demo, setdemo] = useState("kaise ho");
  return (
    <div>
      <h1>
        {demo || (
          <>
            <h1>How are you</h1>
            <h1>You can do anything </h1>
          </>
        )}
      </h1>
      {/* In OR opearator if data is true then we will get left side data */}

      <h1>{demo && "saket"}</h1>
      {/* In AND opearator if data is true then we will get right side data */}
    </div>
  );
};

export default ShortCircuit;
