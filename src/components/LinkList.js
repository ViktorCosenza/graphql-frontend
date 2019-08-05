import React from 'react'
import { Query } from 'react-apollo'
import Link from '../containers/Link'
import { Spinner, Alert } from 'react-bootstrap'
import { loader } from 'graphql.macro'

const FEED_QUERY = loader('../services/queries/FEED_QUERY.gql')

function LinkList () {
  return (
    <Query query={FEED_QUERY}>
      {({ loading, error, data }) => {
        if (loading) {
          return (
            <Spinner
              animation='grow'
              variant='light'
              style={{ margin: 'auto', display: 'float' }} />
          )
        }
        if (error) return <Alert variant='danger'> {console.log(error)} </Alert>

        const links = data.feed.links.map((link, index) =>
          <Link
            key={link.id}
            link_id={link.id}
            url={link.url}
            description={link.description} />
        )

        if (links.length === 0) return <Alert variant='info' style={{ height: '10%' }}>No Links</Alert>

        return <div>{links}</div>
      }}
    </Query>
  )
}

export default LinkList
