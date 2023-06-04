import React, { Component } from 'react'

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
    // 2.如果同步更新了state，但是还没有执行render函数，那么state和props不能保持同步
    // state和props不能保持同步的时候，在开发中会遇到很多的问题
    this.setState({ message: "你好啊！React" }, () => {
      console.log('合并之后的数据',this.state.message)
    })
    console.log('setState之后的数据', this.state.message)
    // 异步的话，state中的值和传给子组件Hello的props的值能保持一致
    
  }
  addCounter() { 

    // 1.setState设计为异步更新，可以显著的提高性能
    // 如果每次setState进行一次更新，意味着render函数会被频繁调用，界面重新渲染，效率很低
    // 最好的办法是获取到多个更新以后，进行批量的更新
    this.setState((state) => {
      return {
        counter:state.counter + 1
      }
    })
    this.setState((state) => {
      return {
        counter:state.counter + 1
      }
    })
    this.setState((state) => {
      return {
        counter:state.counter + 1
      }
    })
    // 上面的setState被调用了三次，但是下面的render函数只执行一次，提高渲染性能
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