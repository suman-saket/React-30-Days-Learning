//3 simple step to use context value
//1 step - import useContext
import React, { useContext } from "react";
import ComponentF from "./ComponentF";
//2 step- import the necessary context(here 2 of them).
import { UserContext, ChannelContext } from "../App";

function ComponentE() {
  //Final step- Call the useContext function passing in the context as its argument
  const user = useContext(UserContext);
  const channel = useContext(ChannelContext);
  return (
    <div>
      User is {user} and channel is {channel}
    </div>
  );
}

export default ComponentE;

//The useContext Hook only makes the consumption of context value simpler
