const { CHANGE_NAME, ADD_NUMBER } = require('./constants')
// 初始化数据
const initialState = {
  name: 'why',
  counter: 10
}

// 定义reducer函数:纯函数
// 接收两个参数
// 参数一：store中当前的state；参数二：dispatch中传入的action

function reducer(state = initialState, action) {
  // 如果state中的数据发生改变，则返回新的state
  switch (action.type) {
    /*  case 'change_name':
       return { ...state, name: action.name }
     case 'add_number':
       return { ...state, counter: state.counter + action.num }
     default:
       // 如果没有改变，则返回之前的state
       return state */
    case CHANGE_NAME:
      return { ...state, name: action.name }
    case ADD_NUMBER:
      return { ...state, counter: state.counter + action.num }
    default:
      return state
  }
}

module.exports = reducer