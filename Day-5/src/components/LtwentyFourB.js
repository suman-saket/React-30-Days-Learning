import React, { Component } from "react";

class LtwentyFourB extends Component {
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
  shouldComponentUpdate() {
    console.log("LifeCycleB shouldComponentUpdate");
    return true;
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("LifecycleB getSnapShotBeforeUpdate");
    return null;
  }
  componentDidUpdate() {
    console.log("LifecycleB componentDidUpdate");
  }

  render() {
    console.log("LifecycleB render");

    return <div>Lifecycle B</div>;
  }
}

export default LtwentyFourB;
