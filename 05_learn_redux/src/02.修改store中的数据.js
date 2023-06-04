const store = require('./store/index')

// 修改store中的数据
const nameAction = { type: 'change_name', name: 'kobe' }
store.dispatch(nameAction)
console.log('修改之后的name', store.getState())


const counterAction = { type: 'add_number', num: 10 }
store.dispatch(counterAction)
console.log('修改之后的counter', store.getState())