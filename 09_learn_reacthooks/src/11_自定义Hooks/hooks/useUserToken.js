import { useContext } from 'react'
import { userContext, tokenContext } from '../context'

function useUserToken() {
  const user = useContext(userContext)
  const token = useContext(tokenContext)
  return [user, token]
}
export default useUserToken