
import React, { memo,useState,useEffect } from 'react'

const App = memo(() => {
  const [counter, setCounter] = useState(100)
  useEffect(() => {
    // 当前回调函数会在组件渲染完成以后执行
    // 网络请求、DOM处理、事件监听
    document.title = counter
  })
  return (
    <div>
      <h2>当前计数:{counter}</h2>
      <button onClick={e => setCounter(counter + 1)}>+1</button>
    </div>
  )
})

export default App