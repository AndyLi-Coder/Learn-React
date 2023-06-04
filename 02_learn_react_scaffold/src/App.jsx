import React from "react";
import HelloWorld from "./components/HelloWorld";

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      message: 'Hello Scaffold'
    }
  }
  render() {
    const { message } = this.state
    return (
      <div>
        {message}
        <HelloWorld/>
      </div>
      
    )
  }
}

export default App