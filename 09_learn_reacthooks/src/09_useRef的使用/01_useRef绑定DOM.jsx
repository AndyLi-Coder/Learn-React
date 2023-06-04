import React, { memo, useRef } from 'react'

const App = memo(() => {
  const titleRef = useRef()
  const inputRef = useRef()

  function showDom() {
    console.log(titleRef.current)
    inputRef.current.focus()
  }
  return (
    <div>
      <h2 ref={titleRef}>Hello World</h2>
      <input type="text" ref={inputRef} />
      <button onClick={showDom}>查看</button>
    </div>
  )
})

export default App