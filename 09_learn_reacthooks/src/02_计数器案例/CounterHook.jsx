import  { useState } from 'react'


function CounterHook(props) {

  const [counetr, setCounter] = useState(10)
  
  return (
    <div>
      <h2>当前计数：{counetr}</h2>
      <button onClick={e => setCounter(counetr + 1)}>+1</button>
      <button onClick={e => setCounter(counetr - 1)}>-1</button>
    </div>
  )
}

export default CounterHook