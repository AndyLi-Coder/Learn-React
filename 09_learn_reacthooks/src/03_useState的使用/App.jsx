import React, { memo,useState } from 'react'

const App = memo(() => {
  const [message,setMessage] = useState('Hello World')

  function changeMessage() {
    setMessage('你好啊，李银河！')
  }
  return (
    <div>
      <h2>App Component</h2>
      <h3>文本内容是：{message}</h3>
      <button onClick={changeMessage}>修改文本</button>
    </div>
  )
})

export default App