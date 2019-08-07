import React, { useState } from 'react'
import GeneralNavbar from '../containers/GeneralNavbar'

function Navbar (props) {
  const [search, setSearch] = useState('')

  const handleChange = event => {
    setSearch(event.target.value)
  }

  const handleSubmit = () => {
    console.log('Searching for ' + search)
    props.history.push('/search')
  }

  return (
    <GeneralNavbar loggedIn={props.loggedIn} handleChange={handleChange} handleSubmit={handleSubmit} />
  )
}
export default Navbar
