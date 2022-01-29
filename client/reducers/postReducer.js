import * as types from '../constants/actionTypes';


const initialState = {};

const postReducer = (state = initialState, action) => {

  switch(action.types){
    case types.GET_POST:{
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
    default:{
      return state;
    }
  }
};

export default postReducer;