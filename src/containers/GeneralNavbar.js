import React from 'react'
import { Navbar, Dropdown, Form, FormControl, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function GeneralNavbar (props) {
  return (
    <Navbar expand='lg' bg='light'>
      <Link to='/'>
        <Navbar.Brand style={{ fontStyle: 'italic', fontWeight: 'bold', color: '#6fc1be' }}>
        Lormm!
        </Navbar.Brand>
      </Link>
      <Form inline>
        <FormControl name='search' type='text' placeholder='Do que você precisa?' onChange={props.handleChange} />
        <Button onClick={props.handleSubmit}variant='light' style={{ marginLeft: '1rem' }}>GO!</Button>
      </Form>

      <Link to='/mural'><Button variant='light'>Mural</Button></Link>
      <Link to='/comofunciona'><Button variant='light'>Como funciona?</Button></Link>
      {props.loggedIn
        ? <Dropdown>
          <Dropdown.Toggle variant='light'>
            <FontAwesomeIcon icon='user' />
          </Dropdown.Toggle>

          <Dropdown.Menu alignRight>
            <Dropdown.Item>Perfil</Dropdown.Item>
            <Dropdown.Item>Histórico</Dropdown.Item>
            <Dropdown.Item onClick={props.handleLogout}>Logout</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        : <Link to='/login'><Button>Login</Button></Link>}
    </Navbar>
  )
}

export default GeneralNavbar
