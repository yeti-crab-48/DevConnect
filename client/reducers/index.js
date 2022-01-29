import { combineReducers } from 'redux';
import postReducer from './postReducer';

const reducers = combineReducers({
  posts: null // postReducer
})

export default reducers; 