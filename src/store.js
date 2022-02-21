import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import combineReducers from './reducers/index';

const initialState = {};

const middleware = [thunk];

const composeEnhancer = composeWithDevTools(applyMiddleware(...middleware));

const store = createStore(combineReducers, initialState, composeEnhancer);

export default store;
