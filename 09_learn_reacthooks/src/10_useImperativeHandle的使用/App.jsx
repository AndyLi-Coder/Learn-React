import React, { forwardRef, memo, useImperativeHandle, useRef } from 'react'


const HelloWorld = memo(forwardRef((props, ref) => {
  const inputRef = useRef()
  // useImperativeHandle
  // 是子组件对来自父组件的ref进行处理
  useImperativeHandle(ref, () => {
    return {
      // 只有当子组件暴露方法的时候，父组件才可以调用子组件的方法
      focus() {
        console.log('处理后的focus')
        inputRef.current.focus()
      },
      setValue(value) {
        inputRef.current.value = value
      }
    }
  })
  // return <input type="text" ref={ref}/>
  return <input type="text"  ref={inputRef} />
}))

const App = memo(() => {
  const titleRef = useRef()
  const inputRef = useRef()

  function showDom() {
    // console.log(titleRef.current)
    // console.log(inputRef.current)
    inputRef.current.focus()
    inputRef.current.setValue('111')
  }
  return (
    <div>
      <h2 ref={titleRef}>Hello World</h2>
      <HelloWorld ref={ inputRef } />  
      <button onClick={showDom}>查看</button>
    </div>
  )
})

export default App