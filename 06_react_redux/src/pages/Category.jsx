import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { fetchHomeMultidataAction } from '../store/home'


export class Category extends PureComponent {
  componentDidMount() {
   this.props.fetchHomeMultidata()
  }
  render() {
    return (
      <div>Category Page</div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchHomeMultidata:() => dispatch(fetchHomeMultidataAction())
})

export default connect(null,mapDispatchToProps)(Category)