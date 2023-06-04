import React, { memo,useContext } from 'react'
import {  userContext, themeContext } from './context'

const App = memo(() => {
  // useContext的使用
  // 当外面共享的数据发生变化时，当前组件会重新渲染
  const user = useContext(userContext)
  const theme = useContext(themeContext)

  return (
    <div>
      <h2>user:{user.name} - {user.age}</h2>
      <h2 style={{ color: theme.color,fontSize:theme.size }}>theme</h2>
    </div>
  )
})

export default App