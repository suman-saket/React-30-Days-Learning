import React from "react";

//ES5 Syntax
// function Greet() {
//   return <h1> Hello Guys</h1>;
// }

//ES6 Syntax
// const Greet = (props) => {
//   return (
//     <div>
//       <h1>
//         Hello {props.name} a.k.a {props.stageName}
//       </h1>
//       {props.children}
//     </div>
//   );
// };

//Destructuring Props using 1st way(Drstructuring in the parameter)-

// const Greet = (name, stageName) => {
//   return (
//     <div>
//       <h1>
//         Hello {name} a.k.a {stageName}
//       </h1>
//     </div>
//   );
// };

//Destructuring Props using 2nd way(Drstructuring in the Function body)-

const Greet = (props) => {
  const { name, stageName } = props;
  return (
    <div>
      <h1>
        Hello {name} a.k.a {stageName}
      </h1>
    </div>
  );
};

export default Greet;

//Named Export

/*

 export const Greet = () => (
   <h1>Hello guys, I am Functional Component with es6 Syntax</h1>
 );
 
 */
