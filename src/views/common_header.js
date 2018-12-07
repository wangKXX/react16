import React, { Component } from 'react';
import { observer, inject } from 'mobx-react'
// import { ThemContext } from '../context'
// import store from '../store'
import './common-header.scss'

@inject('store')
@observer
class CommonHeader extends Component {
  constructor(props, context) {
    super(props, context)
    console.log(this.props)
    this.state = {
      showTitle: '我是标题'
    }
    this.testName = 10
  }
  render() {
    console.log('render')
    return (
      <div className='common_header'>
      {this.state.showTitle}{this.testName}
        <button onClick={() => this.props.store.set_count(10)}>改变状态</button>
        <button onClick={() => this.handerClick()}>内部状态</button>
      {this.props.store.count}
      </div>
    )
  }
  handerClick() {
    this.setState({
      showTitle: '我不是标题'
    })
    this.testName = this.testName++
  }
}
export default CommonHeader