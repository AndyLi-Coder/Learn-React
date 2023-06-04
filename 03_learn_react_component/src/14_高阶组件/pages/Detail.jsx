import React, { PureComponent } from 'react'
import renderTime from '../hoc/render_time'

export class Detail extends PureComponent {
  render() {
    return (
      <div>
        <h2>Detail Page</h2>
        <ul>
          <li> 数据类表1</li>
          <li> 数据类表2</li>
          <li> 数据类表3</li>
          <li> 数据类表4</li>
          <li> 数据类表5</li>
          <li> 数据类表6</li>
          <li> 数据类表7</li>
          <li> 数据类表8</li>
          <li> 数据类表9</li>
          <li> 数据类表10</li>
        </ul>
      </div>
    )
  }
}

export default renderTime(Detail)