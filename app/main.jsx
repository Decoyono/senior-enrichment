'use strict'
import React from 'react'
import ReactDOM from 'react-dom'
import {render} from 'react-dom'
import { Provider } from 'react-redux'
import { Route, Router, IndexRedirect, browserHistory} from 'react-router'
import axios from 'axios'
var Promise = require('bluebird')

import store from './store'

//components
import Root from './components/Root'
import Home from './components/Home'

//containers
import CampusesContainer from './containers/CampusesContainer'
import CampusContainer from './containers/CampusContainer'
import StudentsContainer from './containers/StudentsContainer'
import StudentContainer from './containers/StudentContainer'
import NewCampus from './containers/NewCampus'
import EditCampus from './containers/EditCampus'
import NewStudent from './containers/NewStudent'

import {fetchCampuses, getOneCampus} from './redux/campuses'
import {fetchStudents, getOneStudent} from './redux/students'


// onEnter functions
const onHomeEnter = () => {
  console.log("HIIIII")
  const foundCampuses = axios.get('/api/campuses')
    .then(function(res) {
      return res.data
    })
  const foundStudents = axios.get('/api/students')
    .then(function(res) {
      return res.data
  })
  return Promise.all([foundCampuses, foundStudents])
    .spread(function(campuses,students){
      store.dispatch(fetchCampuses(campuses))
      store.dispatch(fetchStudents(students))
    })
    .catch(console.error)
}

// const onCampusEnter = (nextRouterState) => {
//   const campusId = nextRouterState.params.campusId;
//   store.dispatch(getOneCampus(campusId))
// }

// onEnter={onCampusEnter}


ReactDOM.render (
  <Provider store={store}>
  <Router history={browserHistory}>
    <Route path= "/" component={Home} onEnter={onHomeEnter}>
    <Route path= "/campuses" component={CampusesContainer}  />
    <Route path= "/campuses/:campusId" component={CampusContainer} />
    <Route path= "/students" component={StudentsContainer} />
    <Route path= "/students/:studentsId" component={StudentContainer} />
    <Route path= "/new-campus" component={NewCampus} />
    <Route path= "/edit-campus/:campusId" component={EditCampus} />
    <Route path= "/new-student" component={NewStudent} />
    <IndexRedirect to = "/campuses" />
    </Route>
  </Router>
  </Provider>,
  document.getElementById('main')
)