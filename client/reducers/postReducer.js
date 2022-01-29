import * as types from '../constants/actionTypes';


const initialState = {
  postList: [],
};

const postReducer = (state = initialState, action) => {

  switch(action.types){
    case types.GET_POSTS:{
      fetch('/', ).then(data=>data.json).then(finalData => {
        populate state 
        // declare variable and set equal to the finalData
      })
      return{
        // posts: [finalData]

      }
      // GET request to database (jsonfile) here to populate relevant state 

      // return updated state
    }
    case types.ADD_POST:{

      return {

      }
    }
    default: {
      return state;
    }
  }
};


/**
 * Thunk function 
 * @returns 
 */
export const fetchPosts = () => {
  return (dispatch, getState) => {
    fetch('./api/listings', {
      method: 'GET',
      headers: {'Content-Type': 'application/json'},
    })
      .then((data) => data.json())
      .then((posts) => 
        /*do something */
        dispatch({type: types.GET_POSTS, payload: posts})
      )
  }
}






export default postReducer;