import React, { Component } from 'react'
import WithMouse from 'common/withmouse'

class Test extends Component{
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    // TODO
    return (
      <div>
        <div>{this.props.mouse.x}</div>
        <div>{this.props.mouse.y}</div>
      </div>
    )
  }
}

export default WithMouse(Test)