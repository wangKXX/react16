import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import CommonHeader from 'common/common-header'
import './index.scss'

class courwarePreview extends Component{
  constructor(props) {
    super(props)
    this.state = {
      courware: {
        title: '音视频.ppt'
      }
    }
    console.log(this.props.match.params.id)
  }
  render() {
    return (
      <div className="preview-wrap">
        <div className="grid-item"><CommonHeader title={this.state.courware.title}/></div>
        <div className="grid-item">1</div>
        <div className="grid-item">2</div>
      </div>
    )
  }
}

export default withRouter(courwarePreview)