import React from "react";
import styled from "styled-components";



const PostCard = ({key, id, title, createdAt}) => {

  return (
    console.log(title, createdAt), 
    <StyledPostCard key={key}>
        {title}
        {createdAt}
    </StyledPostCard>
  )
};

const StyledPostCard = styled.div`
width: 55px;
height: 105px;
border: 2px solid black; 
`;

export default PostCard;