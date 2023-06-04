
import React, { memo,useState,useEffect } from 'react'

const App = memo(() => {
  const [counter, setCounter] = useState(100)
  // 负责告知react=> 当页面中的组件渲染完成后，所要执行的副作用代码
  useEffect(() => {
    console.log("修改标题")
    return () => { }
  })
  useEffect(() => {
    console.log("监听redux数据变化")
    return () => {
      // 取消监听redux数据变化
    }
  })
  useEffect(() => {
    console.log("监听event事件")
    return () => {
      // 取消监听event事件
    }
  })
  return (
    <div>
      <h2>当前计数:{counter}</h2>
      <button onClick={e => setCounter(counter + 1)}>+1</button>
    </div>
  )
})

export default App