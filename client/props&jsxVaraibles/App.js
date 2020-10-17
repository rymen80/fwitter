import React from "react";
import JSXVariables from "./components/JSXVariables";

class App extends React.Component {
  state = {
    name: 'Ryan',
    reactThoughts: 'pretty cool so far',
    gracie: "Tomorrow is GG's 9th Birthday",
    Penny: 'Pen Pen likes Bananas'
  }

// now passdown a prop to JSX variables called name
  render() {

  return <JSXVariables
  name={this.state.name}
  thoughts={this.state.reactThoughts}
  gracie={this.state.gracie}
  Penny={this.state.Penny}
  />
  }
}



export default App;
