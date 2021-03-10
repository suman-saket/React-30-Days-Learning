import React, { createContext } from "react";
import CompB from "./CompB";

const BioData = createContext();

// const CompA = () => {
//   return (
//     <div>
//       <CompB name={"saket suman"} />
//     </div>
//   );
// };

const CompA = () => {
  return (
    <BioData.Provider value={"Saket Suamn"}>
      <CompB />
    </BioData.Provider>
  );
};

export default CompA;
export { BioData };

//context
//provider
//consumer is too length so we will use useContext here();

//context API/useContext
