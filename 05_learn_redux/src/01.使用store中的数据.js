const store = require('./store/index')

const data = store.getState()

console.log('获取store中的数据是', data)