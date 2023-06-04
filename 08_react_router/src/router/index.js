import Home from '../pages/Home'
// import About from '../pages/About'
// import Login from '../pages/Login'
import NotFound from '../pages/NotFound'
import HomeRecommend from '../pages/HomeRecommend'
import HomeRanking from '../pages/HomeRanking'
import Category from '../pages/Category'
import Order from '../pages/Order'
import HomeSongMenu from '../pages/HomeSongMenu'
import Detail from '../pages/Detail'
import User from '../pages/User'
import { Navigate } from 'react-router-dom'
import React from 'react'

// 使用路由的懒加载，可以在打包的时候实现分包处理
// 在index.js 中使用Suspence 进行包裹，fallback中显示还未加载出来时所展示的页面

const About = React.lazy(() => import('../pages/About'))
const Login = React.lazy(() => import('../pages/Login'))

const routes = [
  {
    path: '/',
    element: <Navigate to='/home' />
  },
  {
    path: '/home',
    element: <Home />,
    children: [
      {
        path: '/home',
        element: <Navigate to='/home/recommend' />
      },
      {
        path: '/home/recommend',
        element: <HomeRecommend />
      },
      {
        path: '/home/ranking',
        element: <HomeRanking />
      },
      {
        path: '/home/song',
        element: <HomeSongMenu />
      }
    ]
  },
  {
    path: '/about',
    element: <About />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/category',
    element: <Category />
  },
  {
    path: '/order',
    element: <Order />
  },
  {
    path: 'detail/:id',
    element: <Detail />
  },
  {
    path: '/user',
    element: <User />
  },
  {
    path: '*',
    element: <NotFound />
  }
]

export default routes