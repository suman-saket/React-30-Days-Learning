import React, { useState, useEffect } from "react";

function IntervalHookCounter() {
  const [count, setCount] = useState(0);

  const tick = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    const interval = setInterval(tick, 1000);
    //replicating componentwillunMount for cleanup
    return () => {
      clearInterval(interval);
    };
  }, [count]);
  //}, [])          //Here  it will replicating componentDidMount
  //here is Empty Dependency list. So timer is set only once and return function to destroy timer that we have created.But our counter will not work as expected why??
  //If you think Dependency array is a way to specify when you want to re-run the effect,they you are going to run into problem.
  //Instead dependency array should be taught us a way to let react know about everything that the effect must watch for changes.

  return <div>{count}</div>;
}

export default IntervalHookCounter;

//Interval Counter using Class Component
// import React, { Component } from "react";

// class IntervalClassCounter extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 0,
//     };
//   }

//   componentDidMount() {
//     this.interval = setInterval(this.tick, 1000);
//     }

//   componentWillUnmount() {
//     clearInterval(this.interval);
//     }

//   tick = () => {
//     this.setState({
//       count: this.state.count + 1,
//     });
//   };

//   render() {
//     return <h1>{this.state.count}</h1>;
//   }
// }

// export default IntervalClassCounter;
