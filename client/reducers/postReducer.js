import * as types from '../constants/actionTypes';

const initialState = {

  isAuthenticated: null, 
  postList: [],
};

const postReducer = (state = initialState, action) => {

  switch(action.type){
    case types.GET_POSTS:{
      return {
        ...state, 
        postList: action.payload 
      }
    }

    case types.ADD_POST:{
      return {
      }
    }

    case types.SET_AUTH:
      console.log('ping from reducer', action.payload);
      return {
        ...state,
        isAuthenticated: action.payload
      }
    
    default: {
      return state;
    }
  }
};

/**
 * Thunk function 
 */
export const fetchPosts = () => {
  return (dispatch, getState) => {
    fetch('api/listings', {
      method: 'GET',
      headers: {'Content-Type': 'application/json'},
    })
      .then((data) => data.json())
      .then((posts) => { // assume its an array of objects 
          posts.sort((a, b) => {
            // console.log('this is the date of A ', new Date(a.created_at));
            // // console.log(new Date(a.created_at));
            return new Date(b.created_at) - new Date(a.created_at);
          });
          dispatch({type: types.GET_POSTS, payload: posts})  
        }
      )
  }
}







export default postReducer;