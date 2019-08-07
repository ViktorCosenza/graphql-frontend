import React from 'react'
import Navbar from './Navbar'

function Home (props) {
  return (
    <Navbar history={props.history} loggedIn={props.loggedIn} />
  )
}
export default Home
