import { createStore, applyMiddleware, compose } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducers/index';
import thunkMiddleware from "redux-thunk";

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware));

const store = createStore(
  reducers,
  composedEnhancer
);

export default store; 