import React, { PureComponent,createRef } from 'react'

export class App extends PureComponent {
  constructor() {
    super()
    this.state = {}
    this.titleRef = createRef()
    this.titleEl = null
  }
  // 获取原生DOM的三种方式
  getNativeDom() {
    // 1.给React元素绑定一个ref字符串
    console.log(this.refs.h2, '绑定字符串方式')
    // 2.提前创建好ref，createRef()，将创建出来的ref绑定到元素上 ------- 推荐使用此方式
    console.log(this.titleRef.current, '提前创建ref方式')
    
    // 3.传入一个回调函数，在对应的元素渲染之后，回调函数执行，并且将元素传入
    console.log(this.titleEl,'传入回掉函数的方式')
  
    
  }
  render() {
    return (
      <div>
        <h2 ref="h2">你好啊！React</h2>
        <h2 ref={this.titleRef}>你好啊，Hello World</h2>
        <h2 ref={el => {this.titleEl = el}}>你好啊，师姐</h2>
        <button onClick={() => this.getNativeDom()}>获取DOM</button>
      </div>
    )
  }
}

export default App