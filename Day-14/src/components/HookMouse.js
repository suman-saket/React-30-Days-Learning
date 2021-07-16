//RunEffect only once using Functional component

import React, { useState, useEffect } from "react";

function HookMouse() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const logMousePosition = (e) => {
    console.log("Mouse event");
    setX(e.clientX);
    setY(e.clientY);
  };

  useEffect(() => {
    console.log("useEffect called");
    window.addEventListener("mousemove", logMousePosition);

    //The function that is passed to useEffect can return a function which will be executed when component will unMount.
    //So from the above arrow function passed to useEffect, we return cleanup Function.
    return () => {
      //When you want to execute some component cleanup code,you include it in function and return that function from the function passed to useEffect.cleanUp code can be cancelling subscription,timers or removing Event Listeners
      //here,we are mimicking componentwillUnmount with useEffect.
      console.log("Component unmounting code");
      window.removeEventListener("mousemove", logMousePosition);
    };
  }, []); // This Dependency array(an empty array) will call only once after initial render. Here, we are telling React that this effect does not depend on any state or props.So there is no need to call this effect after every render.
  //we can mimic componentDidMount wit useEffect Hook by simpy passing an empty array.

  return (
    <div>
      Hooks - X - {x} Y - {y}
    </div>
  );
}

export default HookMouse;

//RunEffect only once using class component

// import React, { Component } from 'react'

// class ClassMouse extends Component {
// 	constructor(props) {
// 		super(props)

// 		this.state = {
// 			x: 0,
// 			y: 0
// 		}
// 	}

// 	logMousePosition = e => {
// 		this.setState({ x: e.clientX, y: e.clientY })
// 	}

// 	componentDidMount() {
// 		window.addEventListener('mousemove', this.logMousePosition)
// 	}

// 	componentWillUnmount() {
// 		window.removeEventListener('mousemove', this.logMousePosition)
// 	}

// 	render() {
// 		return (
// 			<div>
// 				X - {this.state.x} Y - {this.state.y}
// 			</div>
// 		)
// 	}
// }

// export default ClassMouse
