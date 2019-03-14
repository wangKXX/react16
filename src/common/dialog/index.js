import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import { Icon } from 'antd'
import './index.scss'
@inject('store')
@observer
class dialog extends Component{
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div className="dialog-wrap">
        <div className="common-dialog">
          <div className="dialog-header">
            <span><Icon type="warning" theme="twoTone" />  提示</span>
            <span className="dialog-close" onClick={this.handlerClose}><Icon type="close-circle" theme="twoTone" /></span>
          </div>
          { this.props.children }
        </div>
      </div>
    )
  }
  handlerClose = () => {
    this.props.onClose()
  }
}

export default dialog