import React, { PureComponent } from 'react'
import { createPortal } from 'react-dom'
import Modal from './Modal'

export class App extends PureComponent {
  render() {
    return (
      <div>
        <div className="app">
          <h1>App H1</h1>
          {
            createPortal(<h2>App h2</h2>,document.querySelector('#why'))
          }
          {/* Modal组件 */}
          <Modal>
            <h1>我是标题</h1>
            <h2>我是内容</h2>
          </Modal>
        </div>
      </div>
    )
  }
}

export default App