import React, { PureComponent } from 'react'

export class Home extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      friends:[]
    }
  }
 /*  shouldComponentUpdate(nextProps, newState) {
    if (this.props.message !== nextProps.message) {
      return true
    }
    return false
  } */
  render() {
    console.log('Home render')
    return (
      <div>
        <h2>Home Component - {  }</h2>
      </div>
    )
  }
}

export default Home