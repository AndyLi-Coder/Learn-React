import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class AddCount extends Component {
  addCount(count) {
    this.props.addClick(count)
  }
  render() {
    return (
      <div>
        <button onClick={() => this.addCount(1)}>+1</button>
        <button onClick={() => this.addCount(5)}>+5</button>
        <button onClick={() => this.addCount(10)}>+10</button>
      </div>
    )
  }
}
// 可省略
AddCount.propTypes = {
   addClick:PropTypes.func
 }

export default AddCount