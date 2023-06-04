import { configureStore } from '@reduxjs/toolkit'
import counetrReducer from './features/counter'
import homeReducer from './features/home'

const store = configureStore({
  reducer: {
    counter: counetrReducer,
    home: homeReducer
  }
})

export default store