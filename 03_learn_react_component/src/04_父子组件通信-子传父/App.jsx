import React, { Component } from 'react'
import AddCount from './AddCount'
import SubCount from './SubCount'

export class App extends Component {
  constructor() {
    super()
    this.state = {
      count:100
    }
  }
  changeCount(count) {
    this.setState({count:this.state.count + count})
  }
  render() {
    const { count } = this.state
    return (
      <div>      
        <h2>当前计数：{count}</h2>
        <AddCount addClick={(count) => this.changeCount(count)} />
        <SubCount subClick={(count) => this.changeCount(count)} />
      </div>
    )
  }
}


export default App