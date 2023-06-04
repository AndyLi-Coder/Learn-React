import React, { Component } from 'react'
// 1.定义一个主题上下文
import ThemeContext from './context'
import Home from './Home'
import HomeProduct from './HomeProduct'
import HomeBanner from './HomeBanner'
import UserContext from './context/user-context'

export class App extends Component {
  constructor() {
    super()
    this.state = {
      info: {
        name: 'kobe',
        age:30
      }
    }
  }
  render() {
    const { info } = this.state
    return (
      <div>
        <h2>App</h2>
        {/* <Home name={info.name} age={ info.age } /> */}
        {/* 2.通过ThemeContext中的Provider中的value属性为后代提供数据 */}
        <UserContext.Provider value={{ name: 'kobe', age: 30 }}>
          <ThemeContext.Provider value={{ color: 'red', size: '30px' }} >
            {/* <Home {...info} /> */}
            <HomeProduct /> 
            <HomeBanner/>
          </ThemeContext.Provider>
        </UserContext.Provider>
        {/* 当组件不在context中的时候，可以使用创建context时的默认值 */}
        <Home {...info} />
      </div>
    )
  }
}

export default App