import { combineReducers } from 'redux';
import sprintSlice from './sprintReducer';

export default combineReducers({ sprint: sprintSlice });
