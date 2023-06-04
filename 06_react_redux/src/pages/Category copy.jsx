import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { changeBannersAction,changeRecommendsAction } from '../store/home'

import axios from 'axios'

export class Category extends PureComponent {
  componentDidMount() {
    axios.get('http://123.207.32.32:8000/home/multidata').then(res => {
      const banners = res.data.data.banner.list
      const recommends = res.data.data.recommend.list
      console.log('获取到的数据是', banners, recommends)
      this.props.changBanners(banners)
      this.props.changeRecommends(recommends)
    })
  }
  render() {
    return (
      <div>Category Page</div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  changBanners: (banners) => dispatch(changeBannersAction(banners)),
  changeRecommends:(recommends) => dispatch(changeRecommendsAction(recommends))
})

export default connect(null,mapDispatchToProps)(Category)