//useeffect Demo
import React, { useState, useEffect } from "react";

function HookCounterOne() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  //useEffect runs after every render
  //useEffect is placed insise the component - By doing this we can easily access state and props without writing any additional code

  //useEffect runs after every render but it can cause performance problem in some cases
  //so we need a way to conditionally run an effect in functional component.

  useEffect(() => {
    console.log("useEffect - Updating document title ");
    document.title = `You clicked ${count} times`;
  }, [count]); //for conditionally executing an effect,we pass in a second parameter(i.e an array).Within this array we need to specify either props or state that we need to watch for

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => setCount(count + 1)}>
        useEffect - Click {count} times
      </button>
    </div>
  );
}

export default HookCounterOne;

//Run effect using class component

// import React, { Component } from 'react'

// class ClassCounterOne extends Component {
// 	constructor(props) {
// 		super(props)
// 		this.state = {
// 			count: 0,
// 			name: ''
// 		}
// 	}

// 	componentDidMount() {
// 		document.title = `Clicked ${this.state.count} times`
// 	}

// 	componentDidUpdate(prevProps, prevState) {
// 		if (prevState.count !== this.state.count) {     //conditional rendering
// 			console.log('Updating document title')
// 			document.title = `Clicked ${this.state.count} times`
// 		}
// 	}

// 	render() {
// 		return (
// 			<div>
// 				<input type="text" value={this.state.name} onChange={e => this.setState({ name: e.target.value })} />
// 				<button onClick={() => this.setState({ count: this.state.count + 1 })}>
// 					Click {this.state.count} times
// 				</button>
// 			</div>
// 		)
// 	}
// }

// export default ClassCounterOne
