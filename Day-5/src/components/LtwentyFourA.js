import React, { Component } from "react";
import LtwentyFourB from "./LtwentyFourB";

class LtwentyFourA extends Component {
  //Order Of Execution During Mounting Phase

  constructor(props) {
    super(props);

    this.state = {
      name: "Saket",
    };
    console.log("LifeCycleA Constructor");
  }
  static getDerivedStateFromProps(props, state) {
    console.log("LifecycleA getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("LifecycleA componentDidMount");
  }
  shouldComponentUpdate() {
    console.log("LifeCycleA shouldComponentUpdate");
    return true;
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("LifecycleA getSnapShotBeforeUpdate");
  }
  componentDidUpdate() {
    console.log("LifecycleA componentDidUpdate");
    return null;
  }

  changeState = () => {
    this.setState({
      name: "Suman",
    });
  };

  render() {
    console.log("LifecycleA render");

    return (
      <div>
        <div>Lifecycle A</div>
        <button onClick={this.changeState}>Change State</button>
        <LtwentyFourB />
        {/* Because render method knows abouth children component, the execution passes on from a parent component to children component */}
      </div>
    );
  }
}

export default LtwentyFourA;
