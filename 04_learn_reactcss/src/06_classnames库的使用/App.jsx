import React, { PureComponent } from 'react'
import className from 'classnames'

export class App extends PureComponent {
  constructor() {
    super()
    this.state = {
      showTitle: false,
      showContent: true 
    }
  }
  render() {
    const { showTitle, showContent } = this.state
    const classList = ['content']
    if (showContent) classList.push('abc')
    const classNames = classList.join(' ')
    return (
      <div>
        <h2 className={`${showTitle ? 'title' : ''}`}>我是标题</h2>
        <p className={classNames}>我是内容</p>

        {/* classnames库的使用 */}
        <div className={className('abc',{title:!showTitle})}>classnames库的使用</div>
      </div>
    )
  }
}

export default App