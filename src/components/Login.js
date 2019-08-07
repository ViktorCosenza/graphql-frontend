import React, { useState, useContext } from 'react'
import { Mutation } from 'react-apollo'
import { loader } from 'graphql.macro'
import LoginForm from '../containers/LoginForm'
import LoggedInContext from '../utils/LoggedInContext'
import './Login.css'
const LOGIN_MUTATION = loader('../services/mutations/LOGIN_MUTATION.gql')

function Login (props) {
  const [form, setForm] = useState({
    email: '',
    password: ''
  })

  const [, login] = useContext(LoggedInContext)

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
        login()
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
