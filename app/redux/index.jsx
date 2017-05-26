import { combineReducers } from 'redux'

import campusReducer from './campuses'
import studentReducer from './students'


export default combineReducers ({
    campuses: campusReducer,
    students: studentReducer
})