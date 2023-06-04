import React, { PureComponent } from 'react'

export class App extends PureComponent {

  constructor() {
    super()
    this.state = {
      userName:"codewhy"
    }
  }
  changeInput(e) {
    console.log(e.target.value, '输入的值');
    this.setState({userName:e.target.value})
  }
  render() {
    const { userName } = this.state
    return (
      <div>
        
        {/* 受控组件 */}
        <input type="text" value={userName} onChange={e => this.changeInput(e)} />
        
        {/* 非受控组件 */}
        <input type="text" />
      </div>
    )
  }
}

export default App 