import React, { Component } from 'react'

export class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      message: "Hello World",
      counter: 100
    }
  }
  changeText() { 
    // 1.setState的基本使用  Object.assign(原有的state,改变的state)
    // this.setState({message:"你好啊！react"})

    // 2.传入一个回调函数
    // 优点1：可以在回调函数函数中处理新的state的逻辑
    // 优点2：当前的回调函数可以将之前的state和props传递进来
   /*  this.setState((state, props) => {
      // 此处可以处理新的state逻辑
      // 获取之前的state和props值
      console.log(state.message,props)
      return {
        message:"你好啊!React"
      }
    }) */
    

    // 3.setState是异步调用
    
    // 如果希望获取数据更新（合并以后）的值，并处理逻辑代码，可以在setState中传入第二个参数：callback
    this.setState({ message: "你好啊！React" }, () => {
      console.log('合并之后的数据',this.state.message)
    })
    console.log('setState之后的数据',this.state.message)
  }
  addCounter() { }
  render() {
    const { message,counter } = this.state
    return (
      <div>
        <h2>message:{message}</h2>
        <button onClick={() => this.changeText()}>修改文本</button>
        <h3>counter:{counter}</h3>
        <button onClick={() => this.addCounter()}>counter+1</button>
      </div>
    )
  }
}

export default App