'use strict'
import React from 'react'
import ReactDOM from 'react-dom'
import {render} from 'react-dom'
import { Provider } from 'react-redux'
import { Route, Router, IndexRedirect, browserHistory} from 'react-router'

import store from './store'
import Root from './components/Root'
import Home from './components/Home'

ReactDOM.render (
  <Provider store={store}>
  <Router history={browserHistory}>
    <Route path= "/" component={Home}>
    </Route>
  </Router>
  </Provider>,
  document.getElementById('main')
)