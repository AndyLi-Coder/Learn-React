const store = require('./store/index')

// 订阅store中的数据
const subscribe = store.subscribe(() => {
  console.log('订阅store中的数据是', store.getState())
})

// 修改store中的数据
store.dispatch({ type: 'change_name', name: 'kobe' })
store.dispatch({ type: 'add_number', num: 10 })



subscribe()