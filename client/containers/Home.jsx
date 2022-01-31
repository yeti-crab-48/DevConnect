import React, { useEffect, useState } from "react";
import { fetchPosts } from "../reducers/postReducer";
import { connect } from "react-redux";
import PostCard from "../components/PostCard";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";


const mapStateToProps = (state) =>({
  postList: state.posts.postList,
  isAuthenticated: state.posts.isAuthenticated
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
  const navigate =  useNavigate();
  const [,rerender] = useState(false);
  
  useEffect(() => {
    if(props.isAuthenticated === false){
      navigate('/register');
    }
    props.getPosts();
    rerender(true);
  }, [props.isAuthenticated])

  if(props.isAuthenticated){
    return (
        <div>
        Hello this is home <br/>
        <Link to='/register'>Click here to register</Link><br/>
        <Link to='/form'>Click here to create a post</Link>
        <PostCardWrapper>
          {props.isAuthenticated && props.postList.map((post, i) => { return <PostCard title={post.title} createdAt={post.createdAt} key={i}/>})}
        </PostCardWrapper>
      </div>
    )
  } else {
    return null
  }
}

const PostCardWrapper = styled.div`
  display: flex;
  column-gap: 30px;
  margin: ;
`;

export default connect(mapStateToProps, mapDispatchToProps)(Home);