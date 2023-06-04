import React, { memo } from 'react'
import './style.css'
import { useLocalStorage } from './hooks'



const App = memo(() => {
  // 设置token
 /*  const [token, setToken] = useState(localStorage.getItem('token'))
  useEffect(() => {
    localStorage.setItem('token',token)
  },[token]) */
  const [token,setToken] = useLocalStorage('curry')
  function handleToken() {
    setToken('curry')
  }

  // 设置头像
 /*  const [avatar, setAvatar] = useState(localStorage.getItem('avatar'))
  useEffect(() => { 
    localStorage.setItem('avatar',avatar)
  }, [avatar]) */
  const [avatar,setAvatar] = useLocalStorage('http://www.baidu.com')
  function handleAvatar() {
    setAvatar('http://www.baidu.com')
  }
  return (
    <div className='app'>
      <h2>token-{ token }</h2>
      <button onClick={handleToken}>设置token</button>
      <hr />
      <h2>avatar-{avatar}</h2>
      <button onClick={handleAvatar}>设置头像</button>
    </div>
  )
})

export default App