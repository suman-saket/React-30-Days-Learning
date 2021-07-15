import React, { useState } from "react";

function HookCounterTwo() {
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);
  const incrementFive = () => {
    for (let i = 0; i < 5; i++) {
      setCount((prevCount) => prevCount + 1);
    }
  };
  return (
    <>
      Count: {count}
      <button onClick={() => setCount(initialCount)}>Reset</button>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Increment
      </button>
      <button onClick={() => setCount((prevCount) => prevCount - 1)}>
        Decrement
      </button>
      <button onClick={incrementFive}>Increment 5</button>
    </>
  );
}

export default HookCounterTwo;

//Same concept using Class Component

// import React, { Component } from 'react'

// class ClassCounterTwo extends Component {
//   constructor(props) {
//     super(props)

//     this.state = {
//        count: 0
//     }
//   }

//   incrementCount = () => {
//     this.setState(prevState => {
//       return {
//         count: prevState.count + 1
//       }
//     })
//   }

//   render() {
//     return (
//       <div>
//         <button onClick={this.incrementCount}>Count {this.state.count}</button>
//       </div>
//     )
//   }
// }

// export default ClassCounterTwo
