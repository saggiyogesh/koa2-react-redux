import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import rootReducer from '../reducers';
import createLogger from 'redux-logger';

const createStoreWithMiddleware = applyMiddleware(promise, createLogger())(createStore);

export default createStoreWithMiddleware(rootReducer);
