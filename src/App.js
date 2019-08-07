import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import './App.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'

import Home from './components/Home'
import Login from './components/Login'
import SignUp from './components/SignUp'
import LinkList from './components/LinkList'
import useLogin from './utils/useLogin'

import { isAuthenticated } from './services/auth'

import LoggedInContext from './utils/LoggedInContext'

library.add(fab, faUser)

function App () {
  const [loggedIn, login, logout] = useLogin(!!isAuthenticated())

  return (
    <LoggedInContext.Provider value={[loggedIn, login, logout]}>
      <div className='App'
        style={{
          height: '100vh',
          width: '100vw'
        }}>
        <Switch>
          <Route exact path='/' render={props => <Home {...props} loggedIn={loggedIn} />} />
          <Route exact path='/signup' render={props =>
            loggedIn
              ? <Redirect to='/' />
              : <SignUp {...props} />} />
          <Route exact path='/login' render={props =>
            loggedIn
              ? <Redirect to='/' />
              : <Login {...props} setLoggedIn={login} />
          } />
          <Route exact path='/posts' component={LinkList} />
        </Switch>
      </div>
    </LoggedInContext.Provider>
  )
}

export default App
