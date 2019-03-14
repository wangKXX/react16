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
    return (<div>
      <Button type="primary" onClick={this.handlerShowClick}>dialog</Button>
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