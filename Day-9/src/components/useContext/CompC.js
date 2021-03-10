import React, { useContext } from "react";
import { BioData } from "./CompA";

// const CompC = ({ name }) => {
//   return (
//     <div>
//       <h1>hello compC {name}</h1>
//     </div>
//   );
// };

const CompC = ({ name }) => {
  const channelName = useContext(BioData);
  return (
    <div>
      <h1>hello compC {channelName}</h1>
    </div>
  );
};

export default CompC;
