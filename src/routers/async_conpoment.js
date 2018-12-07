import React, { Component } from 'react'

function AsyncComponent(importComponent) {
  class asyncComponent extends Component{
    constructor(props) {
      super(props)
      this.state = {
        component: null
      }
    }

    async componentDidMount() {
      const { default: component } = await importComponent()
      this.setState({
        component: component
      });
    }

    render() {
      const C = this.state.component
      return C
        ? <C {...this.props} />
        : null;
    }
  }
  return asyncComponent
}

export default AsyncComponent