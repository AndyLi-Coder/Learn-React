import React, { Component } from 'react'
import PropsType from 'prop-types'

export class MainBanner extends Component {
  // 设置默认值
  static defaultProps = {
    banners: [],
    title:'默认标题'
  }
  constructor(props) {
    super(props)
    this.state = {
      message:'图片'
    }
  }
  render() {
    const { title, banners, message } = this.props
    return (
      <div>
        <h2>{title}-{message}</h2>
        <ul>
          {
            banners && banners.map(item => {
              return (
                <li key={item.acm}>{ item.title}</li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}
MainBanner.propsType = {
  title: PropsType.string,
  banners:PropsType.array,
}
// 设置默认值
/* MainBanner.defaultProps = {
  banners: [],
  title:'轮播图'
} */

export default MainBanner