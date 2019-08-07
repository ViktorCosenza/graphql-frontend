import React from 'react'
import { Spinner } from 'react-bootstrap'

function Loading (props) {
  return (
    <Spinner
      animation='border'
      variant='light'
      style={{
        position: 'fixed',
        top: '50%',
        left: '50%',
        marginTop: '-32px',
        marginLeft: '-32px'
      }} />
  )
}

export default Loading
