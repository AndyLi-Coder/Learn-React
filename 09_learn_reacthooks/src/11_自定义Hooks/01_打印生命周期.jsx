import React, { memo, useEffect, useState } from 'react'

// 自定义hook


function useLogLife(name) {
  useEffect(() => {
    console.log(`${name}组件被创建`)
    return () => {
      console.log(`${name}组件被销毁`)
    }
   },[name])
}
 
const Home = memo(() => {
  useLogLife('home')
  return <h2>Home Page</h2>
})
const About = memo(() => {
  useLogLife('about')
  return <h2>About Page</h2>
})

const App = memo(() => {
  const [isShow, setIsShow] = useState(true)
  useLogLife('App')
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