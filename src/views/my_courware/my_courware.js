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
    var FileSaver = require('file-saver');
    var blob = new Blob(["Hello, world!"], {type: "text/plain;charset=utf-8"});
    FileSaver.saveAs(blob, "hello world.txt");  
    html2canvas(document.body, { useCORS: true, logging: true, allowTaint: true })
    .then((canvas) => {
      const url = canvas.toDataURL()
      this.setState({
        imageUrl: url 
      })
    })
  }
}

export default MyCourware