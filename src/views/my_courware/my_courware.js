import React, { Component } from 'react'
import { SettingContext, setting } from './conpoments/context/context_button'
import Dialog from 'common/dialog'
import { observer, inject } from 'mobx-react'
import './index.scss'
import { Button, PageHeader, Input } from 'antd'
import CallBackRef from './conpoments/callbackrefs'
import ButtonContext from './conpoments/context'
const Search = Input.Search
@observer
@inject('store')
class MyCourware extends Component{
  constructor(props) {
    super(props)
    this.state = {
      isShow: props.store.isShowDialog,
      setting: setting.dark
    }
    this.callBackRef = React.createRef()
    this.setSettingHandler = () => {
      this.setState(state => ({
        setting: state.setting === setting.dark
          ? setting.light
          : setting.dark 
      }))
    }
  }
  isMouseDown = false
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
  onBack = () => {
    alert()
  }
  onSearch(val) {
    console.log(this.callBackRef.current.textInput)
  }
  onMouseDown = (event) => {
    this.isMouseDown = true
    console.log(event.target.offsetLeft)
  }
  onMouseMove = (event) => {
    if (this.isMouseDown) {
      console.log(event.target.offsetLeft)
    }
  }
  onMouseUp = () => {
    this.isMouseDown = false
  }
  render() {
    return (
      <div className="my-courware">
      <div className="grid-box">
        <div className="grid-b">
          <PageHeader
          onBack={this.onBack}
          title="我的课件"
          ></PageHeader>
        </div>
        <div className="grid-b">
        <Search
        placeholder="课件名称/关键字"
        onSearch={val => this.onSearch(val)}
        enterButton
        ></Search>
        {/* <Button type="primary" onClick={this.handlerShowClick}>dialog</Button> */}
        </div>
        <div className="grid-b" onMouseDown={this.onMouseDown} onMouseMove={this.onMouseMove} onMouseUp={this.onMouseUp}></div>
        <div className="grid-b">
          <CallBackRef ref={this.callBackRef}></CallBackRef>
          <SettingContext.Provider value={this.state.setting}>
            <ButtonContext changeHandler={this.setSettingHandler}/>
          </SettingContext.Provider>
        </div>
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