import React, { PureComponent } from 'react'
import enhancedUserInfo from './hoc/enhanced_props'
import About from './pages/About'

const Home = enhancedUserInfo(function (props) {
  return <h2>Home组件：{props.name} - {props.level} - { props.banners }</h2>
})
const Profile = enhancedUserInfo(function (props) {
  return <h2>Profile组件：{props.name} - { props.level }</h2>
})
const Product = enhancedUserInfo(function (props) {
  return <h2>Profile组件：{props.name} - { props.level }</h2>
})

export class App extends PureComponent {
  render() {
    return (
      <div>
        <Home banners={['1','2','3']} />
        <Profile />
        <Product />
        <About/>
      </div>
    )
  }
}

export default App