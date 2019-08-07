import React, { useState } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import './App.css'

import Home from './components/Home'
import Login from './components/Login'
import SignUp from './components/SignUp'
import LinkList from './components/LinkList'

import { isAuthenticated } from './services/auth'

function App () {
  const [loggedIn, setLoggedIn] = useState(!!isAuthenticated())
  return (
    <div className='App'
      style={{
        height: '100vh',
        width: '100vw',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/signup' component={SignUp} />
        <Route exact path='/login' render={props =>
          !loggedIn
            ? <Login {...props} setLoggedIn={setLoggedIn} />
            : <Redirect to='/' />} />
        <Route exact path='/posts' component={LinkList} />
      </Switch>
    </div>
  )
}

export default App
