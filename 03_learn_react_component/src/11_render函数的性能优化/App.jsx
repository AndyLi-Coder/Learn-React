import React, { PureComponent } from 'react'
import Home from './Home'
import Recommend from './Recommend'
import Profile from './Profile'

export class App extends PureComponent {
  constructor() {
    super()
    this.state = {
      message: "Hello World",
      counter:10
    }
  }
  /**
   * 通过shouldComponentUpdate 进行性能优化，即只有当相关组件的数据发生改变的时候，则渲染该组件，即render
   * 
   * 但是如果不使用shouldComponentUpdate的时候
   * 在类组件中使用：PurComponent   函数式组件使用：memo
   */

  // nextProps 更新之后的props
  // nextState 更新之后的state
  /* shouldComponentUpdate(nextProps, newState) {
    if (this.state.message !== newState.message || this.state.counter.counter !== newState.counter) {
      return true
    }
    return false
  } */
  changeText() {
    this.setState({ message:"你好啊！React" })
   }
  addCounter() { 
    this.setState({ counter:this.state.counter + 1 })
  }
  render() {
    console.log('App render')
    const { message,counter } = this.state
    return (
      <div>
        <h2>App Component - {message} - {counter}</h2>
        <button onClick={() => this.changeText()}>修改文本</button>
        <button onClick={() => this.addCounter()}>counter+1</button>
        <Home message={ message } />
        <Recommend counter={counter} />
        <Profile message={message}  />
      </div>
    )
  }
}

export default App