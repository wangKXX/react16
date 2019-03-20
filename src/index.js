import React from 'react';
import ReactDOM from 'react-dom';
import 'core-js/es6/map';
import 'core-js/es6/set';
import 'core-js/es6/promise';
import 'core-js/es6/symbol';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './store'
import { Provider } from 'mobx-react'
import { BrowserRouter, Route } from "react-router-dom";
import 'normalize.css'
import './mock/api'

ReactDOM.render(
<BrowserRouter>
  <Provider store={store}>
    <Route path="/" component={App} />
  </Provider>
</BrowserRouter>
, document.getElementById('root'));
document.ondragover = (event) => {
  event.preventDefault()
}
document.ondrop = (event) => {
  event.preventDefault()
}
serviceWorker.unregister();
