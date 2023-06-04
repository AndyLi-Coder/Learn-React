import { useLocation, useNavigate, useParams, useSearchParams } from 'react-router-dom'


function withRouter(WrapperComponent) {
  return function (props) {
    // 1.导航
    const navigate = useNavigate()
    // 2.动态路由参数   /detail/:id
    const params = useParams()

    // 3.查询字符串的参数 /user?name=why&age=18
    const location = useLocation()
    const [serarchParams] = useSearchParams()
    // 遍历serachParams将其转换成普通的对象
    const query = Object.fromEntries(serarchParams)

    const router = { navigate, params, location, query }

    return <WrapperComponent {...props} router={router}></WrapperComponent>
  }
}
export default withRouter