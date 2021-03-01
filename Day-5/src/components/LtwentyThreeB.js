import React, { Component } from "react";

class LtwentyThreeB extends Component {
  //Order Of Execution During Mounting Phase

  constructor(props) {
    super(props);

    this.state = {
      name: "Saket",
    };
    console.log("LifeCycleB Constructor");
  }
  static getDerivedStateFromProps(props, state) {
    console.log("LifecycleB getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("LifecycleB componentDidMount");
  }

  render() {
    console.log("LifecycleB render");

    return <div>Lifecycle B</div>;
  }
}

export default LtwentyThreeB;
