import React, { Component } from "react";

class LectureSixteen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true,
    };
  }

  render() {
    //4th Approach (Short Circuit Approach used when we want to show only one result if true then show otherwise do not show anything)

    return this.state.isLoggedIn && <div>WElcome Saket</div>;

    //3rd Approach (Ternary Conditional Operator Approach )

    // return this.state.isLoggedIn ? (
    //   <div>Welcome Saket</div>
    // ) : (
    //   <div>Welcome LoggedIn User</div>
    // );

    //2nd Approach

    // let message;
    // if (this.state.isLoggedIn) {
    //   message = <div>Welcome Saket</div>;
    // } else {
    //   message = <div>Welcome LoggedIn user</div>;
    // }

    //1st Approach

    // return <div>{message}</div>;
    // if (this.state.isLoggedIn) {
    //   return <div>Welcome Saket</div>;
    // } else {
    //   return <div>Welcome LoggedIn User</div>;
    // }
  }
}

export default LectureSixteen;
