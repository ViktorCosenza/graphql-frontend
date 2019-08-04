import React from 'react'
import './App.css'

import LinkList from './components/LinkList'

function App () {
  return (
    <div className='App'
      style={{
        height: '100vh',
        width: '100vw',
        display: 'flex',
        justifyContent: 'center' }}>
      <LinkList />
    </div>
  )
}

export default App
