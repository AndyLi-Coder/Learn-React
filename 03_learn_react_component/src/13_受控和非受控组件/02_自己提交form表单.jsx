import React, { PureComponent } from 'react'

export class App extends PureComponent {

  constructor() {
    super()
    this.state = {
      userName:""
    }
  }
  handleSubmit(event) {
    // 1.阻止浏览器的默认行为-打开新页面
    event.preventDefault()
    // 2.获取所有的表单数据
    console.log('获取表单数据', this.state.userName)
    // 3.以网络请求的方式，将数据传递给服务器

  }
  handleChangeName(event) {
    this.setState({
      userName:event.target.value
    })
  }
  render() {
    const { userName } = this.state
    return (
      <div>
        <form onSubmit={e => this.handleSubmit(e)}>
          <label htmlFor="username">
            <input
              type="text"
              id="username"
              name="username"
              value={userName}
              onChange={e => this.handleChangeName(e)}
            />
          </label> 
          <button className="btn" type="submit">注册</button>
       </form>
      </div>
    )
  }
}

export default App 