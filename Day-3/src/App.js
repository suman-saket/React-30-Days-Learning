import React, { Component } from "react";
import "./App.css";
import ClassClick from "./components/ClassClick";
import EventBind from "./components/EventBind";
import FunctionClick from "./components/FunctionClick";
import LectureSeventeen from "./components/LectureSeventeen";
import LectureSixteen from "./components/LectureSixteen";

import ParentComponent from "./components/ParentComponent";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <FunctionClick />
      <br />
      <ClassClick />
      <EventBind /> 
      <ParentComponent />
        <LectureSixteen />*/}
        <LectureSeventeen />
      </div>
    );
  }
}

export default App;
