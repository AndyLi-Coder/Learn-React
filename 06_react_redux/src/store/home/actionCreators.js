import { CHANGE_BANBERS, CHANGE_RECOMMENDS } from "./constants"
// import * as actionTypes from './constants'
import axios from 'axios'



export const changeBannersAction = (banners) => ({
  type: CHANGE_BANBERS,
  banners
})
export const changeRecommendsAction = (recommends) => ({
  type: CHANGE_RECOMMENDS,
  recommends
})


export const fetchHomeMultidataAction = () => {
  // 如果是一个普通的action，直接返回一个对象
  // 但是对象不能够直接拿到异步请求的网络数据
  // 在index.js中可以通过中间件applyMiddleware（thunk），install redux-thunk
  return (dispatch, getState) => {
    axios.get('http://123.207.32.32:8000/home/multidata').then(res => {
      const banners = res.data.data.banner.list
      const recommends = res.data.data.recommend.list
      console.log('获取到的数据是', banners, recommends)
      /* dispatch({type:actionTypes.CHANGE_BANBERS,banners})
      dispatch({type:actionTypes.CHANGE_RECOMMENDS,recommends}) */
      dispatch(changeBannersAction(banners))
      dispatch(changeRecommendsAction(recommends))
    })
  }
}