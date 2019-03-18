import React, { Component } from 'react'

/**
 * @moudle
 * 通过内部ref将组件内的dom暴露给父组件
 */
class callBackRef extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.textInput = null
  }
  render() {
    return (
      <div>
        <input type="text" placeholder="请输入" ref={this.setTextInput}/>
      </div>
    )
  }
  setTextInput = element => {
    this.textInput = element
  }
}

export default callBackRef