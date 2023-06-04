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
  render() {
    const { titles,text } = this.state
    return (
      <div>
        <TabControl titles={titles} changeText={(text) => this.setText(text)} />
        <h2>{text}</h2>
      </div>
    )
  }
}

export default App