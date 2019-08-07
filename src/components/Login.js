import React, { useState } from 'react'
import { Mutation } from 'react-apollo'
import { login } from '../services/auth'
import { loader } from 'graphql.macro'
import LoginForm from '../containers/LoginForm'

import './Login.css'
const LOGIN_MUTATION = loader('../services/mutations/LOGIN_MUTATION.gql')

function Login (props) {
  const [form, setForm] = useState({
    email: '',
    password: ''
  })

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = (e, loginMutation) => {
    e.preventDefault()
    loginMutation()
      .then(status => {
        login(props.setLoggedIn, status.data.login.token)
        props.history.push('/')
      })
      .catch(err => console.log(err))
  }

  return (
    <div className='login'>
      <Mutation
        mutation={LOGIN_MUTATION}
        variables={{
          email: form.email,
          password: form.password
        }}>
        { (loginMutation, { loading, error }) =>
          <LoginForm
            handleChange={handleChange}
            handleSubmit={(e) => handleSubmit(e, loginMutation)}
            loading={loading}
            error={error} />
        }
      </Mutation>
    </div>
  )
}

export default Login
