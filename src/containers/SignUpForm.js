import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Form, Card, Alert } from 'react-bootstrap'

function SignUpForm (props) {
  return (
    <Card style={{ background: 'inherit', border: 'none', textAlign: 'center' }}>
      <Card.Body>
        <Link to='/' style={{ textDecoration: 'none' }}>
          <Card.Title style={{ color: 'white', fontWeight: 'bold', fontSize: 'xx-large', fontStyle: 'italic' }}>
            Loremm!
          </Card.Title>
        </Link>
        <Card.Text style={{ color: 'white', fontWeight: 'bold', fontSize: 'medium' }}>lorem</Card.Text>
        {props.error
          ? <Alert variant='warning'> Oops! Email ou senha incorreto </Alert>
          : <> </>}
        <Form onChange={props.handleChange} onSubmit={props.handleSubmit} style={{ color: 'white' }}>
          <Form.Group controlId='name'>
            <Form.Control name='name' type='text' placeholder='Name' />
          </Form.Group>

          <Form.Group controlId='email'>
            <Form.Control name='email' type='email' placeholder='Email' />
          </Form.Group>
          <Form.Group label='password' controlId='password'>
            <Form.Control name='password' type='password' placeholder='Password' />
          </Form.Group>

          <Form.Group label='password-confirm' controlId='password-confirm'>
            <Form.Control name='passwordConfirm' type='password' placeholder='Confirm Password' />
          </Form.Group>
          { props.confirmIsEqual
            ? <Button variant='primary' type='submit'>
                Signup!
            </Button>
            : <Button disabled variant='danger'>Passwords must match!</Button>
          }
        </Form>
      </Card.Body>
    </Card>
  )
}

export default SignUpForm
