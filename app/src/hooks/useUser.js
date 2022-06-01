import { useCallback, useContext } from 'react'
import Context from '../context/UserContext'

export const useUser = () => {
  const { user, setUser } = useContext(Context)
  
  const logout = useCallback(() => {
    setUser(null)
  }, [setUser])

  const login = useCallback(() => {
    setUser({
      ...user,
      jwt: 'test'
    })
  }, [setUser])

  return { 
    isLogged: Boolean(user.jwt),
    login
  }
}