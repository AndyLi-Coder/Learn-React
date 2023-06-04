import React, { Component } from 'react'
import TabControl from './TabControl/index'

export class App extends Component {
  constructor() {
    super()
    this.state = {
      titles: ['流行', '新款', '精选'],
      text:'流行'
    }
  }
  setText(text) {
    this.setState({text})
  }
  getTabType(item) {
    if (item === '流行') {
      return <span>{ item }</span>
    } else if (item === '新款') {
      return <button>{ item }</button>
    } else {
      return <i>{ item }</i>
    }
  }
  render() {
    const { titles,text } = this.state
    return (
      <div>
        <TabControl
          titles={titles}
          changeText={(text) => this.setText(text)}
          // 作用域插槽实现
          tabType={(item) => this.getTabType(item)}
        />
        <h2>{text}</h2>
      </div>
    )
  }
}

export default App