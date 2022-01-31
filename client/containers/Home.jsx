import React, { useEffect, useState } from "react";
import { fetchPosts } from "../reducers/postReducer";
import { connect } from "react-redux";
import PostCard from "../components/PostCard";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import VerticalNavbar from "../components/VerticalNavbar";
import PostPopup from "../components/PostPopup";


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
  const [isPopupVisible, setIsPopupVisible] = useState(false); // change to false later
  const [popupPostId, setPopupPostId] = useState('');

  

  useEffect(() => {
    if(props.isAuthenticated === false){
      navigate('/register');
    }
    props.getPosts();
  }, [props.isAuthenticated])

  // click handler for focus view of PostCard 
  const handleClick = (postId) => {
    console.log(postId, 'in handleClick')
    if (postId !== undefined) {
      setPopupPostId(postId);
      setIsPopupVisible(true);
    } else {
      setIsPopupVisible(false);
      setPopupPostId('');
    }
  }
      
  if(props.isAuthenticated === true){
    return (
      <HomeStyleWrapper isPopupVisible={isPopupVisible}>
        <VerticalNavbar/>
        { isPopupVisible ? 
          <PostPopup clickHandler={handleClick} postId = {popupPostId}/> :
          null}
        <PostCardWrapper>
          {props.isAuthenticated && props.postList.map((post, i) => { 
            return <PostCard 
              clickHandler={handleClick}
              title={post.title} 
              createdAt={post.createdAt} 
              key={i}
              id={post.id}
            />
          })}
        </PostCardWrapper>
      </HomeStyleWrapper>
    )
  } else {
    return null
  }
}

const HomeStyleWrapper = styled.div`
  display: flex;
  
  ${({isPopupVisible}) => {
    if (isPopupVisible === true) {
      return `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%; 
        background: rgba(0,0,0,.6);
      `
    }
  }}
`;

const PostCardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 30px;
  row-gap: 30px;
  margin: ;
`;

export default connect(mapStateToProps, mapDispatchToProps)(Home);