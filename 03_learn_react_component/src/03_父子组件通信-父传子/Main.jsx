import React, { Component } from 'react'
import axios from 'axios'
import MainBanner from './MainBanner'
import MainProduct from './MainProduct'



export class Main extends Component {
  constructor() {
    super()
    this.state = {
      title: "轮播图",
      banners: [],
      product:[]
    }
  }
  
  componentDidMount() {
    axios.get("http://123.207.32.32:8000/home/multidata").then(res => {
      const banners = res.data.data.banner.list
      const products = res.data.data.recommend.list
      this.setState({ banners, products })
    })
  }

  render() {
    const { title, banners, products } = this.state
    return (
      <div>
        <h2>Main组件</h2>
        <MainBanner title={title} banners={banners} />
        <MainProduct products={products} />        
      </div>
    )
  }
} 

export default Main