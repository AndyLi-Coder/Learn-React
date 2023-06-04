import React, { PureComponent } from 'react'
import { Link , Navigate, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Login from './pages/Login'
import NotFound from './pages/NotFound'
import HomeRecommend from './pages/HomeRecommend'
import HomeRanking from './pages/HomeRanking'

export class App extends PureComponent {
  render() {
    return (
      <div>
        <div className='header'>
          <h1>header</h1>
          <div className="nav">
            <Link to='/home'>首页</Link>
            <Link to='/about'>关于</Link>
            <Link to='/login'>登录</Link>


            {/* NavLink 可以修改样式，自定义类和样式  */}


            {/* <NavLink to='/home' style={({ isActive }) => ({color:isActive? 'red':''})}>首页</NavLink>
            <NavLink to='/about'  style={({ isActive }) => ({color:isActive? 'red':''})}>关于</NavLink> */}

           {/*  <NavLink to='/home' className={({ isActive }) => isActive?'link-active':''}>首页</NavLink>
            <NavLink to='/about'  className={({ isActive }) => isActive?'link-active':''}>关于</NavLink> */}
          </div>
          <hr />
        </div>
        <div className='content'>
          <Routes>
            <Route path='/' element={<Navigate to='/home'></Navigate>}></Route>
            {/* 路由嵌套 */}
            <Route path='/home' element={<Home />}>
              <Route path='/home' element={<Navigate to='/home/recommend'></Navigate>}></Route>
              <Route path='/home/recommend' element={ <HomeRecommend/> }></Route>
              <Route path='/home/ranking' element={ <HomeRanking/> }></Route>
            </Route>
            <Route path='/about' element={<About />}></Route>
            <Route path='/login' element={<Login />}></Route>
            <Route path='*' element={ <NotFound/> }></Route>
          </Routes>
        </div>
        <div className="footer">
          <h1>footer</h1>
          <hr />
        </div>
      </div>
    )
  }
}

export default App