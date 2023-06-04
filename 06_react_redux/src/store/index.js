import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import thunk from 'redux-thunk'

import counterReducer from './counter'
import homeReducer from './home'

// redux-devtool 开启
// 开发环境：window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
// 生产环境：compose
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


// combineReducers 将多个reducer合并到一起
const reducer = combineReducers({
  counter: counterReducer,
  home: homeReducer
})


// combineReducers实现原理
/* function reducer(state = {}, action) {
  // 返回store中state的一个对象
  return {
    counter: counterReducer(state.counter, action), //counetr:{counetr:100}
    home: counterReducer(state.home, action)
  }
} */

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))

export default store