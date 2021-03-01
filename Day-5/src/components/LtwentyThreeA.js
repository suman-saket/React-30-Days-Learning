import React, { Component } from "react";
import LtwentyThreeB from "./LtwentyThreeB";

class LtwentyThreeA extends Component {
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

  render() {
    console.log("LifecycleA render");

    return (
      <div>
        <div>Lifecycle A</div>
        <LtwentyThreeB />
      </div>
    );
  }
}

export default LtwentyThreeA;
