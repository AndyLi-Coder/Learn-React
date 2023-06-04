
import React, { memo,useState,useEffect } from 'react'

const App = memo(() => {
  const [counter, setCounter] = useState(100)
  // 负责告知react=> 当页面中的组件渲染完成后，所要执行的副作用代码
  useEffect(() => {
    console.log("修改标题")
    return () => { }

    // useEffect可以传入第二个参数
    // 如果该参数是一个空数组[]，代表不受任何内容改变的影响
    // 如果传入一个具体的变量，则受该变量的影响，即当其改变的时候，才会执行useEffect


    // 当counter发生改变的时候，才会打印 “修改标题”
  }, [counter])
  
  useEffect(() => {
    console.log("监听redux数据变化")
    return () => { }
  }, [])
  
  useEffect(() => {
    console.log("监听event事件")
    return () => {
      console.log('取消监听')
    }
    // 当传入空数组的时候，useEffect中的两个回调函数分别对应的componentDidMount和componentWillUnmount
    // 即return 只有当页面卸载的时候才会执行
  },[])


  return (
    <div>
      <h2>当前计数:{counter}</h2>
      <button onClick={e => setCounter(counter + 1)}>+1</button>
    </div>
  )
})

export default App