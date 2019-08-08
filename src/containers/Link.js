import React from 'react'
import { Card, Button } from 'react-bootstrap'

function Link (props) {
  return (
    <Card style={{ margin: '1rem 5rem', background: 'white' }}>
      <Card.Body>
        <Card.Title>{props.description}</Card.Title>
        <Card.Text>{props.url}</Card.Text>
        <Button variant='light'>Read All</Button>
      </Card.Body>
    </Card>
  )
}

export default Link
