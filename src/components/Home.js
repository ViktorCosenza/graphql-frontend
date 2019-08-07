import React from 'react'
import Navbar from './Navbar'
import Mural from './Mural'

function Home (props) {
  return (
    <>
      <Navbar history={props.history} loggedIn={props.loggedIn} />
      <Mural />
    </>
  )
}
export default Home
