import React, { useEffect, useState } from "react";
import { fetchPosts } from "../reducers/postReducer";


const mapStateToProps = (state) =>({
//Provide pertenant state here
  postList: state.posts.postList
});

const mapDispatchToProps = (dispatch) =>({
//provide dispatch here
  // getPosts: () => {dispatch(actions.getPostsActionCreator())},
  addPost: (postID) => {dispatch(actions.addPostActionCreator(postID))},
});


const Home = (props) => {

  useEffect(() => {
    const thunkFunc = fetchPosts();
    dispatch(thunkFunc);
  }, [])


  return (
    <div>
      Hello this is home 
      {state.postList.map((item, i) => { <div key={i}>{item}</div>})}
    </div>
  )
}


export default connect(mapStateToProps,mapDispatchToProps)(Home);