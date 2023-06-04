import React, { PureComponent } from 'react'

export class App extends PureComponent {

  constructor() {
    super()
    this.state = {
      username: "",
      password: ""
    }
  }
  handleSubmit(event) {
    // 1.阻止浏览器的默认行为-打开新页面
    event.preventDefault()
    // 2.获取所有的表单数据
    console.log('获取表单数据', this.state.username,this.state.password)
    // 3.以网络请求的方式，将数据传递给服务器

  }
  handleChangeInput(event) {
    this.setState({
      [event.target.name]:event.target.value
    })
  }
  render() {
    const { username,password } = this.state
    return (
      <div>
        <form onSubmit={e => this.handleSubmit(e)}>
          <label htmlFor="username">
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={e => this.handleChangeInput(e)}
            />
          </label> 
          <label htmlFor="password">
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={e => this.handleChangeInput(e)}
            />
          </label> 
          <button className="btn" type="submit">注册</button>
       </form>
      </div>
    )
  }
}

export default App 