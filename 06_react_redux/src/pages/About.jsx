import React, { PureComponent } from 'react'
// 使用react-redux获取store中的数据
import { connect } from 'react-redux'
import { addNumberAction,subNumberAction } from '../store/counter'

export class About extends PureComponent {
  calcNumber(num, isAdd) {
    if (isAdd) {
      this.props.addNumber(num)
    } else {
      this.props.subNumber(num)
    }
  }
  render() {
    const { counter,banners,recommends } = this.props
    return (
      <div>
        <h2>About Counter:{counter}</h2>
        <div className='btn'>
          <button onClick={e => this.calcNumber(6,true)}>+6</button>
          <button onClick={e => this.calcNumber(88,true)}>+88</button>
          <button onClick={e => this.calcNumber(6,false)}>-6</button>
          <button onClick={e => this.calcNumber(6,false)}>-88</button>
        </div>
        <div className='banners'>
          <h2>轮播图数据：</h2>
          <ul>
            {
              banners.map((item, index) => {
                return <li key={index}>{ item.title }</li>
             })
            }
          </ul>
        </div>
        <div className='recommends'>
          <h2>推荐商品数据：</h2>
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


/* function mapStateToProps(state) {
  return {
    counter:state.counter
  }
} */
/* function mapDispatchToProps(dispatch) {
  return {
    addNumber(num) {
      dispatch(addNumberAction(num))
    },
    subNumber(num) {
      dispatch(subNumberAction(num))
    }
  }
} */
const mapDispatchToProps = (dispatch) => ({
  addNumber: (num) => dispatch(addNumberAction(num)),
  subNumber:(num) => dispatch(subNumberAction(num))
})
const mapStateToProps = (state) => ({
  counter: state.counter.counter,
  banners: state.home.banners,
  recommends:state.home.recommends
})
  // connect是一个高阶函数，connect()返回的是一个高阶组件

export default connect(mapStateToProps,mapDispatchToProps)(About)