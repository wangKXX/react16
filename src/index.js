import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './store'
import { Provider } from 'mobx-react'
import { BrowserRouter } from "react-router-dom";
import 'normalize.css'
import './mock/api'

ReactDOM.render(
<BrowserRouter>
  <Provider store={store}>
    <App/>
  </Provider>
</BrowserRouter>
, document.getElementById('root'));
serviceWorker.unregister();
