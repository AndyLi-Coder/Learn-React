import React, { PureComponent } from 'react'
// import ThemeContext from '../context/theme-context'
import withTheme from '../hoc/with_theme'

// 1.第一种写法
/* export class Product extends PureComponent {
  render() {
    return (
      <div>
        <h2>Product-{this.context.color} - { this.context.size }</h2>
      </div>
    )
  }
}
Product.contextType = ThemeContext

export default Product

*/


// 2.第二种写法
/* export class Product extends PureComponent {
  render() {
    return (
      <ThemeContext.Consumer>
        {
          value => {
            return <h2>Product:{value.color} - { value.size }</h2>
          }
        }
      </ThemeContext.Consumer>
    )
  }
}
export default Product */



// 3.第三种写法
// 增强组件
export class Product extends PureComponent {
  render() {
    return (
      <div>
        <h2>Product- { this.props.color } - { this.props.size }</h2>
      </div>
    )
  }
}

export default withTheme(Product)