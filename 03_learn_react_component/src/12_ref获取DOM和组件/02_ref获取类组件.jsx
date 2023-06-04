import React, { PureComponent, createRef } from 'react'


class HelloWorld extends PureComponent {
  test() {
    console.log('++++++++test')
  }
  render() {
    return (
      <div>
        <h2>HelloWorld 组件</h2>
      </div>
    )
  }
}

export class App extends PureComponent {
  constructor() {
    super()
    this.componentRef = createRef()
  }
  getComponent() {
    console.log(this.componentRef.current, '获取到的组件ref是')
    this.componentRef.current.test()
  }
  render() {
    return (
      <div>
        <HelloWorld ref={this.componentRef}/>
        <button onClick={() => this.getComponent()}>获取组件</button>
      </div>
    )
  }
}

export default App