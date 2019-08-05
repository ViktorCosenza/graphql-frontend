import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-boost'
import { ApolloClient } from 'apollo-client'
import { setContext } from 'apollo-link-context'

import { getToken } from './auth'

const httpLink = createHttpLink({
  uri: 'http://localhost:4000'
})

const authLink = setContext((_, { headers }) => {
  const token = getToken()
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ''
    }
  }
})

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
})

export default client
