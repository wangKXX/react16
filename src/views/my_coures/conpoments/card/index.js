import React, { Component } from 'react'

class Card extends Component{
  constructor(props) {
    super(props)
    this.state = {
      item: this.props.coures
    }
  }

  render() {
    return (
      <div className="card">
      </div>
    )
  }
}
export default Card