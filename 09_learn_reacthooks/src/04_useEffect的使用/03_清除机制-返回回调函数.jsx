
import React, { memo,useState,useEffect } from 'react'

const App = memo(() => {
  const [counter, setCounter] = useState(100)
  // 负责告知react=> 当页面中的组件渲染完成后，所要执行的副作用代码
  useEffect(() => {

    // 1.开始监听数据
    console.log('监听数据的变化')

    // 2.取消监听：组件重新渲染或者组件卸载的时候执行该回调函数
    // 防止重复监听
    return () => {
      console.log('取消监听数据的变化')
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