import React, { Component } from 'react';
import { observer } from 'mobx-react'
import './common-header.css'

@observer
class CommonHeader extends Component {
  constructor(props) {
    super(props)
    this.showTitle = '我是标题'
  }
  render() {
    return (
      <div className='common_header'>
      {this.showTitle}
        <button onClick={this.handlerClick}>改变状态</button>
      </div>
    )
  }
  handlerClick() {
    console.log(this.props)
  }
}

export default CommonHeader