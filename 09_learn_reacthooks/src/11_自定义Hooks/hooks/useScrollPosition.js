import { useEffect, useState } from 'react'

function useScrollPosition() {
  let [scrollX, setScrollX] = useState(0)
  let [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    function handleScrollPosition() {
      setScrollX(window.scrollX)
      setScrollY(window.scrollY)
    }
    // 监听页面滚动位置
    window.addEventListener('scroll', handleScrollPosition)
    // 取消监听
    return () => {
      window.removeEventListener('scroll', handleScrollPosition)
    }
  }, [])

  return [scrollX, scrollY]
}
export default useScrollPosition