import React, { Component } from "react";
//import Greet  from "./components/FunctionalComponent";
import Greet from "./components/FunctionalComponent";
import Welcome from "./components/ClassComponent";
import "./App.css";
import Message from "./components/Message";
import Counter from "./components/Counter";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Counter /> */}
        {/* <Message />
         <Greet name="Bruce" stageName="Batman">
          <p>This is Children Props</p>
        </Greet>
        <Greet name="Clark" stageName="SuperMan">
          <button>Action</button>
        </Greet>
        <Greet name="Diana" stageName="Wonder Woman" /> */}

        <Welcome name="Bruce" stageName="Batman" />
        {/* <Welcome name="Clark" stageName="SuperMan" />
        <Welcome name="Diana" stageName="Wonder Woman" /> */}
      </div>
    );
  }
}

export default App;
