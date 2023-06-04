import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchHomeMultidata = createAsyncThunk('fetch/homemultidata', async (extraParams, store) => {
  // extraParams 页面dispatch时传递的额外参数，比如请求参数
  // store =  { dispatch,getState }
  const res = await axios.get('http://123.207.32.32:8000/home/multidata')
  /* const banners = res.data.data.banner.list
  const recommends = res.data.data.recommend.list
  store.dispatch(changeBanners(banners))
  store.dispatch(changeRecommends(recommends)) */
  return res.data.data
})

const homeSlice = createSlice({
  name: 'home',
  initialState: {
    banners: [],
    recommends: []
  },
  // 同步数据处理
  reducers: {
    changeBanners(state, { payload }) {
      state.banners = payload
    },
    changeRecommends(state, { payload }) {
      state.recommends = payload
    }
  },
  // 异步请求数据
  extraReducers: {
    [fetchHomeMultidata.pending]() {
      console.log('数据请求开始-pendding')
    },
    [fetchHomeMultidata.fulfilled](state, { payload }) {
      console.log('数据请求返回-fulfilled')
      state.banners = payload.banner.list
      state.recommends = payload.recommend.list
    },
    [fetchHomeMultidata.rejected]() {
      console.log('数据请求失败-rejected')
    }
  },
  // extraReducers 的另一种写法
  /* extraReducers: (builder) => {
    builder.addCase(fetchHomeMultidata.pending, (state, { payload }) => {
      console.log('pending')
    }).addCase(fetchHomeMultidata.fulfilled, (state, { payload }) => {
      console.log('fulfilled')
      state.baners = payload.banner.list
      state.recommends = payload.recommend.list
    }).addCase(fetchHomeMultidata.rejected, (state, { payload }) => {
      console.log('rejected')
    })
  } */
})


export const { changeBanners, changeRecommends } = homeSlice.actions
export default homeSlice.reducer