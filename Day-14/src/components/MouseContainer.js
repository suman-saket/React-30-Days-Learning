//useEffect with cleanUp
//this container will toggle component visibility and effectively unMount the component from the DOM.

import React, { useState } from "react";
import HookMouse from "./HookMouse";

function MouseContainer() {
  const [display, setDisplay] = useState(true);
  return (
    <div>
      <button onClick={() => setDisplay(!display)}>Toggle display</button>
      {display && <HookMouse />}
    </div>
  );
}

export default MouseContainer;
