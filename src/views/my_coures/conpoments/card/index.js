import React, { Component } from 'react'
import './index.scss'
class Card extends Component{
  constructor(props) {
    super(props)
    this.state = {
      item: this.props.coures
    }
  }

  render() {
    let item = this.state.item
    let status = this.state.item.isOverClass
    let showStatu = ''
    let grade = '一年级'
    switch(status) {
      case 0:
        showStatu = '未上课'
        break 
      case 1:
        showStatu = '上课中'
        break 
      case 2:
        showStatu = '已下课'
        break
      default:
        break
    }
    return (
      <div className="card">
        <div className="card-left">
          <span className="time">{`${item.time}:00`}</span>
          <span className="time-state">
          {showStatu}
          </span>
        </div>
        <div className="card-right">
          <div className="card-r-top">
            <div className="card-r-top-left">
              <img src={item.image} alt="空空如也"/>
              <div className="card-msg-wrap">
                <div className="nick">{item.studentNick}</div>
                <div className="msg-wrap">
                  <span className="grade">{`年级：${grade}`}</span>
                  <span className="alltime">{`时长：${item.totalTime}`}</span>
                </div>
              </div>
            </div>

            <div className="tr-main-btn">进入教室</div>
          </div>

          <div className="card-btm">
          <div className="comm-btn btn">添加作业</div><div className="comm-btn">选择作业</div>
          </div>
        </div>
      </div>
    )
  }
}
export default Card