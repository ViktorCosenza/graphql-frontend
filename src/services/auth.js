import ls from 'local-storage'

export const APP_SECRET = 'pipipi'
export const TOKEN_KEY = '@graphql-front-auth'
export const isAuthenticated = () => ls(TOKEN_KEY)
export const getToken = () => ls(TOKEN_KEY)

export const login = (setLoggedIn, token) => {
  ls(TOKEN_KEY, token)
  setLoggedIn(true)
}

export const logout = (setLoggedIn) => {
  ls(TOKEN_KEY)
  setLoggedIn(false)
}
