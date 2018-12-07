import React, { Component } from 'react'
// import logo from './logo.svg';
import './App.scss';
import CommonHeader from './views/common_header'
import Content from './views/content'
import {ThemContext} from './context'
import context from './context/context.js'

class App extends Component {
  render() {
    return (
      <ThemContext.Provider value={context}>
        <div className="App">
            <CommonHeader></CommonHeader>
            <Content></Content>
        </div>
      </ThemContext.Provider>
    );
  }
}

export default App;
