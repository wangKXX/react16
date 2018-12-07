import React, { Component } from 'react'
import Report from '../conpoments/report'

class MyCoures extends Component{
  constructor(props) {
    super(props)
    this.state = {
      reportConfig: {
        name: '最新公告',
        url: 'www.baidu.com'
      }
    }
  }
  render() {
    return (
      <div className="my-coures">
        <Report reportConfig={this.state.reportConfig}></Report>
        <div className="my-coures-content"></div>
      </div>
    )
  }
}

export default MyCoures