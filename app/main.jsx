'use strict'
import React from 'react'
import ReactDOM from 'react-dom'
import {render} from 'react-dom'
import { Provider } from 'react-redux'
import { Route, Router, IndexRedirect, browserHistory} from 'react-router'

import store from './store'

//components
import Root from './components/Root'
import Home from './components/Home'

//containers
import CampusesContainer from './containers/CampusesContainer'
import CampusContainer from './containers/CampusContainer'
import StudentsContainer from './containers/StudentsContainer'
import StudentContainer from './containers/StudentContainer'

ReactDOM.render (
  <Provider store={store}>
  <Router history={browserHistory}>
    <Route path= "/" component={Home}>
    <Route path= "/campuses" component={CampusesContainer} />
    <Route path= "/campuses/:campusId" component={CampusContainer} />
    <Route path= "/students" component={StudentsContainer} />
    <Route path= "/students/:studentsId" component={StudentContainer} />
    </Route>
  </Router>
  </Provider>,
  document.getElementById('main')
)