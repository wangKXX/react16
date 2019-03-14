import React, { Component } from 'react'
import './App.scss'
import SliderList from './views/conpoments/slider_list/slider_list'
import Router from './routers'
import UploadComponent from './views/conpoments/upload/upload'
import LoginPage from './views/login_page'
import {observer, inject} from 'mobx-react'
@inject('store')
@observer
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    let isLogin = this.props.store.computedIsLogin;
    let ReturnConpoment = null;
    if (!isLogin) {
      ReturnConpoment = <LoginPage></LoginPage>;
    } else {
      ReturnConpoment = <div className="App"><SliderList></SliderList><div className="nav-right"><Router></Router></div><UploadComponent></UploadComponent></div>;
    }
    return (
      <div className="App">
        {ReturnConpoment}
      </div>
    )
  }
}

export default App
