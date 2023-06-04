// import { StrictMode } from 'react'
import React, { PureComponent,StrictMode } from 'react'
import Home from './pages/Home'
import Profile from './pages/Profile'

export class App extends PureComponent {
  render() {
    return (
      /**
       * 严格模式下的检测
       * 1.识别不安全的生命周期
       * 2.使用过时的ref
       * 3.检查意外的副作用（组件的constructor会被调用来那个此女，严格模式下的故意操作，以此来检查是否有副作用，生产环境中是不会被调用的）
       * 4.使用废弃的findDOMNode
       * 5.检测过时的context API
       * 
       * 
       */
      <div>
        <StrictMode>
          <Home/>
        </StrictMode>
        <Profile/>
      </div>
    )
  }
}

export default App