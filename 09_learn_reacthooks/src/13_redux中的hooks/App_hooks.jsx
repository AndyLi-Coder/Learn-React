import React, { memo } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { addNumberAction, subNumberAction } from './store/modules/counter'


const App = memo((props) => {
  // 1.使用useSelector将store中的数据映射到组件中
  const { count } = useSelector((state) => ({
    count:state.counter.count
  })) 

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
      <button  onClick={e => handleNumer(6,false)}>-6</button>
    </div>
  )
})



export default App