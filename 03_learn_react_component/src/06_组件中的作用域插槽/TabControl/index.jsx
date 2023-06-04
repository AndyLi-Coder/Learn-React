import React, { Component } from 'react'
import PropTypes from 'prop-types'
import "./style.css"

export class index extends Component {
  constructor() {
    super()
    this.state = {
      activeIndex: 0,
    }
  }
  changeIdnex(item,index) {
    this.setState({
      activeIndex: index,
    })
    this.props.changeText(item)
  }
  render() {
    const { titles,tabType } = this.props
    const { activeIndex } = this.state
    return (
      <div className='tab-control'>
        {
          titles.map((item,index) => {
            return (
              <div
                className={`item ${activeIndex === index ? 'active' : ''}`}
                key={item}
                onClick={() => this.changeIdnex(item,index)}
              >
                {/* <span className='text'>{ item }</span> */}
                { tabType(item) }
              </div>
            )
          })
        }
      </div>
    )
  }
}


index.propTypes = {
  changeText:PropTypes.func
}

export default index