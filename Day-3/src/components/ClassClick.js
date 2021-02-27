import React, { Component } from "react";

class ClassClick extends Component {
  clickHandler() {
    console.log(" class Button clicked");
  }
  render() {
    return (
      <div>
        <button onClick={this.clickHandler}>Class Click Here</button>
      </div>
    );
  }
}

export default ClassClick;
