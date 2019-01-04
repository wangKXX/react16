import React, {Component} from 'react'
import {observer, inject} from 'mobx-react'
import image from '../../../images/upload/icon1.png'
import Range from './range'
import './upload.scss'
import FileUtils from 'common/utils/file'

@inject('store')
@observer
class uploadComponent extends Component {
  constructor(props) {
    super(props)
    const _input = document.createElement('input')
    _input.setAttribute('type', 'file')
    this.state = {
      range: 0,
      rangeList: [],
      _input
    }
  }
  render() {
    let isShow = this.props.store.isShowUpload
    let content = null
    if (isShow) {
      content = <div className="wrap">
        <div className="upload-inner">
          <div className="upload-inner-top" onDrop={(event) => this.dragOverHandler(event)} onClick={() => this.openFile()}>
            <img src={image} alt="添加课件"/>
            <div className="upload-tips">将文件拖拽到这儿，或者点击添加</div>
          </div>
          <div className="upload-inner-btm">
            <div className="tr-main-btn">确认使用</div>
            <div className="comm-btn cancle" onClick={() => this.cancle()}>取消</div>
          </div>
          <div className="upload-list">
          {
            this.state.rangeList.map((item, key) => {
              return (
                <div className="upload-item" key={key}>
                  <div className="upload-item-name">{item.name}</div>
                  <Range percent={item.range}></Range>
                </div>
              )
            })
          }
          </div>
        </div>
      </div>
    }
    return (
      <div>{content}</div>
    )
  }
  cancle() {
    this.props.store.set_upload_is_show(false)
  }
  dragOverHandler(event) {
    const files = event.dataTransfer.files
    console.log(files)
    this.dealFiles(files)
    event.preventDefault()
  }

  dealFiles(files) {
    if (files.length > 1) {
      files.forEach(item => {
        const config = {
          file: item
        }
        const filereader = new FileUtils(config)
        filereader.readStart()
      })
    } else {
      const config = {
        file: files[0],
        progressCb: this.progressCb.bind(this)
      }
      const filereader = new FileUtils(config)
      filereader.readStart()
    }
  }
  progressCb(name, range) {
    let obj = {
      name, range
    }
    let rangeList = this.state.rangeList
    rangeList.push(obj)
    this.setState({
      rangeList
    })
  }
  openFile() {
    const _input = this.state._input
    _input.click()
    _input.onchange = (e) => {
      const file = e.target.files[0]
      const config = {
        file,
        progressCb: this.progressCb.bind(this)
      }
      const filereader = new FileUtils(config)
      filereader.readStart()
    }
  }
}
export default uploadComponent