import React, { Component } from "react";
import PureComp from "./PureComp";
import RegularComponent from "./RegularComponent";
import MemoComponent from "./MemoComponent";

class ParentComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Saket",
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: "Suman",
      });
    }, 2000);
  }
  render() {
    console.log("parent component render");

    return (
      <div>
        Parent Component
        {/* <RegularComponent name={this.state.name} />
        < PureComp name={this.state.name} /> */}
        <MemoComponent name={this.state.name} />
      </div>
    );
  }
}

export default ParentComponent;
