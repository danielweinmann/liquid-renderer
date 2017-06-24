import React from 'react'
import Loadable from 'react-loading-overlay'

const Loading = () => (
  <Loadable
    active={true}
    spinner
    style={{height: '100vh'}}
  />
)

export default Loading
