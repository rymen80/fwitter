import React from "react";

function JSXVariables(props) {
  // const name = 'Ryan';
  // const reactThoughts = 'is pretty cool so far'
  return (
    <div className="main-container">
      <div className="container">
        <div className="jumbotron">
          <h1>Hi! My name is {props.name}</h1>
          <h2>My name has {props.name.length} words characters letters</h2>
          <h2>I think React is {props.thoughts} </h2>
          <h2>{props.gracie}</h2>
          <h2>{props.Penny}</h2>
        </div>
      </div>
    </div>
  );
}

export default JSXVariables;
