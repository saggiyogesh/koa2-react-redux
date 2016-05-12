import { combineReducers } from 'redux';
import auth from './auth';

const loginApp = combineReducers({
  auth
});

export default loginApp;
