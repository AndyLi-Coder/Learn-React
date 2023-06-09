import React, { PureComponent } from 'react'
import './style.css'
import { connect } from 'react-redux'
import Home from './pages/Home'
import Profile from './pages/Profile'

export class App extends PureComponent {
  render() {
    const { counter } = this.props
    return (
      <div>
        <h2>App counter:{ counter }</h2>
        <div className='pages'>        
          <Home />
          <Profile />       
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => ({
  counter:state.counter.counter
})

export default connect(mapStateToProps)(App)