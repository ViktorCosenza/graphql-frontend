import ls from 'local-storage'

export const APP_SECRET = 'pipipi'
export const TOKEN_KEY = '@graphql-front-auth'
export const isAuthenticated = () => ls(TOKEN_KEY)
export const getToken = () => ls(TOKEN_KEY)

export const login = (token) => {
  ls(TOKEN_KEY, token)
}

export const logout = () => {
  ls.remove(TOKEN_KEY)
}
