import React from 'react'

import {CircleProgress} from 'react-gradient-progress'

export default class App extends React.Component {
  render () {
    return (
      <div>
        <CircleProgress percentage={90} />
        <CircleProgress percentage={80} secondaryColor="#f0f0f0"/>
        <CircleProgress percentage={90} strokeWidth={8} primaryColor={["#800080", "#ffc0cb"]} secondaryColor="#f0f0f0" />
      </div>
    )
  }
}
