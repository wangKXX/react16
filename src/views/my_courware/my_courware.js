import React, { Component } from 'react'
import Dialog from 'common/dialog'
import { observer, inject } from 'mobx-react'
import './index.scss'
import { Button } from 'antd'
@observer
@inject('store')
class MyCourware extends Component{
  constructor(props) {
    super(props)
    this.state = {
      isShow: props.store.isShowDialog
    }
  }
  handlerShowClick = () => {
    this.setState({
      isShow: true
    })
  }
  handlerHideClick= () => {
    this.setState({
      isShow: false
    })
  }
  render() {
    return (
      <div className="my-courware">
      <div className="grid-box">
        <div className="grid-b"><Button type="primary" onClick={this.handlerShowClick}>dialog</Button></div>
        <div className="grid-b">2</div>
        <div className="grid-b">3</div>
        <div className="grid-b">4</div>
        <div className="grid-b">5</div>
        <div className="grid-b">6</div>
        <div className="grid-b">7</div>
        <div className="grid-b">8</div>
        <div className="grid-b">9</div>
      </div>
      {
        this.state.isShow && <Dialog onClose={this.handlerHideClick}>
          <div className="dialog-content">
             警告
          </div>
          <div className="dialog-foot">
            <Button type="primary" onClick={this.handlerHideClick}>确认</Button>
          </div>
        </Dialog>
      }
    </div>)
  }
}

export default MyCourware