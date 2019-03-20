import React, { Component } from 'react'
import { Carousel } from 'antd'
import Login from './conpoments/login'
import './index.scss'
import logo from '../../images/common/logo-bg.png'

class loginPage extends Component{
  constructor(props) {
    super(props)
    this.state = {}
    this.carouselRef = React.createRef()
    this.goNextHandler = this.goNextHandler.bind(this)
  }
  render() {
    return (
      <div className="login-page">
        <div className="logo">
          <img src={logo} alt="空空"/>
        </div>
        <Carousel afterChange={() => this.handlerChange()} ref={this.carouselRef} dots="false" infinite={false}>
          <div className="login-wrap">
              <Login goNext={this.goNextHandler}></Login>
          </div>
          <div className="zhuce-wrap">
          
          </div>
        </Carousel>
      </div>
    )
  }
  handlerChange() {
    // TODO
  }
  goNextHandler() {
    this.carouselRef.current.slick.slickNext()
  }
}

export default loginPage