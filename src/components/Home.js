import React from 'react'
import Navbar from './Navbar'

import { Card } from 'react-bootstrap'

function Home (props) {
  return (
    <>
      <Navbar history={props.history} loggedIn={props.loggedIn} />
      <h1
        style={{
          textAlign: 'center',
          fontWeight: 'bold',
          fontStyle: 'italic',
          fontSize: '64px',
          margin: '1rem',
          color: 'white' }}>
        Loremm!
      </h1>
      <Sobre />
    </>
  )
}

function Sobre (props) {
  return (
    <Card style={{
      padding: '2rem',
      margin: '1rem',
      border: 'none',
      background: 'inherit',
      color: 'white'
    }}>
      <Card.Title style={{ fontStyle: 'italic', fontWeight: 'bold' }}>Sobre</Card.Title>
      <Card.Text>
        Lore, libp jupilo jue meindesen LoremLorem !
        Bli lio leif gilupsium labis lepi
        Lore, libp jupilo jue meindesen LoremLorem !
        Bli lio leif gilupsium labis lepi
        Lore, libp jupilo jue meindesen LoremLorem !
        Bli lio leif gilupsium labis lepi
      </Card.Text>
    </Card>
  )
}

export default Home
