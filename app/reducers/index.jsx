import { combineReducers } from 'redux'

import campusReducer from './campusReducer'
import studentReducer from './studentReducer'


export default combineReducers({campusReducer, studentReducer})
