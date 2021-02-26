import React, { Component } from "react";

// class Welcome extends Component {
//   render() {
//     return (
//       <h1>
//         Welcome {this.props.name} a.k.a {this.props.stageName}
//       </h1>
//     );
//   }
// }

//Destructure in class componennt

class Welcome extends Component {
  render() {
    const { name, stageName } = this.props;
    return (
      <h1>
        Welcome {name} a.k.a {stageName}
      </h1>
    );
  }
}

export default Welcome;
