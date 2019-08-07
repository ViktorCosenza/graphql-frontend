import React, { useState } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import './App.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'

import Home from './components/Home'
import Login from './components/Login'
import SignUp from './components/SignUp'
import LinkList from './components/LinkList'

import { isAuthenticated } from './services/auth'

library.add(fab, faUser)

function App () {
  const [loggedIn, setLoggedIn] = useState(!!isAuthenticated())
  return (
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
            : <Login {...props} setLoggedIn={setLoggedIn} />
        } />
        <Route exact path='/posts' component={LinkList} />
      </Switch>
    </div>
  )
}

export default App
