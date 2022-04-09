import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import greetingReducer from './greetings/greetings';

const reducer = combineReducers({
  greeting: greetingReducer,
});

const store = createStore(reducer, applyMiddleware(thunk, logger));

export default store;
