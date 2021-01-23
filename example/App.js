import React from 'react'

import { CircleProgress } from '../src/index'

export default class App extends React.Component {
  render () {
    return (
      <div>
        <CircleProgress percentage={80} strokeWidth={8} secondaryColor="#f0f0f0"/>
        <CircleProgress percentage={60} strokeWidth={8} primaryColor={["#11FFBD", "#AAFFB9"]} secondaryColor="#f0f0f0" />
        <CircleProgress percentage={80} strokeWidth={8} primaryColor={["#2193b0", "#6dd5ed"]} secondaryColor="#f0f0f0" />
        <CircleProgress percentage={75} strokeWidth={8} />
      </div>
    )
  }
}
