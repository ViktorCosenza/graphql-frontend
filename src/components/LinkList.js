import React from 'react'
import Link from '../containers/Link'
import { Spinner, Alert } from 'react-bootstrap'

function LinkList (props) {
  if (props.loading) return <Spinner animation='grow' variant='light' />
  if (props.error) return <Alert variant='danger'> {console.log(props.error)} </Alert>
  if (props.links.length === 0) return <Alert variant='info' style={{ height: '10%' }}>No Links</Alert>

  const links = props.links.map((link, index) =>
    <Link
      key={link.id}
      link_id={link.id}
      url={link.url}
      description={link.description} />
  )

  return <div>{links}</div>
}

export default LinkList
