import React, { memo } from 'react'
import { useSelector,useDispatch, shallowEqual } from 'react-redux'
import { addNumberAction, subNumberAction } from './store/modules/counter'

const Home = memo((props) => {
  console.log('Home 组件渲染')
  const { message } = useSelector((state) => ({
    message:state.counter.message
  }),shallowEqual)
  return (
    <div>
      <h2>Home 组件 - { message }</h2>
    </div>
  )
})

const App = memo((props) => {
  console.log('App 组件渲染')
  // 1.使用useSelector将store中的数据映射到组件中
  // useSelector包含两个参数
  // 参数一：将store中的数据映射到组件

  // 参数2：shallowEqual ,用来对比当前数据和之前数据，如果数据发生变化，则渲染该组件，没有变化，不用渲染
  const { count } = useSelector((state) => ({
    count:state.counter.count
  }), shallowEqual) 
  // 只有当count发生变化的时候，渲染该App组件

  // 2,使用useDispatch直接派发action
  const dispatch = useDispatch()

 function  handleNumer(num, isFlag = true) {
    if (isFlag) {
      dispatch(addNumberAction(num))
    } else {
     dispatch(subNumberAction(num))
    }
  }
  return (
    <div>
      <h2>当前计数:{count}</h2>
      <button   onClick={e => handleNumer(1)}>+1</button>
      <button  onClick={e => handleNumer(6)}>+6</button>
      <button onClick={e => handleNumer(6, false)}>-6</button>
      
      <hr />
      <Home/>
    </div>
  )
})



export default App