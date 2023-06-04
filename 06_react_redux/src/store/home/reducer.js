import * as actioType from './constants'

const initialState = {
  banners: [],
  recommends: []
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case actioType.CHANGE_BANBERS:
      return { ...state, banners: action.banners }
    case actioType.CHANGE_RECOMMENDS:
      return { ...state, recommends: action.recommends }
    default:
      return state
  }
}
export default reducer