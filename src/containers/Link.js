import React from 'react'
import { Jumbotron, Button } from 'react-bootstrap'

function Link (props) {
  const url = props.url
  const description = props.description

  return (
    <Jumbotron style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)', color: 'white' }}>
      <p>{description}</p>
      <p>{url}</p>
      <p>
        <Button variant='outline-light'> Read All</Button>
      </p>
    </Jumbotron>
  )
}

export default Link
