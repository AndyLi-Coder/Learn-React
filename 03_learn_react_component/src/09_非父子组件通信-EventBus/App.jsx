import React, { Component } from 'react'
import eventBus from './utils/event-bus'
import Home from './Home'

export class App extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      age: 0,
      height:0
    }
  }
  handlePrevClick(name, age, height) {
    this.setState({name,age,height})
  }
  handleNextClick(info) {
    console.log(info,'info')
  }
  // 获取时间总线传递的数据
  componentDidMount() {
    eventBus.on('handlePrev', this.handlePrevClick, this)
    eventBus.on('handleNext', this.handleNextClick.bind(this))
    // 或者handleNextClick可以使用箭头函数绑定this  

  }
  // 取消时间总线的事件
  componentWillUnmount() {
    eventBus.off('handlePrev',this.handlePrevClick)
  }
  render() {
    const { name,age,height } = this.state
    return (
      <div>
        <h2>App Component-{name}-{age}-{height}</h2>
        <Home/>
      </div>
    )
  }
}

export default App 