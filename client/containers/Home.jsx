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
    <>
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
            created_at={post.created_at}
            username={post.username}
            numapplicant={post.numapplicant}
            key={post.id}
            id={post.id}
            />
          })}
        </PostCardWrapper>
      </HomeStyleWrapper>
    </>
    )
  } else {
    return null
  }
}

const HomeStyleWrapper = styled.div`
  display: flex;
  background: linear-gradient(0.25turn, #7af0e0, #98ddeb ,#658bc9);
  ${({isPopupVisible}) => {
    if (isPopupVisible === true) {
      return `
        position: fixed;
        top: 53px;
        left: 0;
        width: 100%;
        height: 100%; 
        background: linear-gradient(0.25turn, #6d8277, #3d595e ,#3d4e5e);
      `
    }
  }}
`;

const PostCardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 30px;
  row-gap: 30px;
  text-align: center;
  margin-left: 316px;
  padding: 20px 0;
`;

export default connect(mapStateToProps, mapDispatchToProps)(Home);