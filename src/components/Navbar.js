import React, { useState, useContext } from 'react'
import GeneralNavbar from '../containers/GeneralNavbar'

import LoggedInContext from '../utils/LoggedInContext'

function Navbar (props) {
  const [search, setSearch] = useState('')
  const [,, logout] = useContext(LoggedInContext)

  const handleChange = event => {
    setSearch(event.target.value)
  }

  const handleSubmit = () => {
    console.log('Searching for ' + search)
    props.history.push('/search')
  }

  const handleLogout = () => {
    console.log(logout)
    logout()
    alert('Logged Out :)')
  }

  return (
    <GeneralNavbar
      loggedIn={props.loggedIn}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      handleLogout={handleLogout}
    />
  )
}
export default Navbar
