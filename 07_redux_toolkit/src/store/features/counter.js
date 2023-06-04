import { createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
  name: 'counetr',
  initialState: {
    counter: 100
  },
  reducers: {
    addNumber(state, action) {
      const payload = action.payload
      state.counter = state.counter + payload
    },
    // 解构action中的payload
    subNumber(state, { payload }) {
      state.counter = state.counter - payload
    }
  }

})
export const { addNumber, subNumber } = counterSlice.actions
export default counterSlice.reducer