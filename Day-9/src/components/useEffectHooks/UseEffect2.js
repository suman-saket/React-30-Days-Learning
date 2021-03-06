import React, { useState, useEffect } from "react";

const UseEffect2 = () => {
  const [widthCount, setWidthCount] = useState(window.screen.width);

  const actualWidth = () => {
    console.log("I am width");
    setWidthCount(window.innerWidth);
  };

  useEffect(() => {
    console.log("add event");

    window.addEventListener("resize", actualWidth);

    return () => {
      console.log("remove event");
      window.removeEventListener("resize", actualWidth);
    };
  });

  return (
    <div>
      <h1>Window size is:{widthCount}</h1>
    </div>
  );
};

export default UseEffect2;
