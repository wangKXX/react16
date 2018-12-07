import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'

@inject('store')
@observer
class CourwarePublic extends Component{
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div>课件商城</div>
    )
  }
}

export default CourwarePublic