import React, { PureComponent } from 'react'

// 定义一个高阶组件
function hoc(Cpn) {
  // 1.定义一个类组件
  class NewCpn extends PureComponent {
    render() {
      return <Cpn name="code"></Cpn>
    }
  }
  return NewCpn
  // 2.定义一个函数组件
  // function NewCpn2() {
  //   return (
  //     <div></div>
  //   )
  // }
  // return NewCpn2
}

class HelloWord extends PureComponent {
  render() {
    return <h1>Hello World</h1>
  }
}

const HelloWorldHOC = hoc(HelloWord)



export class App extends PureComponent {
  render() {
    return (
      <div>
        <HelloWorldHOC />
      </div>
    )
  }
}

export default App