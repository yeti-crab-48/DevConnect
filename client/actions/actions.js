//////////////////Return to these when connecting to backend/////////////////////
import * as types from '../constants/actionTypes';

export const addPostActionCreator = (postID) => ({
  type: types.ADD_POST
})

export const setAuthAction = (bool) => ({
  type: types.SET_AUTH,
  payload: bool
})