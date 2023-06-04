import React from "react";

class HelloWorld extends React.Component {
  // 1.生命周期-先执行组件的constructor-创建
  constructor() {
    console.log('constructor')
    super()
    this.state = {
      message:"Hello World"
    }
  }
  changeMessage() {
    this.setState({message:"message被修改"})
  }
  render() {
    console.log('render')
    const { message } = this.state
    // 2.生命周期-再执行render()-渲染
    return (
      <div>
        <h3>{message}</h3>
        <button onClick={ e => this.changeMessage()}>修改</button>
      </div>
    )
  }
  // 3. 生命周期-组件渲染到DOM-被挂载到DOM
  componentDidMount() {
    console.log('componentDidMount')
  }
  // 4.生命周期-组件数据被更新-更新
  componentDidUpdate() {
    console.log('componentDidUpdate')
  }
  // 5.生命周期-组件从DOM被卸载-移除
  componentWillUnmount() {
    console.log('componentWillUnmount')
  }
}
export default HelloWorld