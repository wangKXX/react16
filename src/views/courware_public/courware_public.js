import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import { Route, withRouter } from "react-router-dom"
import loadable from 'react-loadable'
import loading from 'common/loading'
import './index.scss'
const CourwarePreview = loadable({
  loader: () => import('../courware_preview'),
  loading
})
@inject('store')
@observer
class CourwarePublic extends Component{
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div className="courware-public">
        <button onClick={() => this.toPreview(1)}>点击跳转</button>
        <Route path="/courware_public/preview/:id" component={CourwarePreview}></Route>
      </div>
    )
  }
  toPreview(id) {
    console.log(this.props)
    this.props.history.push(`/courware_public/preview/${id}`)
  }
}

export default withRouter(CourwarePublic)