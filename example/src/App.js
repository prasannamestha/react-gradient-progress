import React from 'react'

import {CircleProgress} from 'react-gradient-progress'

export default class App extends React.Component {
  render () {
    return (
      <div>
        <CircleProgress percentage={50} />
      </div>
    )
  }
}
