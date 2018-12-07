import React, { Component } from 'react'
import { Route, Switch } from "react-router-dom"
import AsyncComponent from './async_conpoment'

const CourwarePublic = AsyncComponent(() => import('../views/courware_public/courware_public'))
const MyCoures = AsyncComponent(() => import('../views/my_coures/my_coures'))
const MyCourware = AsyncComponent(() => import('../views/my_courware/my_courware'))

class router extends Component{
  render() {
    return (
      <Switch>
        <Route path="/my_coures" component={MyCoures}/>
        <Route path="/my_courware" component={MyCourware}/>
        <Route path="/courware_public" component={CourwarePublic}/>
      </Switch>
    )
  }
}

export default router