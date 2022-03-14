import { combineReducers } from 'redux';
import sprintSlice from './sprintReducer';

const rootReducer = combineReducers({ sprint: sprintSlice });

export type RootState = ReturnType<typeof rootReducer>
export default rootReducer;
