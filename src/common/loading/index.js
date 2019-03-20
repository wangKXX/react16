import { Spin } from 'antd'
import './index.scss'
import React, { Component } from 'react'

class loading extends Component{
  render() {
    return (
      <div className="loading-wrap"><Spin/></div>
    )
  }
}
export default loading