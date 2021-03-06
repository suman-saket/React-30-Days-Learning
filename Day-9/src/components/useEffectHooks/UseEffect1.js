import React, { useEffect, useState } from "react";

const UseEffect1 = () => {
  const [count, setCount] = useState(0);

  //This is not the Wrong to call hooks.We can't call useEffect conditionally

  // if (count >= 1) {
  //   useEffect(() => {
  //     document.title = `Chats(${count})`;
  //   });
  // }

  //If we want to run useEfffect conditinally,we can put that condition inside our hook
  useEffect(() => {
    console.log("i am frst one");

    if (count >= 1) {
      document.title = `Chats(${count})`;
    } else {
      document.title = `chats`;
    }
  }, [count]); //  dependency list array

  useEffect(() => {
    console.log("i am good");
  }, []);

  console.log("hello outside");

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>Click</button>
    </div>
  );
};

export default UseEffect1;
