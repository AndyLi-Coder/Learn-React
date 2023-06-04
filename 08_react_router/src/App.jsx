import React from 'react'
import { Link , Navigate, Route, Routes,useNavigate, useRoutes } from 'react-router-dom'
/* import Home from './pages/Home'
import About from './pages/About'
import Login from './pages/Login'
import NotFound from './pages/NotFound'
import HomeRecommend from './pages/HomeRecommend'
import HomeRanking from './pages/HomeRanking'
import Category from './pages/Category'
import Order from './pages/Order'
import HomeSongMenu from './pages/HomeSongMenu'
import Detail from './pages/Detail'
import User from './pages/User' */
import routes from './router'


export function App(props) {

  const navigate = useNavigate()

  function navigateTo(path) {
    navigate(path)
  }
  return (
    <div>
      <div className='header'>
        <h1>header</h1>
        <div className="nav">
          <Link to='/home'>首页</Link>
          <Link to='/about'>关于</Link>
          <Link to='/login'>登录</Link>
          <Link to='/user?name=why&age=18'>用户</Link>
          <button onClick={e => navigateTo('/category')}>分类</button>
          <button onClick={e => navigateTo('/order')}>订单</button>
        </div>
        <hr />
      </div>
      <div className='content'>
        {/* <Routes>
          <Route path='/' element={<Navigate to='/home'></Navigate>}></Route>
          <Route path='/home' element={<Home />}>
            <Route path='/home' element={<Navigate to='/home/recommend'></Navigate>}></Route>
            <Route path='/home/recommend' element={ <HomeRecommend/> }></Route>
            <Route path='/home/ranking' element={<HomeRanking />}></Route>
            <Route path='/home/song' element={<HomeSongMenu />} />            
          </Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/category' element={<Category />}></Route>
          <Route path='/order' element={<Order />}></Route>
          <Route path='/detail/:id' element={<Detail />} />
          <Route path='/user' element={ <User/> } />
          <Route path='*' element={ <NotFound/> }></Route>
        </Routes> */}
        {
          useRoutes(routes)
        }
      </div>
      <div className="footer">
        <h1>footer</h1>
        <hr />
      </div>
    </div>
  ) 
}

export default App