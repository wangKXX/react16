import React, { Component } from 'react'

class RenderProps extends Component{
  constructor(props) {
    super(props)
    this.state = {
      x: 10,
      y: 10
    }
  }
  render() {
    return (
      <div>
        {
          this.props.render(this.state)
        }
      </div>
    )
  }
}

export default RenderProps