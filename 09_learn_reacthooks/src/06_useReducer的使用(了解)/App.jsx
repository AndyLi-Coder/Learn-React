import React, { memo, useReducer } from 'react'
// 1.使用useState
/*import React, { memo, useState } from 'react'
const App = memo(() => {
  const [count,setCount] = useState(0)
  return (
    <div>
      <h2>当前计数：{count}</h2>
      <button onClick={e => setCount(count + 1)}>+1</button>
      <button onClick={e => setCount(count - 1)}>-1</button>
      <button onClick={e => setCount(count + 5)}>+5</button>
      <button onClick={e => setCount(count - 5)}>-5</button>
      <button onClick={e => setCount(count + 100)}>+100</button>
    </div>
  )
}) */

// 2.useReducer的使用(useState的替代品)

// 页面管理复杂的数据，推荐使用redux，useReducer了解

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { ...state, counter: state.counter + 1 }
    case 'decrement':
      return { ...state, counter: state.counter - 1 }
    case 'add_number':
      return { ...state, counter: state.counter + action.num }
    case 'sub_number':
      return { ...state, counter: state.counter - action.num }
    default:
      return state
  }
}


const App = memo(() => {
  const [state, dispatch] = useReducer(reducer, { counter: 0, friends: [], user: [] })
  
  return (
    <div>
      <h2>当前计数:{state.counter}</h2>
      <button onClick={e => dispatch({type:'increment'})}>+1</button>
      <button onClick={e => dispatch({ type: 'decrement' })}>-1</button>
      <button onClick={e => dispatch({ type: 'add_number', num: 5 })}>+5</button> 
      <button onClick={e => dispatch({ type: 'sub_number', num: 5 })}>-5</button>  
      <button onClick={e => dispatch({ type: 'add_number', num: 100 })}>+100</button>
      
     
    </div>
  )
})


export default App