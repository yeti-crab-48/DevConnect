import React, { useState, useEffect } from 'react';
import styled from 'styled-components';


const PostPopup = ({ clickHandler, postId }) => {
  
  // declare state element to hold the object returned from useEffect GET request 
  const [popupBody, setPopupBody] = useState({
    contactInfo: '', 
    title: '',  
    skills: '',
    body: '', 
    createdAt: ''
  });
  
  // api endpoint is /api/listings:id
  useEffect(() => {
    fetch(`/api/listings/${postId}`, {
      method: 'GET',
      header: {'Content-Type': 'application/json'}
    })
      .then((data) => data.json())
      .then((popup) => {
        const newState = {}
        newState.contactInfo = popup.contact;
        newState.title = popup.title;
        newState.skills = popup.skills;
        newState.body = popup.body;
        newState.createdAt = new Date(popup.created_at).toDateString();
        setPopupBody(newState);
      })
  }, [])

  const popupClickHandler = () => {
    clickHandler()
  }

  useEffect(() => {
    document.addEventListener('click', popupClickHandler)
    return () => {
      document.removeEventListener('click', popupClickHandler)
    }
  })

  return (
    <PopupContainer>
      <Title>{popupBody.title}</Title>
      <Header>Date Posted: </Header>
      <div>{popupBody.createdAt}</div> 
      <Header>Gig Description: </Header>
      <div>{popupBody.body}</div>
      <Header>Requirements: </Header>
      <div>{popupBody.skills}</div>
      <Header>If interested, please call: </Header><span>{popupBody.contactInfo}</span>
    </PopupContainer>
  );
};


const PopupContainer = styled.div`
  border: 1px solid black;
  display: flex; 
  flex-direction: column; 
  row-gap: 10px;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 6;
  background-color: rgba(199, 225, 244, 1); 
  border-radius: 4px;
  width: 70%;
  max-width: 800px;
  height: 70%px;
  max-height: 80%;
  overflow: auto;
  overflow-wrap: break-word;
  padding: 15px;
  font-family: sans-serif;
`;

const Header = styled.div`
  font-weight: bold;
`;

const Title = styled.div`
  font-size: 20pt;
  font-weight: bold;
`;

export default PostPopup;
