import React, { PureComponent } from 'react'
import enhancedUserInfo from '../hoc/enhanced_props'

export class About extends PureComponent {
  render() {
    return (
      <div>About组件-{this.props.name} - { this.props.level }</div>
    )
  }
}

// 增强组件about
export default enhancedUserInfo(About)