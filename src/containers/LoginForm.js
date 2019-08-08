import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Form, Card, Alert } from 'react-bootstrap'
import Loading from './Loading'

function LoginForm (props) {
  if (props.loading) return <Loading />

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
            <Form.Control name='email' type='text' placeholder='Email' />
          </Form.Group>

          <Form.Group label='password' controlId='password'>
            <Form.Control name='password' type='password' placeholder='Password' />
          </Form.Group>

          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Button variant='primary' type='submit'>Login</Button>
            <Link to='/signup'><Button>Cadastre-se</Button></Link>
          </div>
        </Form>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginTop: '15px' }}>
          <Link to='/recuperacao'>
            Esqueci minha senha
          </Link>
        </div>
      </Card.Body>
    </Card>
  )
}

export default LoginForm
