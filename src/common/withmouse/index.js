import React, { Component } from 'react'
import Mouse from './mouse'
/**
 * @Moudle
 * 高阶组件共享state
 */
function WithMouse(Compt) {
  return class extends Component{
    constructor(props) {
      super(props)
      this.state = {}
      this.setRef = React.createRef() // 传递ref
    }
    render() {
      return (
        <Mouse render={mouse => (
          <Compt {...this.props} mouse={mouse} ref={this.setRef}/>
        )}/>
      )
    }
  }
}

export default WithMouse