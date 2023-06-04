
import React, { PureComponent } from 'react'


export class HelloWorld1 extends PureComponent {
  constructor() {
    super()
    this.state = {
      message:'Hello World'
    }
  }
  changeText() {
    this.setState({message:'你好啊！'})
  }
  render() {
    const { message } = this.state
    return (
      <div>
        <h1>内容1：{message}</h1>
        <button onClick={e => this.changeText()}>修改文本</button>
      </div>
    )
  }
}

function HelloWorld2() {
  let message = 'Hello Wordld'
  return (
    <div>
      <h1>内容2：{message}</h1>
      <button onClick={e => message="你好啊！"}>修改文本</button>
    </div>
  )
}



export class App extends PureComponent {
  render() {
    return (
      <div>
        <HelloWorld1 />
        <HelloWorld2 />
        
      </div>
    )
  }
}

export default App