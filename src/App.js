import React, { useState } from 'react'
import './App.css'

import LinkList from './components/LinkList'
import SignUp from './components/SignUp'
import Logout from './components/Logout'
import { isAuthenticated } from './services/auth'

import { Button } from 'react-bootstrap'

function App () {
  const [loggedIn, setLoggedIn] = useState(!!isAuthenticated())

  return (
    <div className='App'
      style={{
        height: '100vh',
        width: '100vw',
        display: 'flex',
        justifyContent: 'space-between' }}>
      <LinkList />
      {loggedIn ? <Logout setLoggedIn={setLoggedIn} /> : <SignUp setLoggedIn={setLoggedIn} />}
    </div>
  )
}

export default App
