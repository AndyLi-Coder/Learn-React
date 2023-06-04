

//ref不能应用于函数组件，
// 可以通过forwardRef高阶函数来获取DOM 


import React, { PureComponent, createRef, forwardRef } from 'react'

const HelloWorld = forwardRef(function (props, ref) {
  return (
    <div>
      <h2 ref={ref}>获取到的组件是</h2>
    </div>
  )
})


export class App extends PureComponent {
  constructor() {
    super()
    this.componentRef = createRef()
  }
  getComponent() {
    console.log(this.componentRef.current, '获取到的组件ref是')
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