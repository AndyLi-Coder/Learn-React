import React, { memo, useCallback, useRef, useState } from 'react'


const Home = memo((props) => {
  const { increment } = props
  console.log("Home组件被渲染")
  return (
    <div>
      <h3>Home Component</h3>
      <button onClick={increment}>子组件+1</button>
    </div>
  )
})
const App = memo(() => {
  const [count, setCount] = useState(100)
  const [message, setMessage] = useState('hello')
  
  // useCallback
  // 性能优化1
  // 1.当需要将一个函数传递给子组件的时候，最好使用useCallback进行优化，将优化之后的函数，再传递给子组件
  // 缺点：闭包陷阱，每次count改变的时候，子组件都会渲染
  /* const increment = useCallback(function () {
    setCount(count + 1)
  }, [count]) */

  // 性能优化2
  // 移除第二个参数，缺点：闭包陷阱
  // 使用useRef时，在组件多洗渲染的时候，返回的是同一个值，即count改变的时候，该函数指向的都是同一个，不会发生组件多次渲染
  const countRef = useRef()
  countRef.current = count
  const increment = useCallback(function () {
    setCount(countRef.current + 1)
  },[])

  // 此处，当你修改文本message的时候，Home组件不会被重新渲染，只有当count发生该变的时候，Home才会被重新渲染
  // 如果此处的increment是一个普通函数，当message改变的时候，Home组件是会被重新渲染的
  // const increment = () => setCount(count + 1)

  return (
    <div>
      <h2>当前计数:{ count }</h2>
      <button onClick={increment}>+1</button>
      <Home increment={ increment } />
      <hr />
      <h2>当前内容:{ message }</h2>
      <button onClick={ e => setMessage('你好啊')  }>修改</button>
    </div>
  )
})

export default App