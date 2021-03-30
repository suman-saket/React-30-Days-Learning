import React from "react";
import ReactDOM from "react-dom";

function PortalDemo() {
  return ReactDOM.createPortal(
    <h1>Portals Demo</h1>,
    document.getElementById("portal-root")
  );
}

export default PortalDemo;

//https://codesandbox.io/s/00254q4n6p    -Demo on Portal kindly visit here
