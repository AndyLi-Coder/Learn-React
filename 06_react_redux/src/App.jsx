import React, { PureComponent } from 'react'
import store from './store'
import Home from './pages/Home'
import Profile from './pages/Profile'
import './App.css'
import About from './pages/About'
import Category from './pages/Category'

export class App extends PureComponent {
  constructor() {
    super()
    this.state = {
      counter:store.getState().counter.counter
    }
  }
  componentDidMount() {
    store.subscribe(() => {
      const state = store.getState().counter
      this.setState({counter:state.counter})
    })
  }
  render() {
    const { counter } = this.state
    return (
      <div>
        <h2>App counter:{ counter}</h2>
        <div className='app'>
          <Home />
          <Profile />  
          <About />
          <Category />
        </div>
      </div>
    )
  }
}

export default App