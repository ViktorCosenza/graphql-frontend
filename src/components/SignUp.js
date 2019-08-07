import React, { useState } from 'react'
import SignUpForm from '../containers/SignUpForm'
import { Mutation } from 'react-apollo'
import { loader } from 'graphql.macro'

import { Spinner } from 'react-bootstrap'

import { login } from '../services/auth'

import './SignUp.css'

const POST_MUTATION = loader('../services/mutations/SIGNUP_MUTATION.gql')

function SignUp (props) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: ''
  })

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = (e, postMutation) => {
    e.preventDefault()
    postMutation()
      .then(status => {
        login(props.setLoggedIn, status.data.signup.token)
      })
      .catch(err => console.log(err))
  }

  return (
    <div className='signup'>
      <Mutation
        mutation={POST_MUTATION}
        variables={{
          name: form.name,
          email: form.email,
          password: form.password
        }}>
        { (postMutation, { loading }) =>
          loading ? <Spinner animation='grow' variant='light' style={{ margin: 'auto', display: 'float' }} />
            : <SignUpForm
              handleChange={handleChange}
              handleSubmit={(e) => handleSubmit(e, postMutation)}
            />
        }
      </Mutation>
    </div>
  )
}

export default SignUp
