import React, { PureComponent } from 'react'
import Cart from './pages/Cart'



export class App extends PureComponent {

  loginApp() {
    localStorage.setItem('token', 'abcde')
    this.forceUpdate()
  }

  render() {
    return (
      <div>
        <h1>app</h1>
        <Cart />
        <button onClick={e => this.loginApp()}>登录</button>
      </div>
    )
  }
}

export default App