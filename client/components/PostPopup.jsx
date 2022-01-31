import React, { useState, useEffect } from 'react';
import styled from 'styled-components';


const PostPopup = ({ postId }) => {
  
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
        newState.createdAt = new Date(popup.created_at).toString();
        setPopupBody(newState);
        console.log(newState)
      })
  }, [])

  /*
  body: "gagaga"
contact: "1234567890"
created_at: "2022-01-29T08:00:00.000Z"
id: "a8ccc85e-94ad-41bc-a61a-33142716b217"
numapplicant: 0
skills: "gagaga"
title: "gagaga"
user_id: "ce0993e6-8409-48ed-b234-1b0816f4b391"
  */


  return (
    <PopupWrapper>
      <div>Contact Info</div>
      <div>{popupBody.contactInfo}</div>
      <div>Title</div>
      <div>{popupBody.title}</div>
      <div>Description: </div><span>{popupBody.description}</span>
      <div>Skils: </div><span>{popupBody.skills}</span>
      <div>Date: </div><span>{popupBody.createdAt}</span> 
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
  z-index: 6;
  background-color: white; 
`;

export default PostPopup;
