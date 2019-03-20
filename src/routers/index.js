import React, { Component } from 'react'
import { Route, Switch } from "react-router-dom"
import loadable from 'react-loadable'
import loading from 'common/loading'
const CourwarePublic = loadable({
  loader: () => import('../views/courware_public/courware_public'),
  loading
})
const MyCoures = loadable({
  loader: () => import('../views/my_coures/my_coures'),
  loading
})
const MyCourware = loadable({
  loader: () => import('../views/my_courware/my_courware'),
  loading
})
class router extends Component{
  render() {
    return (
      <Switch>
        <Route path="/my_coures" component={MyCoures} exact/>
        <Route path="/my_courware" component={MyCourware} exact/>
        <Route path="/courware_public" component={CourwarePublic}/>
      </Switch>
    )
  }
}

export default router