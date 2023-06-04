import { ADD_NUMBER, SUB_NUMBER } from './constants'
import * as actioType from './constants'

const initialState = {
  counter: 100,
  banners: [],
  recommends: []
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_NUMBER:
      return { ...state, counter: state.counter + action.num }
    case SUB_NUMBER:
      return { ...state, counter: state.counter - action.num }
    case actioType.CHANGE_BANBERS:
      return { ...state, banners: action.banners }
    case actioType.CHANGE_RECOMMENDS:
      return { ...state, recommends: action.recommends }
    default:
      return state
  }
}
export default reducer