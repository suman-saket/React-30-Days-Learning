import React, { useState, useRef } from "react";

const UnControlled = () => {
  //It is like useState only and it preserve the value.No render
  const luckyName = useRef(null);

  const [show, setShow] = useState(false);

  const submitForm = (e) => {
    e.preventDefault();
    const name = luckyName.current.value;
    name === "" ? alert("plz fill thw data") : setShow(true);
  };

  return (
    <div>
      <h1>Hello</h1>
      <form action="" onSubmit={submitForm}>
        <div>
          <label htmlFor="LuckyName">Enter your name</label>
          <input type="text" id="luckyName" ref={luckyName} />
        </div>
        <br />
        <button>Submit</button>
      </form>
      <p>{show ? `Your lucky name is ${luckyName.current.value}` : " "}</p>
    </div>
  );
};

export default UnControlled;
