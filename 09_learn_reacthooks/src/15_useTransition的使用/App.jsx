import React, { memo, useDeferredValue, useState } from 'react'
import namesArray from './namesArray'

const App = memo(() => {
  const [showNames, setShowNames] = useState(namesArray)
  // useDeferredValue使用
  // 定义一个副本，作用类似于useTransition，起到延迟效果
  const deferredNames = useDeferredValue()

  function handleSearch(event) {
      const keyword = event.target.value
      const filterNames = namesArray.filter(item => item.includes(keyword))
      setShowNames(filterNames)  
  }
  return (
    <div>
      <input type="text" onInput={handleSearch} />
      <h2>用户列表：</h2>
      <ul>
        {
          deferredNames.map((item, index) => {
            return <li key={index}>{ item }</li>
          })
        }
      </ul>
    </div>
  )
})

export default App