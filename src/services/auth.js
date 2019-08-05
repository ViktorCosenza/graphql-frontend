export const APP_SECRET = 'pipipi'
export const TOKEN_KEY = '@graphql-front-auth'
export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY)
export const getToken = () => localStorage.getItem(TOKEN_KEY)

export const login = (setLoggedIn, token) => {
  localStorage.setItem(TOKEN_KEY, token)
  setLoggedIn(true)
}

export const logout = (setLoggedIn) => {
  localStorage.removeItem(TOKEN_KEY)
  setLoggedIn(false)
}
