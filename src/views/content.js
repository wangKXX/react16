import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import {ThemContext} from '../context'
import './content.scss'
@inject('store')
@observer
class Content extends Component{
  render() {
    return (
      <div className="content">
      <ThemContext.Consumer>
        {context => (
          <div>{context.confige.count}</div>
        )}
      </ThemContext.Consumer>
      <div className='common_content'>
        添加数据：<button onClick={() => this.props.store.set_store_list()}>添加</button>{this.props.store.personTotal}
        <div className='common_content_inner'>
          { 
            this.props.store.storeList.map((item, index) => <li key={index}>{`${item.name}:${item.age}`}</li>)
          }
          <button onClick={() => this.draw()}>画400次</button>
          <div className='canvas-wrap'>
            <canvas width='300' height='300' id='canvas'></canvas>
          </div>
        </div>
      </div>
      </div>
    )
  }
  draw() {
    const canvas = document.getElementById('canvas'),
          ctx = canvas.getContext('2d')
    this.ctx = ctx
    ctx.save()
    ctx.lineWidth = 2
    for(let i = 1; i < 1000; i++){
      ctx.beginPath()
      ctx.fillStyle = '#000'
      ctx.strokeRect(Math.random()* 300, Math.random()* 300, Math.random()* 300, Math.random()* 300)
      ctx.stroke()
      this.drawImage()
    }
    ctx.restore()
  }

  drawImage() {
    const _self = this
    const img = new Image()
    img.src = require('../logo.svg')
    img.onload = function(){
      let w = this.width
      let h = this.height
      const sizeObj = _self.reSizeImg(w, h)
      const _canvas = document.createElement('canvas'),
            _ctx = _canvas.getContext('2d')
      _ctx.save()
      const _nodeW = document.createAttribute('width')
      _nodeW.nodeValue = sizeObj._w
      const _nodeH = document.createAttribute('height')
      _nodeH.nodeValue = sizeObj._h
      _canvas.setAttributeNode(_nodeW)
      _canvas.setAttributeNode(_nodeH)
      _ctx.drawImage(this, 0, 0, sizeObj._w, sizeObj._h)
      _ctx.restore()
      _self.ctx.drawImage(_canvas, 0, 0, sizeObj._w, sizeObj._h)

    }
  }

  reSizeImg(_w, _h) {
    if (_w > 300) {
      return { _w: 300, _h: 300 * _h / _w }
    } else if (_h > 300) {
      return { _w: 300 * _w / _h, _h: 300}
    } else {
      return { _w, _h }
    }
  }

  componentDidMount() {
    document.onclick = (e) => {
      console.log(e)
    }
  }
}
export default Content