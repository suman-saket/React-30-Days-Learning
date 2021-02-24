import React, { Component } from "react";
//import Greet  from "./components/FunctionalComponent";
import { Greet } from "./components/FunctionalComponent";
import Welcome from "./components/ClassComponent";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Greet />
        <Welcome />
      </div>
    );
  }
}

export default App;
