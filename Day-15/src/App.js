import React from "react";
import "./App.css";
import ComponentC from "./components/ComponentC";

//3 Step to create and consuming Context value
//Step 1- we created the context using React.createContext()
export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

function App() {
  return (
    <div className="App">
      // Step-2 We provide the context value at a high level in component tree
      <UserContext.Provider value={"Vishwas"}>
        <ChannelContext.Provider value={"Codevolution"}>
          <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;

//Step-3 is written in componentF file for earlier way of using context.

//Step-3 is written in componentE file for using userContext Hook.
