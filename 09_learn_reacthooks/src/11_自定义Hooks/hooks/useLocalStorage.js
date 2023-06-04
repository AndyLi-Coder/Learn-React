import { useEffect, useState } from "react";

function useLocalStorage(key) {
  // 1.获取localStorage中存储的数据，并创建组件的state
  // const [data, setData] = useState(localStorage.getItem(key))
  const [data, setData] = useState(() => {
    const item = localStorage.getItem(key)
    if (!item) return ''
    return JSON.parse(item)
  })


  // 2.监听data改变，设置localStorage中的数据
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(data))
  }, [data, key])

  return [data, setData]
}
export default useLocalStorage