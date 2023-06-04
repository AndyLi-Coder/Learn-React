import React, { memo, useState } from 'react'
import { useScrollPosition } from './hooks'
import './style.css'

const Home = memo(() => {
  const [scrollX,scrollY] = useScrollPosition()
  return <h2>Home Page - {scrollX} - { scrollY }</h2>
})
const About = memo(() => {
  const [scrollX,scrollY] = useScrollPosition()
  return <h2>About Page - {scrollX} - { scrollY } </h2>
})

const App = memo(() => {
  const [isShow, setIsShow] = useState(true)
  return (
    <div className='app'>
      <h2>App Component</h2>
      <button onClick={e => setIsShow(!isShow)}>切换</button>
      { isShow && <Home/>}
      { isShow && <About/>}
    </div>
  )
})

export default App