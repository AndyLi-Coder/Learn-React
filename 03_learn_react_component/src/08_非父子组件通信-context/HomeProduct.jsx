import React, { Component } from 'react'
import ThemeContext from './context'
import UserContext from './context/user-context'

export class HomeProduct extends Component {
  render() {
    // 4.获取并使用数据
    return (
      <div>
        <h5>HomeProduct-{this.context.color} - {this.context.size}</h5>
        {/* 使用其他嵌套的context，用Consumer */}
        <UserContext>
          {
            value => {
              return <h6>使用多嵌套的context-{value.name} - { value.age }</h6>
            }
          }
        </UserContext>
      </div>
    )
  }
}


// 3.设置组建中的contextType为某一个context
HomeProduct.contextType = ThemeContext

export default HomeProduct