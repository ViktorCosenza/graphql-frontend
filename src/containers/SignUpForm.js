import React from 'react'
import { Button, Form } from 'react-bootstrap'

function SignUpForm (props) {
  return (
    <Form onChange={props.handleChange} onSubmit={props.handleSubmit} style={{ color: 'white' }}>
      <Form.Group controlId='name'>
        <Form.Label>Name</Form.Label>
        <Form.Control name='name' type='text' placeholder='Name' />
      </Form.Group>

      <Form.Group controlId='email'>
        <Form.Label>Email address</Form.Label>
        <Form.Control name='name' type='email' placeholder='Email' />
        <Form.Text className='text-muted'>
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group label='password' controlId='password'>
        <Form.Label>Password</Form.Label>
        <Form.Control name='password' type='password' placeholder='Password' />
      </Form.Group>
      <Button variant='primary' type='submit'>
        SignUp!
      </Button>
    </Form>
  )
}

export default SignUpForm
