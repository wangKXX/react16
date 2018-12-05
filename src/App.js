import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import CommonHeader from './views/common_header'

class App extends Component {
  render() {
    return (
      <div className="App">
        <CommonHeader></CommonHeader>
      </div>
    );
  }
}

export default App;
