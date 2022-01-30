import React, { useEffect, useState } from "react";
import { fetchPosts } from "../reducers/postReducer";
import { connect } from "react-redux";
import PostCard from "../components/PostCard";
import styled from "styled-components";
import { Link } from "react-router-dom";



const mapStateToProps = (state) =>({
  postList: state.posts.postList
});

const mapDispatchToProps = (dispatch) =>({

  // calls the thunk middleware function 
  getPosts: () => {
    const thunkFunc = fetchPosts();
    dispatch(thunkFunc);
  },
  addPost: (postID) => {dispatch(actions.addPostActionCreator(postID))},
});


const Home = (props) => {
  useEffect(() => {
    props.getPosts();
  }, [])

  return (
    <div>
      Hello this is home <br/>
      <Link to='/register'>Click here to register</Link><br/>
      <Link to='/form'>Click here to create a post</Link>
      <PostCardWrapper>
        {props.postList.map((post, i) => { return <PostCard title={post.title} createdAt={post.createdAt} key={i}/>})}
      </PostCardWrapper>
    </div>
  )
}

const PostCardWrapper = styled.div`
  display: flex;
  column-gap: 30px;

  margin: ;
`;

export default connect(mapStateToProps, mapDispatchToProps)(Home);