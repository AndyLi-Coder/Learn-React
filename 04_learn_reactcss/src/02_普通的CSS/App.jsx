import React, { PureComponent } from 'react'
import './App.css'

export class App extends PureComponent {
  render() {
    return (
      <div>
        <h2 className='title'>我是标题</h2>
        <h2 className='content'>我是内容，哈哈哈</h2>
      </div>
    )
  }
}

export default App