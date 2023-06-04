import React, { memo, useState } from 'react'

import { useUserToken } from './hooks'
 
const Home = memo(() => {
  const [user,token] = useUserToken()
  return <h2>Home Page - {user.name} - { token}</h2>
})
const About = memo(() => {
  const [user,token] = useUserToken()
  return <h2>About Page - {user.name} - { token}</h2>
})

const App = memo(() => {
  const [isShow, setIsShow] = useState(true)
  return (
    <div>
      <h2>App Component</h2>
      <button onClick={e => setIsShow(!isShow)}>切换</button>
      { isShow && <Home/>}
      { isShow && <About/>}
    </div>
  )
})

export default App