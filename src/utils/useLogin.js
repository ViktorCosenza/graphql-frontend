import { useState } from 'react'
import { login as Login, logout as Logout } from '../services/auth'

function useLogin (initialLoggedIn) {
  const [loggedIn, setLoggedIn] = useState(initialLoggedIn)

  const login = (auth) => {
    Login()
    setLoggedIn(true)
  }

  const logout = () => {
    Logout()
    setLoggedIn(false)
  }
  return [loggedIn, login, logout]
}

export default useLogin
