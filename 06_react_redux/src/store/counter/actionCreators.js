import { ADD_NUMBER, SUB_NUMBER } from "./constants"
// import * as actionTypes from './constants'

export const addNumberAction = (num) => ({
  type: ADD_NUMBER,
  num
})

export const subNumberAction = (num) => ({
  type: SUB_NUMBER,
  num
})
