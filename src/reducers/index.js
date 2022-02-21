import { combineReducers } from 'redux';
import sprintReducer from './sprintReducer';

export default combineReducers({ sprint: sprintReducer });
