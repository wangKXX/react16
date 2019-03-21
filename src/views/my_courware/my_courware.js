import React, { Component } from 'react'
import { SettingContext, setting } from './conpoments/context/context_button'
import Dialog from 'common/dialog'
import { observer, inject } from 'mobx-react'
import './index.scss'
import { Button, PageHeader, Input } from 'antd'
import CallBackRef from './conpoments/callbackrefs'
import ButtonContext from './conpoments/context'
import HigherCompoment from './conpoments/highercompoment'
import Test from './conpoments/renderprops/test'
import MixinsTest from './conpoments/test'

let mixinsTest = new MixinsTest()
console.log(mixinsTest)
mixinsTest.testHandler()
const Search = Input.Search
@inject('store')
@observer
class MyCourware extends Component{
  constructor(props) {
    super(props)
    this.state = {
      isShow: props.store.isShowDialog,
      setting: setting.dark
    }
    console.log('constructor')
    this.callBackRef = React.createRef()
    this.setSettingHandler = () => {
      this.setState(state => ({
        setting: state.setting === setting.dark
          ? setting.light
          : setting.dark 
      }))
    }
    this.heigherRef = React.createRef()
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log(nextProps, nextState, 'shouldComponentUpdate')
    return true
  }
  componentWillMount() {
    console.log('will mount')
  }
  componentDidMount() {
    console.log('did mount')
  }
  componentWillUnmount() {
    console.log('will unmount')
  }
  componentWillReceiveProps(nextprops) {
    console.log(nextprops, 'WillReceiveProps')
  }
  componentWillUpdate(nextprops, nextstate) {
    console.log(nextprops, nextstate, 'WillUpdate')
  }
  componentDidUpdate(prevProps, prevstate) {
    console.log(prevProps, prevstate, 'DidUpdate')
  }
  componentDidCatch(error) {
    console.log(error)
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
    console.log(this.heigherRef.current)
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
    console.log('render')
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
          <HigherCompoment ref={this.heigherRef}></HigherCompoment>
          <Test></Test>
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
let obj = new MyCourware()
console.log(obj)
export default MyCourware