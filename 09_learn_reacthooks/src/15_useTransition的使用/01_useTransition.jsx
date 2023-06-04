import React, { memo, useState, useTransition } from 'react'
import namesArray from './namesArray'

const App = memo(() => {
  const [showNames, setShowNames] = useState(namesArray)
  // useTransition使用
  const [pending,startTransition] = useTransition()
  function handleSearch(event) {
    // 降低回调函数中的代码优先级
    startTransition(() => {
      // 当输入框优先变化以后，在渲染用后列表
      const keyword = event.target.value
      const filterNames = namesArray.filter(item => item.includes(keyword))
      setShowNames(filterNames)
    })
    
  }
  return (
    <div>
      <input type="text" onInput={handleSearch} />
      <h2>用户列表：{ pending && <span>data loading......</span> }</h2>
      <ul>
        {
          showNames.map((item, index) => {
            return <li key={index}>{ item }</li>
          })
        }
      </ul>
    </div>
  )
})

export default App