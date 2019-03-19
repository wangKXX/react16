import React, { Component } from 'react'
function higherConpomentFactory(WrapCompoment, dataSource) {
  class HeightCompoment extends Component {
    constructor(props) {
      super(props)
      this.state = {
        data: dataSource
      }
      console.log('new props', this.props)
      this.getRef = React.createRef()
    }
    static getDerivedStateFromError(error) {
      console.log(error)
      // TODO 错误捕捉ui处理
    }
    componentDidCatch(error, info) {
      console.log(error, info)
      // TODO 统一错误处理逻辑
    }
    render() {
      // const {forwardedRef, ...rest} = this.props
      return <WrapCompoment data={this.state.data} {...this.props} ref={this.getRef}/>
    }
  }

  return HeightCompoment
}

export default higherConpomentFactory