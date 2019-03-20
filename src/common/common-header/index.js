import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { PageHeader } from 'antd'

class CommonHeader extends Component{
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <PageHeader
      onBack={() => this.backHandler()}
      title={this.props.title}
      />
    )
  }
  backHandler() {
    this.props.history.goBack()
  }
}

export default withRouter(CommonHeader)