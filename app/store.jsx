import { createStore, applyMiddleware } from 'redux';
import campusReducer from './redux';
import createLogger from 'redux-logger'; // https://github.com/evgenyrodionov/redux-logger
import thunkMiddleware from 'redux-thunk'; // https://github.com/gaearon/redux-thunk

export default createStore(campusReducer, applyMiddleware(thunkMiddleware, createLogger()))

