import counterReducer from './counter';
import loggedReducer from './isLogged';
import { combinetReducers, combineReducers } from 'redux';

const allReducers = combinetReducers({
  counter: counterReducer,
  isLogged: loggedReducer
});