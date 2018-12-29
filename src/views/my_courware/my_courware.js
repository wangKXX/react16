import React, { Component } from 'react'
import html2canvas from 'html2canvas'
import saveAs from 'file-saver'
import './index.scss'
class MyCourware extends Component{
  constructor(props) {
    super(props)
    this.state = {
      imageUrl: ''
    }
  }
  render() {
    return (<div>
      <button onClick={() => this.handlerCut()}>截屏</button>
      <iframe src="http://www.jq22.com/jquery-info18038" width="300" height="500"></iframe>
      <img src={this.state.imageUrl}/>
    </div>)
  }
  handlerCut() {
    // var FileSaver = require('file-saver');
    // var blob = new Blob(["Hello, world!"], {type: "text/plain;charset=utf-8"});
    // FileSaver.saveAs(blob, "hello world.txt");  
    html2canvas(document.body, { useCORS: true, logging: true, allowTaint: true })
    .then((canvas) => {
      const url = canvas.toDataURL()
      this.setState({
        imageUrl: url 
      })
      if (!("Notification" in window)) {
        alert("不支持 notification");
      } else if (Notification.permission === "granted") { // 允许通知
        this.notice()
      }else if (Notification.permission === 'denied') { // 用户没有选择是否显示通知，向用户请求许可
        Notification.requestPermission().then((permission) => {
          if (permission === 'granted') {
            this.notice()
          } else if (permission === 'denied') {
            alert('用户拒绝通知')
          }
        }).catch((error) => {
          throw error
        })
      }
    })
  }

  notice() {
    var notification = new Notification('状态更新提醒',{
      body: '你的朋友圈有3条新状态，快去查看吧',
      tag: 'linxin',
      icon: 'http://blog.gdfengshuo.com/images/avatar.jpg',
      requireInteraction: true
    })
    notification.onclick = function(){
        notification.close()
    }
  } 
}

export default MyCourware