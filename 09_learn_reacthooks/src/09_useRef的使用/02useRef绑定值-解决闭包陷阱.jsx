import React, { memo, useCallback, useRef, useState } from 'react'

const App = memo(() => {
  const [count,setCount] = useState(100)
  // 解决闭包陷阱
  const countRef = useRef()
  countRef.current = count

  const increment = useCallback(() => {
    setCount(countRef.current + 1)
  },[])
  return (
    <div>
      <h2>当前计数：{ count }</h2>
      <button onClick={increment}>+1</button>
    </div>
  )
})

export default App