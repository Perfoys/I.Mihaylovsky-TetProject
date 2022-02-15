import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import combineReducers from './reducer';

import { composeWithDevTools } from 'redux-devtools-extension';

const initialState = {};

const middleware = [thunk];

const composedEnhancer = composeWithDevTools(applyMiddleware(...middleware));

const store = createStore(combineReducers, initialState, composedEnhancer);

export default store;
