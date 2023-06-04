import React from "react";
import HelloWorld from "./HelloWorld";

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      isShow:true
    }
  }
  switchShow() {
    this.setState({ isShow:!this.state.isShow })
  }
  render() {
    const { isShow } = this.state
    return (
      <div>
        <h2>App</h2>
        <button onClick={ e => this.switchShow()}>切换</button>
        { isShow && <HelloWorld/>}
        {/* <HelloWorld/> */}
      </div>
    )
  }
}
export default App