import { combineReducers } from 'redux';
import postReducer from './postReducer';

const reducers = combineReducers({
  posts: postReducer
})

export default reducers; 