import React from 'react'
import { Button, Form, Card, Spinner } from 'react-bootstrap'

function LoginForm (props) {
  if (props.loading) {
    return (
      <Spinner animation='grow' variant='light' />
    )
  }

  return (
    <Card style={{ background: 'inherit', border: 'none', textAlign: 'center' }}>
      <Card.Body>
        <Card.Title style={{ color: 'white', fontWeight: 'bold', fontSize: 'xx-large' }}>Loremm</Card.Title>
        <Card.Text style={{ color: 'white', fontWeight: 'bold', fontSize: 'large' }}>lorem</Card.Text>
        <Form onChange={props.handleChange} onSubmit={props.handleSubmit} style={{ color: 'white' }}>
          <Form.Group controlId='name'>
            <Form.Control name='email' type='text' placeholder='Email' />
          </Form.Group>

          <Form.Group label='password' controlId='password'>
            <Form.Control name='password' type='password' placeholder='Password' />
          </Form.Group>
          <Button variant='primary' type='submit' style={{ width: '100%' }}>
          Login
          </Button>
        </Form>
      </Card.Body>
    </Card>
  )
}

export default LoginForm
