import React, { PureComponent } from 'react'

export class App extends PureComponent {
  constructor() {
    super()
    this.state = {
      titleSize:30
    }
  }
  addTittleSize() {
    this.setState({titleSize:this.state.titleSize + 2})
  }
  render() {
    const { titleSize } = this.state
    return (
      <div>
        <button onClick={e => this.addTittleSize()}>增加title的size</button>
        <h2 style={{color:'red',fontSize:`${titleSize}px`}}>我是标题</h2>
        <h3 style={{color:'orange',fontSize:'30px'}}>我是内容，哈哈哈</h3>
      </div>
    )
  }
}

export default App