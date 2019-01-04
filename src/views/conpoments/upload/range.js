import React, {Component} from 'react'
import './range.scss'

class Range extends Component{
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    let percent = this.props.percent * 100
    let style = {
      width: `${percent}%`
    }
    return (
      <div className="range-wrap">
        <div className="range-inner" style={style}></div>
      </div>
    )
  }
}

export default Range