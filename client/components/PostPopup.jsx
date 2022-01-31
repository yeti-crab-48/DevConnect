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
        console.log(popup);
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
    <PopupWrapper>
      <TitleWrapper>{popupBody.title}</TitleWrapper>
      <HeaderWrapper>Date Posted: </HeaderWrapper>
      <div>{popupBody.createdAt}</div> 
      <HeaderWrapper>Gig Description: </HeaderWrapper>
      <div>{popupBody.body}</div>
      <HeaderWrapper>You should know and love the following technologies: </HeaderWrapper>
      <div>{popupBody.skills}</div>
      <HeaderWrapper>If interested, please call: </HeaderWrapper><span>{popupBody.contactInfo}</span>
    </PopupWrapper>
  );
};


const PopupWrapper = styled.div`
  border: 1px solid black;
  display: flex; 
  flex-direction: column; 
  row-gap: 10px;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 6;
  background-color: white; 
  border-radius: 4px;
  width: 800px;
  max-width: 800px;
  height: 600px;
  max-height: 600px;
  overflow: auto;
  overflow-wrap: break-word;
  padding: 15px;
`;

const HeaderWrapper = styled.div`
  font-weight: bold;
`;

const TitleWrapper = styled.div`
  font-size: 20pt;
  font-weight: bold;
`;

export default PostPopup;
