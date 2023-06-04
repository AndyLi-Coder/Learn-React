import React, { Component } from 'react'

export class Home extends Component {
  render() {
    const { name,age } = this.props
    return (
      <div>
        <h3>Home:{name} - { age }</h3>
      </div>
    )
  }
}

export default Home