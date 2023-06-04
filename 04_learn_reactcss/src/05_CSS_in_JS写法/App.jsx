import React, { PureComponent } from 'react'
import { AppWrapper,SectionWrapper } from './style'

export class App extends PureComponent {
  constructor() {
    super()
    this.state = {
      color: 'skyblue',
      size: '32px'
    }
  }
  render() {
    const { size } = this.state
    return (
      <AppWrapper>
        <SectionWrapper  size={size}>
          <h2 className='title'>我是标题</h2>
          <p className='content'>我是内容，哈哈哈</p>
          <button onClick={e => this.setState({size:'16px'})}>修改字体大小</button>
        </SectionWrapper>
        <div className='footer'>
          <p>免责声明</p>
          <p>版权声明</p>
        </div>
      </AppWrapper>
    )
  }
}

export default App