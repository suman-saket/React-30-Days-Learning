import React, { Component } from "react";

class EventBind extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "hello",
    };

    // this.clickHandler = this.clickHandler.bind(this);  //3rd way of binding event handler
  }

  //1st and 2nd way of binding event handler in line 32-33
  //   clickHandler() {
  //     this.setState({
  //       message: "goodbye",
  //     });
  //   }

  //4th wayy of binding event handler using arrow function
  clickHandler = () => {
    this.setState({
      message: "goodbye",
    });
  };

  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* <button onClick={this.clickHandler.bind(this)}>Click</button>  */}
        {/*1st way*/}
        {/* <button onClick={() => this.clickHandler()}> Click </button> */}
        {/*2nd way*/}
        {/* <button onClick={this.clickHandler}> Click </button> */}
        {/*3rd way*/}
        <button onClick={this.clickHandler}> Click </button> {/*4th way*/}
      </div>
    );
  }
}

export default EventBind;
