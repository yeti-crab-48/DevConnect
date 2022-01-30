import * as types from '../constants/actionTypes';


const initialState = {

  isAuthenticated: false, 
  postList: [],
};

const postReducer = (state = initialState, action) => {

  switch(action.type){
    case types.GET_POSTS:{
      // return updated state
      return {
        ...state, 
        postList: action.payload // array of objects
      }
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


const data = [
  {
    "user_id": 1,
    "numApplicant": 3,
    "title": "Help wanted with redux",
    "id": 34,
    "body": "Hello world", 
    "createdAt": "2022-01-29T19:57:38.566Z",
    "contact": 1987453454
  },
  {
    "user_id": 2,
    "numApplicant": 5,
    "title": "Please help me with express",
    "id": 67,
    "body": "Hello world", 
    "createdAt": "2022-01-29T19:57:38.566Z",
    "contact": 2498485424
  },
  {
    "user_id": 3,
    "numApplicant": 7,
    "title": "What is react?",
    "id": 85,
    "body": "Hello world", 
    "createdAt": "2022-01-29T19:57:38.566Z",
    "contact": 8774354949
  },
  {
    "user_id": 4,
    "numApplicant": 12,
    "title": "Yellow world",
    "id": 233,
    "body": "Hello world", 
    "createdAt": "2022-01-29T19:57:38.566Z",
    "contact": 7214598201
  },
  {
    "user_id": 5,
    "numApplicant": 324,
    "title": "Green world",
    "id": 433,
    "body": "Hello world", 
    "createdAt": "2022-01-29T19:57:38.566Z",
    "contact": 8435216792
  }
]


/**
 * Thunk function 
 * @returns 
 */
export const fetchPosts = () => {
  return (dispatch, getState) => {
    fetch('api/listings', {
      method: 'GET',
      headers: {'Content-Type': 'application/json'},
    })
      .then((data) => data.json())
      .then((posts) =>  // assume its an array of objects 
        dispatch({type: types.GET_POSTS, payload: posts})  
      )
  }
}
  
      // .then(posts => {
      //   dispatch({type: types.GET_POSTS, payload: posts})
  //     // });
  //   fetch('./api/listings', {
  //     method: 'GET',
  //     headers: {'Content-Type': 'application/json'},
  //   })
  //     .then((data) => data.json())
  //     .then((posts) =>  // assume its an array of objects 
  //       dispatch({type: types.GET_POSTS, payload: posts})  
  //     )
  // }
// }







export default postReducer;