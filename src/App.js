import React, { Component } from 'react'
import './App.scss'
import {observer, inject} from 'mobx-react'
import { Route } from "react-router-dom"
import loadable from 'react-loadable'
import loading from 'common/loading'
const LoginPage = loadable({
  loader: () => import('./views/login_page'),
  loading
})
const SliderList = loadable({
  loader: () => import('./views/conpoments/slider_list/slider_list'),
  loading
})
const Router = loadable({
  loader: () => import('./routers'),
  loading
})
const UploadComponent = loadable({
  loader: () => import('./views/conpoments/upload/upload'),
  loading
})
@inject('store')
@observer
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  static getDerivedStateFromError(error) {
    // TODO 错误捕捉ui处理
  }
  componentDidCatch(error, info) {
    console.error(error, info)
  }
  render() {
    let isLogin = this.props.store.computedIsLogin;
    return (
      <div className="App">
        <Route path="/" render={() => (
          isLogin ?
           <><SliderList></SliderList><div className="nav-right"><Router></Router></div><UploadComponent></UploadComponent></>
           : <LoginPage/> 
        )}/>
      </div>
    )
  }
}

export default App
