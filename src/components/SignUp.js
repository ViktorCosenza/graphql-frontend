import React, { useState, useEffect, useContext } from 'react'
import SignUpForm from '../containers/SignUpForm'
import { Mutation } from 'react-apollo'
import { loader } from 'graphql.macro'

import Loading from '../containers/Loading'

import LoggedInContext from '../utils/LoggedInContext'

import './SignUp.css'

const SIGNUP_MUTATION = loader('../services/mutations/SIGNUP_MUTATION.gql')

function SignUp (props) {
  const [, login] = useContext(LoggedInContext)
  const [confirmIsEqual, setConfirmIsEqual] = useState(true)
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    passwordConfirm: ''
  })

  useEffect(() => {
    if (form.password === form.passwordConfirm) { setConfirmIsEqual(true) } else setConfirmIsEqual(false)
  }, [form.password, form.passwordConfirm])

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = (e, signUpMutation) => {
    e.preventDefault()
    if (!confirmIsEqual) { return alert('Passwords must match') }
    signUpMutation()
      .then(status => {
        login(status.data.signup.token)
        props.history.push('/')
      })
      .catch(err => console.log(err))
  }

  return (
    <div className='signup'>
      <Mutation
        mutation={SIGNUP_MUTATION}
        variables={{
          name: form.name,
          email: form.email,
          password: form.password
        }}>
        { (signUpMutation, { loading }) =>
          loading ? <Loading />
            : <SignUpForm
              handleChange={handleChange}
              handleSubmit={(e) => handleSubmit(e, signUpMutation)}
              confirmIsEqual={confirmIsEqual}
            />
        }
      </Mutation>
    </div>
  )
}

export default SignUp
