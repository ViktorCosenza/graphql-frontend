import React from 'react'
import LinkList from './LinkList'
import Navbar from './Navbar'
import { loader } from 'graphql.macro'
import { Query } from 'react-apollo'

const FEED_QUERY = loader('../services/queries/FEED_QUERY.gql')

function Mural (props) {
  return (
    <div className='mural'>
      <Navbar history={props.history} />
      <Query query={FEED_QUERY}>
        {({ loading, error, data }) =>
          <LinkList loading={loading} error={error} links={data.feed ? data.feed.links : []} />
        }
      </Query>
    </div>
  )
}

export default Mural
