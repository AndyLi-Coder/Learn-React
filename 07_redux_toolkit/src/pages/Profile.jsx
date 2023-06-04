import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { subNumber } from '../store/features/counter'
import { fetchHomeMultidata } from '../store/features/home'

export class Profile extends PureComponent {
  componentDidMount() {
    this.props.fetchHomeMultidata()
  }
  subNumber(num) { 
    this.props.subNumber(num)
  }
  render() {
    const { counter,banners,recommends } = this.props
    return (
      <div>
        <h2>Profile counter:{counter}</h2>
        <button onClick={e => this.subNumber(87)}>-87</button>
        <button onClick={e => this.subNumber(99)}>-99</button>
        <button onClick={e => this.subNumber(6)}>-6</button>
        <div className="banner">
          <h2>轮播图数据</h2>
          <ul>
            {
              banners.map((item, index) => {
                return <li key={index}>{ item.title }</li>
              })
            }
          </ul>
        </div>
        <div className="recommend">
          <h2>推荐的数据</h2>
          <ul>
            {
              recommends.map((item, index) => {
                return <li key={index}>{ item.title }</li>
              })
            }
          </ul>
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => ({
  counter: state.counter.counter,
  banners: state.home.banners,
  recommends:state.home.recommends
})
const mapDispatchToProps = (dispatch) => ({
  subNumber: (num) => dispatch(subNumber(num)),
  fetchHomeMultidata:() => dispatch(fetchHomeMultidata())
})
export default connect(mapStateToProps,mapDispatchToProps)(Profile)