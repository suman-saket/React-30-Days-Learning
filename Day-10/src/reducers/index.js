import changeTheNumber from "./upDown";
import multTheNumber from "./multDiv";

import { combineReducers } from "redux";

const rootreducer = combineReducers({
  changeTheNumber,
  multTheNumber,
});

export default rootreducer;
