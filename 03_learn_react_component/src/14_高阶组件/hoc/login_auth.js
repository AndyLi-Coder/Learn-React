function loginAuth(OriginComponent) {
  return props => {
    const token = localStorage.getItem('token')
    if (token) {
      return <OriginComponent {...props} />
    } else {
      return <h2>请先登录，再进行到跳转到对应的页面</h2>
    }
  }
}

export default loginAuth