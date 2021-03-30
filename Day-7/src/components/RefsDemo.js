import React, { Component } from "react";

class RefsDemo extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();

    //callbackRef
    this.cbRef = null;
    this.setCbRef = (element) => {
      this.cbRef = element;
    };
  }

  componentDidMount() {
    // this.inputRef.current.focus();
    if (this.cbRef) {
      this.cbRef.focus();
    }
  }

  clickHandler = () => {
    //alert(this.inputRef.current.value);
    alert(this.cbRef.value);
  };
  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef} />
        <input type="text" ref={this.setCbRef} />
        <button onClick={this.clickHandler}>click here</button>
      </div>
    );
  }
}

export default RefsDemo;
