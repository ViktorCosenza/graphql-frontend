import React from 'react'
import { Query } from 'react-apollo'
import Link from '../containers/Link'
import { Spinner, Alert } from 'react-bootstrap'

import { FeedQuery } from '../services/queries/Queries.gql'

function LinkList () {
  return (
    <Query query={FeedQuery}>
      {({ loading, error, data }) => {
        if (loading) {
          return (
            <Spinner
              animation='grow'
              variant='light'
              style={{ margin: 'auto', display: 'float' }} />
          )
        }
        if (error) return <Alert variant='danger'> Could not fetch posts </Alert>

        const links = data.feed.links.map(link =>
          <Link>
            key={link.id}
            url={link.url}
            description={link.description}
          </Link>
        )

        if (links.length === 0) return <Alert variant='info' style={{height:'10%'}}>No Links</Alert>

        return <div>{links}</div>
      }}
    </Query>
  )
}

export default LinkList
