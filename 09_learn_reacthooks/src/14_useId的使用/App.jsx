import React, { memo, useId, useState } from 'react'

const App = memo(() => {
  const [count, setCount] = useState(100)

  // useId()可以保证每次生成的id都是唯一的
  // 无论是客户端渲染还是服务端渲染，生成的id都是相同的，从而来实现同构应用
  const id = useId()
  console.log(id)
  return (
    <div>
      <button onClick={e => setCount(count + 1)}>count+1{count}</button>
      <label htmlFor={id}>
        姓名 <input type="text" id={ id } />
      </label>
    </div>
  )
})

export default App