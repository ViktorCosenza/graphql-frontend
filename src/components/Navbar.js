import React, { useState, useContext } from 'react'
import GeneralNavbar from '../containers/GeneralNavbar'

import LoggedInContext from '../utils/LoggedInContext'

function Navbar (props) {
  const [search, setSearch] = useState('')
  const [isLoggedIn,, logout] = useContext(LoggedInContext)

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
    alert('Se yaa :)')
  }

  return (
    <GeneralNavbar
      loggedIn={isLoggedIn}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      handleLogout={handleLogout}
    />
  )
}
export default Navbar
