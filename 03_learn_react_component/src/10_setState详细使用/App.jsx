import React, { Component } from 'react'
import flushSync from 'react-dom'

function Hello(props) {
  return (
    <h2>{ props.message }</h2>
  )
}

export class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      message: "Hello World",
      counter: 100
    }
  }
  changeText() {
    // setState设计一定是异步的吗
    // 1.在react18之前，宏任务setTimeout、promise、原生的事件中setState是同步的
    // 2.react18之后，都变成了异步处理（批处理）
    /* setTimeout(() => {
      this.setState({
        message:'你好啊!React'
      })
   },0) */
    // 3.如果想要达到同步处理的效果,可以使用flushSync

    flushSync(() => {
      this.setState({message:"你好啊！React"})
    })
  }
  addCounter() { 
  }
  render() {
    const { message,counter } = this.state
    return (
      <div>
        <h2>message:{message}</h2>
        <button onClick={() => this.changeText()}>修改文本</button>
        <h3>counter:{counter}</h3>
        <button onClick={() => this.addCounter()}>counter+1</button>

        <Hello message={ message }  />
      </div>
    )
  }
}

export default App