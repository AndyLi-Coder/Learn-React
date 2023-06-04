import React, { memo, useCallback, useMemo, useState } from 'react'

function calcNumTotal(num) {
  console.log("calcNumTotal 被调用")
  let total = 0
  for (let i = 1; i <= num; i++) {
    total += i
  }
  return total
}

const HelloWorld = memo(() => {
  console.log('子组件被渲染')
  return (
    <div>
      <h2>Hello World</h2>
    </div>
  )
})

const App = memo(() => {
  const [count, setCount] = useState(1)

  // 1.普通函数计算total
  // calcNumTotal 被调用多次
  // const result = calcNumTotal(10)

  // 2.不依赖任何值，进行计算
  // calcNumTotal 被调用1次
  /* const result = useMemo(() => {
    return calcNumTotal(50)
  },[]) */

  // 3.依赖count进行计算
  // calcNumTotal 只有当count改变的时候才会调用
  const result = useMemo(() => {
    return calcNumTotal(count * 2)
  }, [count])
  
  // useCallback和useMemo的对比
  /* fn(){ }
  const result = useCallback(fn, [])
  const result = useMemo(() => fn,[]) */

  


  // 4.使用useMemo对子组件进行优化
  // 普通对象子组件会重复渲染
  // const info = {name:'why',age:18}


  // 使用useMemo
  // 子组件不会被重复渲染
  const info = useMemo(() => ( {name:'why',age:18  }),[])
  return (
    <div>
      <h2>计算总和:{ result }</h2>
      <h2>当前计数:{ count }</h2>
      <button onClick={e => setCount(count + 1)}>+1</button>
      

      <HelloWorld info={ info } />
    </div>
  )
})

export default App