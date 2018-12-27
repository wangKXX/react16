import React, { Component } from 'react'
import './App.scss'
import SliderList from './views/conpoments/slider_list'
import Router from './routers'

class App extends Component {
  render() {
    return (
        <div className="App">
            <SliderList></SliderList>
            <div className="nav-right">
              <Router></Router>
            </div>
        </div>
    )
  }
}

export default App
