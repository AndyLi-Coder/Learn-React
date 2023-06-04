const store = require('./store/index')
const { changeNameAction, addNumberAction } = require('./store/actionCreators')

// 订阅store中的数据
const subscribe = store.subscribe(() => {
  console.log('订阅store中的数据是', store.getState())
})


// 动态生成action
/* const changeNameAction = (name) => ({
  type: 'change_name',
  name
})
const addNumberAction = (num) => ({
  type: 'add_number',
  num
}) */


// 修改store中的数据
/* store.dispatch({ type: 'change_name', name: 'kobe' })
store.dispatch({ type: 'add_number', num: 10 }) */

store.dispatch(changeNameAction('kobe'))
store.dispatch(addNumberAction(10))

subscribe()


/** 
 * reducer代码优化
 * 1.将派发的action生成过程抽取到一个actionCreators中
 * 2.将所有定义的actionCreators的函数，放到一个独立的文件中：actionCeators.js中
 * 3.将actionCreators函数和reducer函数中使用的字符串常量，放到一个独立的文件constants.js中
 * 4.将reducer函数和initialState（默认值）单独放到一个文件：reducer.js
 * */ 