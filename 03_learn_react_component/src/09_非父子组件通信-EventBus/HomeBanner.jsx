import React, { Component } from 'react'

import eventBus from './utils/event-bus'

export class HomeBanner extends Component {
  prevClick() { 
    eventBus.emit('handlePrev','why',18,1.88)
  }
  nextClick() {
    eventBus.emit('handleNext', {name:'kobe',level:99})
  }
  render() {
    return (
      <div>
        <h3>HomeBanner Component</h3>
        <button onClick={() => this.prevClick()}>上一个</button>
        <button onClick={() => this.nextClick()}>下一个</button>
      </div>
    )
  }
}

export default HomeBanner